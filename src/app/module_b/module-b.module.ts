import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewComponent} from "./view/view.component";
import {ListComponent} from "../shared/components/list/list.component";



@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ListComponent
  ],
  exports: [ViewComponent]
})
export class ModuleBModule { }
