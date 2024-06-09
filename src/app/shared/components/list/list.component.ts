import {Component, Input} from '@angular/core';
import {ContactCardComponent} from "../contact-card/contact-card.component";
import {NgForOf} from "@angular/common";
import {Contact} from "../contact-card/models/contact.model";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ContactCardComponent,
    NgForOf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() contacts: Contact[] = [];
}
