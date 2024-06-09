import {Component, Inject, Input, Output} from '@angular/core';
import {ContactCardEventsService, CONTACTS_CARD_EVENT_SERVICE_NAME} from "./contact-card-events.service";
import {Contact} from "./models/contact.model";

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent implements ContactCardEventsService {
  @Input() contact!: Contact;
  constructor(
    @Inject(CONTACTS_CARD_EVENT_SERVICE_NAME)
    private contactCardEventsService?: ContactCardEventsService) {
  }
  onCardClick(contactData: Contact): void {
    if (this.contactCardEventsService) {
      this.contactCardEventsService.onCardClick(contactData);
    } else {
      // DO SOMETHING !!!
    }
  }
}
