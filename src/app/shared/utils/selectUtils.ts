import {PriorityEnum, StatusEnum} from "../model/ticket";

export class SelectUtils {
  prioritiesSelect: string[] = ["HIGH", "MEDIUM", "LOW"];
  statusSelect: string[] = ["IN PROGRESS", "DONE", "NEW"];

  convertStringToNumber(value: string) {
    switch (value) {
      case "HIGH":
      case "NEW":
        return 0;
      case "MEDIUM":
      case "IN PROGRESS":
        return 1;
      case "LOW":
      case "DONE":
        return 2;

    }
    return NaN;
  }

  priorityTextBadge(priority: PriorityEnum) {
    switch (priority) {
      case PriorityEnum.HIGH:
        return "HIGH";
      case PriorityEnum.MEDIUM:
        return "MEDIUM";
      case PriorityEnum.LOW:
      default:
        return "LOW";
    }
  }

  priorityBadge(priority: PriorityEnum) {
    switch (priority) {
      case PriorityEnum.HIGH:
        return "badge text-bg-danger";
      case PriorityEnum.MEDIUM:
        return "badge text-bg-warning";
      case PriorityEnum.LOW:
      default:
        return "badge text-bg-primary";
    }
  }

  statusTextBadge(status: StatusEnum) {
    switch (status) {
      case StatusEnum.NEW:
        return "NEW";
      case StatusEnum.IN_PROGRESS:
        return "IN PROGRESS";
      case StatusEnum.DONE:
      default:
        return "DONE";
    }
  }

  statusBadge(status: StatusEnum) {
    switch (status) {
      case StatusEnum.NEW:
        return "badge text-bg-dark";
      case StatusEnum.IN_PROGRESS:
        return "badge text-bg-info";
      case StatusEnum.DONE:
      default:
        return "badge text-bg-success";
    }
  }

}
