import { AlertType } from "../types";

export interface IAlertMessage {
  type: AlertType;
  message?: string;
  classes?: string;
}
