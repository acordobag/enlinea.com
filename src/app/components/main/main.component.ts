import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mainObject: any;

  constructor(private langService: LangService) { }

  ngOnInit() {
    this.mainObject = this.langService.getMainObject();
  }

}
