import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './_services';
import { Subscription } from 'rxjs';
import { User, Role } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    user?: User | null;
    routerLink?: Router;
    private urlSubscription: Subscription;

    constructor(private accountService: AccountService, private router: Router) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }

    logout() {
        this.accountService.logout();
    }

    ngOnDestroy() {
        this.urlSubscription.unsubscribe();
        }
}