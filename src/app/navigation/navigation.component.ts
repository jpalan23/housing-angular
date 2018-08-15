import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild('filterHouse') filterHouse: ElementRef;
  public searchValid: boolean;
  @ViewChild('SignUpModal') signUpModal: ElementRef;
  @ViewChild('LoginModal') loginModal: ElementRef;
  public userIsAuthenticated = false;
  private authListener: Subscription;

  constructor( private router: Router, public authService: AuthService, public houseService: HouseService) {
    this.searchValid = false;
   }

  ngOnInit() {
    this.authListener = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy() {
    this.authListener.unsubscribe();
  }
  onSignUp(form: NgForm) {
    console.log(this.signUpModal);
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.firstname, form.value.lastname, form.value.email, form.value.password);
    this.router.navigate(['/']);
    this.signUpModal.nativeElement.classList.remove('displayModal');
    this.signUpModal.nativeElement.classList.add('displayNone');
  }

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

  filterListing() {
    const searchValue = this.filterHouse.nativeElement.value;
    this.houseService.filterListing(searchValue);
  }

  onLogIn(form: NgForm) {
    this.authService.logInUser(form.value.email, form.value.password);
    this.router.navigate(['/']);
    this.loginModal.nativeElement.classList.remove('displayModal');
    this.loginModal.nativeElement.classList.add('displayNone');
  }

  closeModal(modalName) {
      if (modalName === 'signUp') {
        this.signUpModal.nativeElement.classList.remove('displayModal');
        this.signUpModal.nativeElement.classList.add('displayNone');
      } else {
        this.loginModal.nativeElement.classList.remove('displayModal');
        this.loginModal.nativeElement.classList.add('displayNone');
      }
  }

  showSignUpModal() {
    this.signUpModal.nativeElement.classList.remove('displayNone');
    this.signUpModal.nativeElement.classList.add('displayModal');
  }
  showLoginModal() {
    this.loginModal.nativeElement.classList.remove('displayNone');
    this.loginModal.nativeElement.classList.add('displayModal');
  }
}
