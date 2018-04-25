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
  fourthQuestion: boolean;

  isSecondQuestionValid: boolean;

  constructor() { }

  ngOnInit() {
    this.firstQuestion = true;
    this.secondQuestion = false;
    this.thirdQuestion = false;
    this.fourthQuestion = false;
    this.isSecondQuestionValid = false;
  }

  nextQuestion(questionNo: string) {
    if (questionNo === 'second') {
      this.firstQuestion = false;
      this.secondQuestion = true;
      this.thirdQuestion = false;
      this.fourthQuestion = false;
    } else if (questionNo === 'third') {
      this.firstQuestion = false;
      this.secondQuestion = false;
      this.thirdQuestion = true;
      this.fourthQuestion = false;
    } else if (questionNo === 'fourth') {
      this.firstQuestion = false;
      this.secondQuestion = false;
      this.thirdQuestion = false;
      this.fourthQuestion = true;
    }
  }

  previousQuestion(questionNo: string) {
    if (questionNo === 'first') {
      this.firstQuestion = true;
      this.secondQuestion = false;
      this.thirdQuestion = false;
      this.fourthQuestion = false;
    } else if (questionNo === 'second') {
      this.firstQuestion = false;
      this.secondQuestion = true;
      this.thirdQuestion = false;
      this.fourthQuestion = false;
    } else if (questionNo === 'third') {
      this.firstQuestion = false;
      this.secondQuestion = false;
      this.thirdQuestion = true;
      this.fourthQuestion = false;
    }


    console.log(questionNo);
    console.log(this.firstQuestion);
    console.log(this.secondQuestion);
  }

  setSecondStyles() {
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

  setThirdStyles() {
    const styles = {
      display: this.thirdQuestion ? 'block' : 'none'
    };
    return styles;
  }

  setFourthStyles() {
    const styles = {
      display: this.fourthQuestion ? 'block' : 'none'
    };
    return styles;
  }

  isValidSecondForm() {
  return this.isSecondQuestionValid;
  }

}
