export interface Ticket {
  ticketId: string;
  title: string | null | undefined;
  description: string | null | undefined;
  priority: PriorityEnum  | null | undefined;
  status: StatusEnum | null | undefined;
}

export enum PriorityEnum {
  HIGH,
  MEDIUM,
  LOW,
}

export enum StatusEnum {
  NEW,
  IN_PROGRESS,
  DONE,

}
