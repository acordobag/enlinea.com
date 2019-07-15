import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mainObject: any;
  greeting;

  constructor(private langService: LangService) { }

  ngOnInit() {
    this.mainObject = this.langService.getMainObject();
  }

  welcome() {
    var today = new Date();
    var hourNow = today.getHours();

    if (hourNow < 12) {
      this.greeting = this.mainObject.dialogs.greetings.day;
    }else if (hourNow < 24) {
      this.greeting = this.mainObject.dialogs.greetings.night;
    }

  }

}
