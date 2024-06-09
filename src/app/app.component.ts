import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ModuleBModule} from "./module_b/module-b.module";
import {ModuleAModule} from "./module_a/module-a.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModuleBModule, ModuleAModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'output-with-di';
}
