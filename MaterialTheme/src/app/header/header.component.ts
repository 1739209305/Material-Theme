import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavRight = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<void>();
  @Output() togglePurpleTheme = new EventEmitter<void>();
  @Output() toggleGreyTheme = new EventEmitter<void>();
  @Output() togglePinkTheme = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
 /* onChange(eventValue: boolean) {
    // console.log('是否黑夜模式：' + eventValue);
    this.toggleDarkTheme.emit(eventValue);
  }*/

}
