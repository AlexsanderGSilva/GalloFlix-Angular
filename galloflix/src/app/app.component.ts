import { Component, HostListener } from '@angular/core';

export class AppComponent {
  title = 'galloflix';
  navbg: any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop, 'scrolllength#');
	
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
	  this.navbg = {
	    'background-color':'#000000'
	  }
	} else {
	  this.navbg = {}
	}
  }
}