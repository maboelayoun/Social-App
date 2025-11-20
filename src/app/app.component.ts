import { Component } from '@angular/core';
import { MainLayoutComponent } from "./core/layouts/main-layout/main-layout.component";
import { TimelineComponent } from "./features/timeline/timeline.component";

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  title = 'social_app';
}
