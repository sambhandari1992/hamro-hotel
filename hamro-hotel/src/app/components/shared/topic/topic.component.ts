import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent {
  @Input() currentRouteName: string = ''; // Default title is 'Facilities'


}
