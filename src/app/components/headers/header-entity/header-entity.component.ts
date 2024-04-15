import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-entity',
  templateUrl: './header-entity.component.html',
  styleUrls: ['./header-entity.component.css']
})
export class HeaderEntityComponent {
  @Input() nameEntity!: string;
  @Input() nameImage!: string;
}