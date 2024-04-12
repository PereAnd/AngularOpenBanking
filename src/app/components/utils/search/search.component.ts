import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `Message from parent: {{filterEntity}}`,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() filterEntity!:string;
}
