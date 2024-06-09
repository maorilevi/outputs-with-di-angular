import {
  ContactCardEventsService,
  CONTACTS_CARD_EVENT_SERVICE_NAME
} from "../../shared/components/contact-card/contact-card-events.service";
import {Injectable} from "@angular/core";
import {Contact} from "../../shared/components/contact-card/models/contact.model";

@Injectable()
export class ModuleBContactsCardEventService implements ContactCardEventsService {
  onCardClick(contactData: Contact): void {
    console.log('Module B Card Clicked', contactData);
  }
}
export const CONTACTS_B_CARD_EVENT_SERVICE = {
  provide: CONTACTS_CARD_EVENT_SERVICE_NAME,
  useClass: ModuleBContactsCardEventService
}
