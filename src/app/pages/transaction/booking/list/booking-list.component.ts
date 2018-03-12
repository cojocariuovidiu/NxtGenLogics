import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from '../../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { SharedService } from '../../../../layouts/shared-service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


//import { Stream } from 'stream';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-bookinglist',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class PageBookingListComponent implements OnInit {
  pageTitle: string = 'Bookings List';
  res: any;
  
  
 
  constructor( 
    private fb: FormBuilder, 
    private _sharedService: SharedService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService
     ) {
    this._sharedService.emitChange(this.pageTitle);
 
  }
  
  ngOnInit() {
    
    this.listbooking();  
    
  }
  listbooking(){
    this.authService.listBookings().subscribe(data => {
        
      this.res = data;
      console.log(this.res);
    
  },err => {
    console.log(err);
    return false;
  });
  }

  deleteBooking(id){
    this.authService.deleteBooking(id).subscribe(data => {
    this.listbooking();
    
  },err => {
    console.log(err);
    return false;
  });
  }

}
