import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage {
  name = '';
  email = '';
  favoriteConsole = '';
  favoriteGame = '';
  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
  }

  ngOnInit() {
  }

  


  
    
}
