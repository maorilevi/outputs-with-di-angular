import { Component } from '@angular/core';
import {CONTACTS_A} from "../utils/contacts_a";
import {Contact} from "../../shared/components/contact-card/models/contact.model";
import {CONTACTS_A_CARD_EVENT_SERVICE} from "../services/module-a-contacts-card-event.service";

@Component({
  selector: 'app-view_a',
  providers: [CONTACTS_A_CARD_EVENT_SERVICE],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contacts: Contact[] = CONTACTS_A;
}
