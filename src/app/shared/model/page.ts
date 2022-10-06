import {Ticket} from "./ticket";

export interface Page {
  content: Ticket[];
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;

}
