import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User | null;
    videoFile: any;
    environmentRepo = environment.repoUrl;

    constructor(private accountService: AccountService, private router: Router) {
        this.user = this.accountService.userValue;
    }

    
}