import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menex';
   emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
  ]);
   darkTheme = false;
   GreyTheme = false;
   purplrTheme = false;
   pinkTheme = false;
   defaultTheme = true;

  switchDarkTheme() {
    this.darkTheme = true;
    this.GreyTheme = false;
    this.purplrTheme = false;
    this.pinkTheme = false;
  }
   switchPurpleTheme() {
    this.darkTheme = false;
    this.GreyTheme = false;
    this.purplrTheme = true;
    this.pinkTheme = false;
  }
   switchGreyTheme() {
    this.darkTheme = false;
    this.GreyTheme = true;
    this.purplrTheme = false;
    this.pinkTheme = false;
  }
   switchPinkTheme() {
    this.darkTheme = false;
    this.GreyTheme = false;
    this.purplrTheme = false;
    this.pinkTheme = true;
  }
}
