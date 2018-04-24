import { Component, OnInit } from '@angular/core';
import { House } from '../house.mode';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  newHouse: House;
  firstQuestion: boolean;
  secondQuestion: boolean;
  thirdQuestion: boolean;

  constructor() { }

  ngOnInit() {
    this.firstQuestion = true;
    this.secondQuestion = false;
    this.thirdQuestion = false;
  }

  nextQuestion(questionNo: string) {
    if (questionNo === 'second') {
      this.firstQuestion = false;
      this.secondQuestion = true;
    }
  }

  previousQuestion(questionNo: string) {
    if (questionNo === 'first') {
      this.firstQuestion = true;
      this.secondQuestion = false;
    }
    console.log(questionNo);
    console.log(this.firstQuestion);
    console.log(this.secondQuestion);
  }

  setMyStyles() {
    const styles = {
      display: this.secondQuestion ? 'block' : 'none'
    };
    return styles;
  }

  setFirstStyles() {
    const styles = {
      display: this.firstQuestion ? 'block' : 'none'
    };
    return styles;
  }

}
