import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOptions;

  constructor(private langService: LangService) { }

  ngOnInit() {
    this.menuOptions = this.langService.getNabvarObject().options;
  }

}
