import {Component, Input, OnInit, Output} from '@angular/core';
import {PriorityEnum, StatusEnum, Ticket} from "../model/ticket";
import {TicketService} from "../services/ticket.service";
import {SelectUtils} from "../utils/selectUtils";
import {Page} from "../model/page";

@Component({
  selector: 'app-ticket-table',
  template: `
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Status</th>
        <th scope="col">P</th>
        <th scope="col">Title</th>
        <th scope="col">Edit</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let ticket of tickets.content; let i = index">
        <td>
          <span [class]="selectUtils.statusBadge(ticket.status!)">
            {{selectUtils.statusTextBadge(ticket.status!)}}
          </span>
        <td>
          <span [class]="selectUtils.priorityBadge(ticket.priority!)">
            {{selectUtils.priorityTextBadge(ticket.priority!)}}
          </span>
        <td>{{ticket.title}}</td>
        <td>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ticketDetailsModal"
                  (click)="getTicketDetails(ticket.ticketId)">Details/Edit</button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div class="modal fade" id="ticketDetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" *ngIf="isTicketDetailsVisible">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Ticket: {{ticket.ticketId}}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4">
                <label for="priority">Priority</label>
                <select id="priority" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" (change)="setPrioritySelectedValue($event)">
                  <option [value]="selectUtils.convertStringToNumber(selectUtils.prioritiesSelect[i])" [selected]="priority === selectUtils.priorityTextBadge(ticket.priority!)" *ngFor="let priority of selectUtils.prioritiesSelect; let i = index">{{priority}}</option>
                </select>
              </div>
              <div class="col-6">
                <label for="status">Status</label>
                <select id="status" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" (change)="setStatusSelectedValue($event)">
                  <option [value]="selectUtils.convertStringToNumber(selectUtils.statusSelect[i])" [selected]="status === selectUtils.statusTextBadge(ticket.status!)" *ngFor="let status of selectUtils.statusSelect; let i = index">{{status}}</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="title">Title</label>
                <input id="title" class="form-control" type="text" [(ngModel)]="ticket.title">
              </div>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea class="form-control" id="description" rows="5" [(ngModel)]="ticket.description" ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" (click)="onClickEditSave()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class TicketTableComponent implements OnInit {

  public selectUtils = new SelectUtils();

  @Input() tickets!: Page;

  ticket!: Ticket;

  isTicketDetailsVisible = false;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  setPrioritySelectedValue(event: any) {
    this.ticket.priority = event.target.value;
  }

  setStatusSelectedValue(event: any) {
    this.ticket.status = event.target.value;
  }

  onClickEditSave() {
    if (!this.ticket.title) {
      console.log("titel has no title");
      return;
    }

    this.ticketService.updateTicketById(this.ticket).subscribe({
      next: value => {
        console.log(value)
      },
      complete: () => {
        location.reload();
      }
    });

  }

  getTicketDetails(ticketId: string) {
    this.isTicketDetailsVisible = false;
    this.ticketService.getTicketByTicketId(ticketId).subscribe({
      next: value => {
        this.ticket = value;
      },
      complete: () => {
        this.isTicketDetailsVisible = true;
      }
    })
  }



}
