import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { APP_DEPS } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [APP_DEPS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'developer-portfolio';


  ngOnInit(): void {
  }

}
