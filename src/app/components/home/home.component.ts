import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchText = '';

  doSearch() {
    console.log('METHOD: doSearch()');
  }

  checkKeyPress(event: any) {
    console.log('METHOD: checkKeyPress(event):', event);
  }

  clearWhenEmpty() {
    console.log('METHOD: clearWhenEmpty()');
  }
}
