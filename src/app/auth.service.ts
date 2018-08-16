import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { AuthData, LogInData } from './auth.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private userId;
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient) {
    }

    getUserId() {
        console.log(this.userId);
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
        // tslint:disable-next-line:max-line-length
        this.http.post<{message: String, userId: String}>('http://housing-env.9rbwapzpfd.us-east-2.elasticbeanstalk.com/api/users/signup', signUpData)
            .subscribe(response => {
                if (response.message === 'UniqueEmail') {
                    alert('An account with this email already exsists');
                } else if (response.message === 'user created') {
                    const userId = response.userId;
                    this.userId = userId.toString();
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
        this.http.post<any>('http://housing-env.9rbwapzpfd.us-east-2.elasticbeanstalk.com/api/users/login', logInData)
            .subscribe(response => {
                if (response.message === 'Password Failure') {
                    alert('Please enter proper password');
                } else if (response.message === 'LoggedIn') {
                    const userId = response.userId;
                    this.userId = userId.toString();
                    console.log(this.userId);
                    this.authStatusListener.next(true);
                } else if (response.message === 'auth fail') {
                    alert('No user account found with given details');
                }
            });
    }
}
