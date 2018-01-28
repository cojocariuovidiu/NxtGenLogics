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
  awbno: String;
  bookdate: String;
  company: String;
  consignor: String;
  consignee: String;
  address: String;
  origin: String;
  destination: String;
  mode: String;
  packetsnum: Number;
  length: Number;
  width: Number;
  Height: Number;
  actweight: Number;
  volweight: Number;
  paymode: String;
  invno: Number;
  invamt: Number;
  gst: String;
  invtotal: Number;
  bundled: Number;
  bundleids: String;
  status: String;

  public form: FormGroup;
  companyCtrl: FormControl;
  filteredCompanies: any;

  company1 = [
    'Gk Logistics',
    'Abc log',
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
      Consignor: [null, Validators.compose([Validators.required])],
      consignee: [null, Validators.compose([Validators.required])],
      Origin: [null, Validators.compose([Validators.required])],
      Destination: [null, Validators.compose([Validators.required])],
      mode: [null, Validators.compose([Validators.required])],
      awbno: [null],
      bookdate: [null],
      address: [null],
      length: [null],
      width: [null],
      Height: [null],
      actweight: [null],
      volweight: [null],
      paymode: [null],
      invno: [null],
      invamt: [null],
      gst: [null],
      invtotal: [null],
      packetsnum: [null, Validators.compose([Validators.required])]
      
    });
  }

  onBookingSubmit(){
    const booking = {
      awbno: this.awbno,
      bookdate: this.bookdate,
      company: this.company,
      consignor: this.consignor,
      consignee: this.consignee,
      address: this.address,
      origin: this.origin,
      destination: this.destination,
      mode: this.mode,
      packetsnum: this.packetsnum,
      length: this.length,
      width: this.width,
      Height: this.Height,
      actweight: this.actweight,
      volweight: this.volweight,
      paymode: this.paymode,
      invno: this.invno,
      invamt: this.invamt,
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
