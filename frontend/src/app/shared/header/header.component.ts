import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller : boolean = false;
  collapsed = true;

  @Input() title: string;

  toggleCollapse() : void {
    this.collapsed = !this.collapsed;
  }
  constructor() {

  }

  ngOnInit() {
  }

}
