import { MessagingInterface } from "../services/interfaces/messaging";

export class MessagingMock implements MessagingInterface {
  sendMessage() {
    console.log('Message sent!');
  }
}
