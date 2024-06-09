import { Component } from '@angular/core';
import {CONTACTS_B} from "../utils/contacts_b";
import {Contact} from "../../shared/components/contact-card/models/contact.model";
import {CONTACTS_B_CARD_EVENT_SERVICE} from "../services/module-b-contacts-card-event.service";

@Component({
  selector: 'app-view_b',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
  providers: [CONTACTS_B_CARD_EVENT_SERVICE]
})
export class ViewComponent {
  contacts: Contact[] = CONTACTS_B;
}
