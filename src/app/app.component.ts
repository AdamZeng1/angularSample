import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  showSecret = false;
  log = [];

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  getColor(logItem: number) {
    return logItem >= 5 ? 'blue' : 'white';
  }
}
