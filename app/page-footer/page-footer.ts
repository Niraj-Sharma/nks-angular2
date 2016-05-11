import {Component} from '@angular/core';

export class Footer { 
	name : string; 
	year : string ;
}

@Component({
    selector: 'page-footer',
    templateUrl: 'app/page-footer/page-footer-template.html'
})

export class PageFooter {
 footer: Footer = {
    name: 'mycompany',
	year :'2016'
  };
}
