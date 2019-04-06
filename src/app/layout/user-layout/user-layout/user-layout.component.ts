import { Component, OnInit } from '@angular/core';

import $ from 'jquery';

@Component({
    selector: 'app-user-layout',
    templateUrl: './user-layout.component.html',
    styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    toggleSidebar() {
        $('#sidebar').toggleClass('active');
        if ($('#sidebar').hasClass('active')) {
            $('.toggle-sidebar i').addClass('fa-bars').removeClass('fa-times');
        } else {
            $('.toggle-sidebar i').addClass('fa-times').removeClass('fa-bars');
        }
    }

}
