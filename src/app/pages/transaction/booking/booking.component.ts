import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { SharedService } from '../../../layouts/shared-service';
//import { Stream } from 'stream';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class PageBookingComponent implements OnInit {
  pageTitle: string = 'Booking';
  awb: String;
  booking_date: Date;
  bookin_time: String;
  shipment_id: String;
  company: String;
  consignor: String;
  consignee: String;
  address: String;
  origin: String;
  destination: String;
  mode: String;
  normal_pcs: Number;
  volumetric_pcs: String;
  net_pcs: String;
  length: Number;
  width: Number;
  Height: Number;
  actual_wt: Number;
  volumetric_wt: Number;
  chr_wt: String;
  doc_type: Array<string>; 
  booking_type: String;
  paymode: String;
  inv_no: Number;
  inv_val: Number;
  gst: String;
  invtotal: Number;
  packing_type: Array<string>;
  bundled: Number;
  bundleids: String;
  status: String;
  remarks: String;
  delivery_date: Date;

  public form: FormGroup;
  companyCtrl: FormControl;
  filteredCompanies: any;


  comp = this.getcompanies();
  company1 = [
  ];
  modes = [
    {value: 'credit', viewValue: 'Credit'},
    {value: 'cash', viewValue: 'Cash'},
    {value: 'cheque', viewValue: 'Cheque'}
  ];
  constructor( 
    private fb: FormBuilder, 
    private _sharedService: SharedService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService
     ) {
    this._sharedService.emitChange(this.pageTitle);
    this.companyCtrl = new FormControl();
    this.filteredCompanies = this.companyCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterCompany(name));
  }
  filterCompany(val: string) {
    return val ? this.company1.filter((s) => new RegExp(val, 'gi').test(s)) : this.company1;
  }
  ngOnInit() {
    this.form = this.fb.group({
      consignor: [null, Validators.compose([Validators.required])],
      consignee: [null, Validators.compose([Validators.required])],
      origin: [null, Validators.compose([Validators.required])],
      destination: [null, Validators.compose([Validators.required])],
      mode: [null, Validators.compose([Validators.required])],
      company: [null, Validators.compose([Validators.required])],
      awb: [null],
      booking_date: [null],
      address: [null],
      length: [null],
      width: [null],
      height: [null],
      actual_wt: [null],
      volumetric_wt: [null],
      paymode: [null],
      inv_no: [null],
      inv_val: [null],
      gst: [null],
      invtotal: [null],
      normal_pcs: [null, Validators.compose([Validators.required])]
      
    });
  }


  getcompanies(){
    //let awbs1 = [];
    console.log('try');
    this.authService.listCompanies().subscribe(data => {
     console.log(data); 
      data.forEach(element => {
           console.log(element);
               this.company1.push(element);
      });
    
    },err => {
      console.log(err);
      return false;
    
    });    

  }

  onBookingSubmit(){
    const booking = {
      awb: this.awb,
      booking_date: this.booking_date,
      company: this.company,
      consignor: this.consignor,
      consignee: this.consignee,
      address: this.address,
      origin: this.origin,
      destination: this.destination,
      mode: this.mode,
      normal_pcs: this.normal_pcs,
      length: this.length,
      width: this.width,
      Height: this.Height,
      actual_wt: this.actual_wt,
      volumetric_wt: this.volumetric_wt,
      paymode: this.paymode,
      inv_no: this.inv_no,
      inv_val: this.inv_val,
      gst: this.gst,
      invtotal: this.invtotal,
      bundled: 0,
      bundleids: '',
      status: 'process'

    }
    this.authService.addBooking(booking).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Booking Successfull', {cssClass: 'alert-success', timeout: 3000});
       // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/register']);
      }
    });
  }

}
