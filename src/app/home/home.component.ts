import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../user/user';
import { UserService } from '../user/user.service'
import { AuthService } from '../auth/auth.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private authService: AuthService,
        private userService: UserService
    ) {
        this.currentUser = this.authService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}