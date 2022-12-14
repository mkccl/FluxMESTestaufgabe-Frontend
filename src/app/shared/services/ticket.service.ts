import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Ticket} from "../model/ticket";
import {Page} from "../model/page";
import {tick} from "@angular/core/testing";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getTickets(page: number) {
    let params = new HttpParams()
      .set("page", page);

    return this.http.get<Page>(environment.apiUrlHeroku + "/ticket", {params: params});
  }

  updateTicketById(ticket: Ticket) {
    return this.http.put(environment.apiUrlHeroku + "/ticket/update/id/" + ticket.ticketId, ticket);
  }

  createTicket(ticket: Ticket) {
    return this.http.post<Ticket>(environment.apiUrlHeroku + "/ticket", ticket);
  }

  getTicketByTicketId(ticketId: string) {
    return this.http.get<Ticket>(environment.apiUrlHeroku + "/ticket/id/" + ticketId);
  }

}
