import { MessagingInterface } from "./interfaces/messaging";

export class Messaging implements MessagingInterface {
  sendMessage(message: string): void {
    console.log(message)
  }
}
