import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'page-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class PageInvoiceComponent implements OnInit {
  pageTitle: string = 'Invoice';
  res:any;

  constructor( 
    private _sharedService: SharedService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService 
    ) {
      this._sharedService.emitChange(this.pageTitle);
    }

  ngOnInit() {
    this.authService.listCompanies().subscribe(data => {
        
      this.res = data;
      console.log(this.res);
    
  },err => {
    console.log(err);
    return false;
  });
  }

  generateInvoice(id){
    this.authService.companyBookings(id).subscribe(data => {
      console.log(data);
       data.forEach(element => {
            console.log(element);
                 
       });
       
     },err => {
       console.log(err);
       return false;
     
     });
  }
}
