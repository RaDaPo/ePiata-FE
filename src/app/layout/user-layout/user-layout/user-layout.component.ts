import { Component, OnInit, ElementRef } from '@angular/core';

import $ from 'jquery';

@Component({
    selector: 'app-user-layout',
    templateUrl: './user-layout.component.html',
    styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

    private nativeElement;

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.nativeElement = this.el.nativeElement;
    }

    toggleSidebar() {
        $('#sidebar').toggleClass('active');
        if ($('#sidebar').hasClass('active')) {
            $('.toggle-sidebar i').addClass('fa-bars').removeClass('fa-times');
        } else {
            $('.toggle-sidebar i').addClass('fa-times').removeClass('fa-bars');
        }
    }

    open(modalIdentificator: string) {
        $(this.nativeElement).find('#modals-container').addClass('modal-open');
        $(this.nativeElement).find(modalIdentificator).addClass('show');
        $(this.nativeElement).find(modalIdentificator).css('display', 'block');
        $(this.nativeElement).find('.backdrop').addClass('backdrop--open');
    }

    close(modalIdentificator: string) {
        $(this.nativeElement).find('#modals-container').removeClass('modal-open');
        $(this.nativeElement).find(modalIdentificator).removeClass('show');
        $(this.nativeElement).find(modalIdentificator).css('display', 'none');
        $(this.nativeElement).find('.backdrop').removeClass('backdrop--open');
    }

}
