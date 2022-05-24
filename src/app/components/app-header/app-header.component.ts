import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input()  isMainPageVisible!: boolean;
  @Input()  isAboutUsPageVisible!: boolean;
  @Input()  isContactPageVisible!: boolean;

  @Output() onMainPageSelect = new EventEmitter();
  @Output() onAboutUsPageSelect = new EventEmitter();
  @Output() onContactPageSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showMainPage(){
      this.onMainPageSelect.emit();
  }

  showAboutUsPage(){
      this.onAboutUsPageSelect.emit();
  }
  showContactPage(){
      this.onContactPageSelect.emit();
  }
}
