import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  selector: 'app-booking',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})
export class PageBookingEditComponent implements OnInit {
  pageTitle: string = 'Edit Booking';
  id: string;
  awb: string;
  booking_date: Date;
  bookin_time: String;
  shipment_id: String;
  company: String;
  company_name: string;
  consignor: String;
  consignor_name: String;
  consignor_address: String;
  consignee: String;
  consignee_name: String;
  consignee_address: String;
  address: String;
  origin: String;
  destination: String;
  mode: string = "Train";
  normal_pcs: number=1;
  volumetric_pcs: String;
  net_pcs: String;
  length: number;
  width: number;
  height: number;
  actual_wt: number;
  volumetric_wt: number;
  chr_wt: String;
  doc_type: Array<string>; 
  booking_type: String;
  paymode: String;
  inv_no: number;
  inv_val: number;
  fixed_val:number;
  gst: number;
  bookno: number;
  labour_charge: number = 0;
  document_charge: number = 0;
  insurance_charge: number = 0;
  other_charge: number = 0;
  invtotal: number;
  packing_type: Array<string>;
  bundled: number;
  bundleids: String;
  status: String;
  remarks: String;
  delivery_date: Date;

  public form: FormGroup;
  companyCtrl: FormControl;
  consignorCtrl: FormControl;
  consigneeCtrl: FormControl;
  filteredCompanies: any;
  destinationCtrl: FormControl;
  originCtrl: FormControl;
  filteredDestinations: any;
  tmodes: string[] = [
    'Train',
    'Air',
    'Road'
  ];

  comp = this.getcompanies();
  dest= this.getdestinations();
  company1 = [
  ];
  destinations = [];
  modes = [
    {value: 'credit', viewValue: 'Credit'},
    {value: 'cash', viewValue: 'Cash'},
    {value: 'cheque', viewValue: 'Cheque'}
  ];
  constructor( 
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, 
    private _sharedService: SharedService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService
     ) {
    this._sharedService.emitChange(this.pageTitle);
    this.route.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
        console.log(this.id);
      console.log(params);
    });
    
    this.companyCtrl = new FormControl();
    this.filteredCompanies = this.companyCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterCompany(name));
    this.consignorCtrl = new FormControl();
    this.filteredCompanies = this.consignorCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterCompany(name));
    this.consigneeCtrl = new FormControl();
    this.filteredCompanies = this.consigneeCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterCompany(name));
    this.destinationCtrl = new FormControl();
    this.filteredDestinations = this.destinationCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterdestination(name));
    this.originCtrl = new FormControl();
    this.filteredDestinations = this.originCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterdestination(name));
  
  }
  
  filterCompany(val: string) {
    return val ? this.company1.filter((s) => new RegExp(val, 'gi').test(s)) : this.company1;
  }
  
  filterdestination(val: string) {
    return val ? this.destinations.filter((s) => new RegExp(val, 'gi').test(s)) : this.destinations;
  }

  ngOnInit() {
    this.form = this.fb.group({
      //consignor: [null, Validators.compose([Validators.required])],
      //consignee: [null, Validators.compose([Validators.required])],
     // origin: [null, Validators.compose([Validators.required])],
     // destination: [null, Validators.compose([Validators.required])],
      mode: [null, Validators.compose([Validators.required])],
      //company: [null, Validators.compose([Validators.required])],
      awb: [null],
      booking_date: [null],
      address: [null],
      consignor_address: [null],
      consignee_address: [null],
      length: [null],
      width: [null],
      height: [null],
      actual_wt: [null],
      volumetric_wt: [null],
      paymode: [null],
      inv_no: [null],
      inv_val: [null],
      fixed_val: [null],
      gst: [null],
      invtotal: [null],
      bookno: [null],
      labour_charge: [null],
      document_charge: [null],
      insurance_charge: [null],
      other_charge: [null],
      normal_pcs: [null, Validators.compose([Validators.required])]
      
    });
   
    this.getNewBookingById(this.id);
     
  }
  getNewBookingById(id){
    this.authService.getNewBookingById(id).subscribe(data => {
      
      console.log(data);
        },err => {
          console.log(err);
          return false;
      });


  }
  
  compannyAddress(companyobj){
    this.company = companyobj._id;
    this.address = companyobj.address + ", " + companyobj.city + ", " + companyobj.state + " Ph. " + companyobj.phone;
   // console.log(companyobj);
  }
  consignorAddress(companyobj){
    this.consignor = companyobj._id;
    this.consignor_address = companyobj.address + ", " + companyobj.city + ", " + companyobj.state + " Ph. " + companyobj.phone;
   
  }
  consigneeAddress(companyobj){
    this.consignee = companyobj._id;
    this.consignee_address = companyobj.address + ", " + companyobj.city + ", " + companyobj.state + " Ph. " + companyobj.phone;
    //console.log(companyobj);
  }
  getcompanies(){
    this.authService.listCompanies().subscribe(data => {
      data.forEach(element => {
               this.company1.push(element);
      });
    
    },err => {
      console.log(err);
      return false;
    
    });    

  }
  getdestinations(){
    this.authService.listDestinations().subscribe(data => {
     // this.destinations = data;
      data.forEach(element => {
        this.destinations.push(element);
});
     console.log(this.destinations);
        },err => {
          console.log(err);
          return false;
      });
  }

  calculate_weight_price(){
    let vwt = 0;
    if(this.mode=="Train") vwt = 4/28000;
    if(this.mode=="Air")  vwt = 1/5000;
    if(!(isNaN(this.length)||isNaN(this.width)||isNaN(this.height))){
    this.volumetric_wt = this.normal_pcs*this.length * this.width * this.height * vwt;
    }
    if(isNaN(this.actual_wt)||Number(this.actual_wt)==0){
      if(!(isNaN(this.volumetric_wt))) this.inv_val = this.volumetric_wt * 16 + this.labour_charge + this.document_charge + this.insurance_charge +this.other_charge;
    } else {
      this.inv_val = (this.actual_wt * 16) + Number(this.labour_charge) + Number(this.document_charge) + Number(this.insurance_charge) + Number(this.other_charge);
    }
    if(isNaN(this.fixed_val)||Number(this.fixed_val)==0){
      if(!(isNaN(this.inv_val))){
      this.gst = this.inv_val*0.05;
      this.invtotal = this.inv_val+this.gst; 
      }
    } else {
      this.gst = 5/105*this.fixed_val;
      this.invtotal = this.fixed_val;
    }
   
  }

  onBookingSubmit(){
    const booking = {
      awb: this.awb,
      book_no: this.bookno,
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
      height: this.height,
      actual_wt: this.actual_wt,
      volumetric_wt: this.volumetric_wt,
      paymode: this.paymode,
      inv_no: this.inv_no,
      labour_charge: this.labour_charge,
      document_charge: this.document_charge,
      insurance_charge: this.insurance_charge,
      other_charge: this.other_charge,
      inv_val: this.inv_val,
      fixed_val: this.fixed_val,
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
