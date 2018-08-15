import { Component, OnInit, ViewChild } from '@angular/core';
import { House } from '../house.mode';
import { HouseService } from '../house.service';
import { Router } from '@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  @ViewChild('f') addForm;
  @ViewChild('community') community;
  @ViewChild('address') address;
  @ViewChild('title') title;
  @ViewChild('rental') rental;
  @ViewChild('filePicker') imagePath;
  filePath = '';
  imagePreview: File;
  newHouse: House;
  firstQuestion: boolean;
  secondQuestion: boolean;
  thirdQuestion: boolean;
  fourthQuestion: boolean;
  isFirstBlockInvalid: boolean;
  isSecondBlockInvalid: boolean;

  constructor( private router: Router,
    private houseService: HouseService) {}

  ngOnInit() {
    this.isFirstBlockInvalid = false;
    this.firstQuestion = true;
    this.secondQuestion = false;
    this.thirdQuestion = false;
    this.fourthQuestion = false;
    this.isSecondBlockInvalid = false;
  }

  nextQuestion(questionNo: string) {
    if (questionNo === 'second') {
      if (this.community.value === '' || this.address.value === '' ) {
        this.isFirstBlockInvalid = true;
      } else if (this.title.value === '') {
        this.secondQuestion = false;
      } else {
        this.firstQuestion = false;
        this.secondQuestion = true;
        this.thirdQuestion = false;
        this.fourthQuestion = false;
      }
    } else if (questionNo === 'third') {
      if (this.rental.value !== '') {
        this.firstQuestion = false;
        this.secondQuestion = false;
        this.thirdQuestion = true;
        this.fourthQuestion = false;
      } else {
        this.isSecondBlockInvalid = true;
      }
    } else if (questionNo === 'fourth') {
      this.firstQuestion = false;
      this.secondQuestion = false;
      this.thirdQuestion = false;
      this.fourthQuestion = true;
    }
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.filePath = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);

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
  return this.isSecondBlockInvalid;
  }

  onSubmit(form: NgForm) {
    const newHouse: any = {
      userId: form.value.title,
      imageUrl: '../../../assets/images/avalon.jpg',
      title: form.value.title,
      rental: form.value.rental,
      community: form.value.community,
      address: form.value.address,
      description: form.value.description,
      flatmattes: form.value.flatmattes,
      rentalType: form.value.rentalType,
      contactno: form.value.contactno,
      beds: form.value.beds,
      baths: form.value.baths,
      veggie: form.value.veggie ? true : false,
      dryer: form.value.dryer ? true : false,
      aircontrol: form.value.aircontrol ? true : false,
      garage: form.value.garage ? true : false,
      laundary: true,
      shuttleservice: form.value.shuttleservice ? true : false,
      nearby: form.value.nearby,
      distance: '1 Mile',
    };
    this.houseService.addHouse(newHouse, this.imagePreview);
    // add data in service
    this.router.navigate(['/']);
  }

}

