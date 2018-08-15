import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { AuthData, LogInData } from './auth.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private userId: String;
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient) {
        this.userId = '';
    }

    getUserId() {
        return this.userId;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createUser(firstname: String, lastname: String, email: String,
        password: String) {
        const signUpData: AuthData = {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        };
        this.http.post<{message: String, userId: String}>('http://localhost:3060/api/users/signup', signUpData)
            .subscribe(response => {
                if (response.message === 'UniqueEmail') {
                    alert('An account with this email already exsists');
                } else if (response.message === 'user created') {
                    this.userId = response.userId;
                    this.authStatusListener.next(true);
                }
        });
    }

    logOut() {
        this.userId = '';
        this.authStatusListener.next(false);
    }

    logInUser(email: String, password: String) {
        const logInData: LogInData = {
            email: email,
            password: password
        };
        this.http.post<any>('http://localhost:3060/api/users/login', logInData)
            .subscribe(response => {
                if (response.message === 'Password Failure') {
                    alert('Please enter proper password');
                } else if (response.message === 'LoggedIn') {
                    this.userId = response.userId;
                    this.authStatusListener.next(true);
                } else if (response.message === 'auth fail') {
                    alert('No user account found with given details');
                }
            });
    }
}
