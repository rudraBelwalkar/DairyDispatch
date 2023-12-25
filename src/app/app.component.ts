import { Component } from '@angular/core';
import { MilkService } from './milk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service : MilkService){}
  title = 'milkman';
}
