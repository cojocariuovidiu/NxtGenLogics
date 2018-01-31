import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { SharedService } from '../../../layouts/shared-service';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class PageCompanyInfoComponent implements OnInit {
  pageTitle: string = 'Company Info';
  company_name: String;
  gst_no: String;
  address: String;
  state: String;
  city: String;
  postcode: String;
  director: String;
  md: String;
  reg_no: String;
  pan: String;
  md_number: String;
  phone: String;
  comments: String;
  stateCtrl: FormControl;
  filteredStates: any;

  states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu & Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman & Nicobar',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman & Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry' 
  ];
  
  favoriteSeason: string = 'Winter';

  seasons: string[] = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn'
  ];

  color: string;

  availableColors = [
    { name: 'Default', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warning', color: 'warn' }
  ];

  constructor( 
    private _sharedService: SharedService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService 
  ) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
    this._sharedService.emitChange(this.pageTitle);
  }

  filterStates(val: string) {
    return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
  }

  ngOnInit() {
  }

  onCompProfileSubmit(){
    const comp = {
      company_name: this.company_name,
      gst_no: this.gst_no,
      address: this.address,
      state: this.state,
      city: this.city,
      postcode: this.postcode,
      director: this.director,
      md: this.md,
      reg_no: this.reg_no,
      pan: this.pan,
      md_number: this.md_number,
      phone: this.phone,
      comments: this.comments
    }
    this.authService.addCompany(comp).subscribe(data => {
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
