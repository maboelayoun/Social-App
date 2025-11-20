import { Component } from '@angular/core';
import { CreatePostComponent } from "../../shared/components/create-post/create-post.component";

@Component({
  selector: 'app-timeline',
  imports: [CreatePostComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

}
