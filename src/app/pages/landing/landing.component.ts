import {Component, OnInit} from '@angular/core';
import {PriorityEnum, Ticket} from "../../shared/model/ticket";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TicketService} from "../../shared/services/ticket.service";
import {Page} from "../../shared/model/page";
import {ActivatedRoute, Router} from "@angular/router";
import {SelectUtils} from "../../shared/utils/selectUtils";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public selectUtils = new SelectUtils();

  ticketForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl(""),
    priority: new FormControl("", [Validators.required])
  });

  isTicketsLoaded = false;
  isTicketEditable = false;

  tickets!: Page;

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (value: any) => {
        if (value.page == undefined) {
          this.onClickChangePage(0);
        }
        this.getTickets(value.page);
      }
    })

  }

  getTickets(page: number) {
    this.ticketService.getTickets(page).subscribe({
      next: value => {
        console.log(value);
        this.tickets = value;
      },
      complete: () => {
        this.isTicketsLoaded = true;
      }
    })
  }

  onClickChangePage(value: number) {
    this.router.navigate(["tasks"], {queryParams: {
      page: value
      }});

    window.scrollTo(0, 0)
  }

  pageNumbers() {
    return new Array(this.tickets.totalPages);
  }

  onTicketSubmit() {
    console.log(this.title?.value)

    const ticket: Ticket = {
      ticketId: "",
      title: this.title?.value,
      description: this.description?.value,
      priority: this.prioritiesPicker(),
      status: null
    }

    this.ticketService.createTicket(ticket).subscribe({
      next: value => {
        console.log(value);
        this.tickets.content.push(value);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        location.reload();
      }
    });
  }


  private prioritiesPicker() {
    switch (this.priority?.value) {
      case "0":
        return PriorityEnum.HIGH;
      case "1":
        return PriorityEnum.MEDIUM;
      case "2":
        return PriorityEnum.LOW;
    }
    return null;
  }

  onChangeStatusSelect(event: any) {
    return event.target.value;
  }

  get priority() {
    return this.ticketForm.get("priority")
  }

  get status() {
    return this.ticketForm.get("status");
  }

  get title() {
    return this.ticketForm.get("title");
  }

  get description() {
    return this.ticketForm.get("description");
  }

}
