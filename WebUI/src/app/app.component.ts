import { Component, OnInit } from '@angular/core';
import { OperationServiceService } from './operation-service.service';
import { IData } from './IData';
import { Data } from './Data';
import { IResult } from './IResult';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OperationServiceService]
})
export class AppComponent implements OnInit {
  title = 'Math Test App';
  result: number;
  data: Data;
  number1: number;
  number2: number;
  errorMessage:string;

  constructor(private operationService: OperationServiceService){}

  ngOnInit(): void {
    //this.getResult();
  }

  getResult(): void {
    this.operationService.getResult(new Data(this.number1, this.number2)).subscribe(r => { 
      this.result = r.result;
    },
    error => {
      this.errorMessage = <any>error.message;
    });
  }
}
