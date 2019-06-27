import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutUsObject: any;

  constructor(private langService: LangService) { }

  ngOnInit() {
    this.aboutUsObject = this.langService.getMainAboutUs();
  }

}
