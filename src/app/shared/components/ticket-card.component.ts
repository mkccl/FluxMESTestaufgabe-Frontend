import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../model/ticket";

@Component({
  selector: 'app-ticket-card',
  template: `
    <div class="card mt-2 mb-2">
      <div class="card-header">
        <span class="badge text-bg-success ms-2 me-2">Success</span>
        <span class="badge text-bg-light ms-2 me-2">New</span>
        <span class="badge rounded-pill text-bg-info">{{ticket.status}}</span>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ticket.title}}</h5>
        <p class="card-text">{{ticket.description}}</p>
        <div class="d-flex justify-content-center gap-3">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Edit</button>
          <a href="#" class="btn btn-primary">Done</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class TicketCardComponent implements OnInit {

  @Input() ticket!: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

}
