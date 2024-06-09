import {Contact} from "./models/contact.model";

export interface ContactCardEventsService {
  onCardClick(contactData: Contact): void;
}
export const CONTACTS_CARD_EVENT_SERVICE_NAME = 'ContactCardEventsService';
