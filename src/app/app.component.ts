import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavComponent } from "./main-nav/main-nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
}
