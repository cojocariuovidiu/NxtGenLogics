import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  adhaar: string;
  rate: number;
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
  res: any;
  id: any;
  public form: FormGroup;

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
  
  
  constructor( 
    private fb: FormBuilder,
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
    this.form = this.fb.group({
      company_name: [null, Validators.compose([Validators.required])],
      phone: [null],
      director: [null],
      gst_no: [null],
      adhaar: [null],
      rate: [null],
      address: [null],
      state: [null],
      city: [null],
      postcode: [null],
      md: [null],
      reg_no: [null],
      pan: [null],
      md_number: [null],
      comments: [null]
    
    });

    this.getCompanyList();
  }

  getCompanyList(){
    this.authService.listCompanies().subscribe(data => {
        
      this.res = data;
      console.log(this.res);
    
  },err => {
    console.log(err);
    return false;
  });
  }

  getCompanyById(id){
    this.authService.getCompanyById(id).subscribe(data => {
        this.company_name = data.company_name;
      this.id = id;
      this.gst_no = data.gst_no;
      this.adhaar = data.adhaar;
      this.rate = data.rate;
      this.address = data.address;
      this.state = data.state;
      this.city = data.city;
      this.postcode = data.postcode;
      this.director = data.director;
      this.md = data.md;
      this.reg_no = data.reg_no;
      this.pan = data.pan;
      this.md_number = data.md_number;
      this.phone = data.phone;
      this.comments = data.comments;
      console.log(data);
    
    },err => {
      console.log(err);
      return false;
    });
  }

  deleteCompany(id){
    this.authService.deleteCompany(id).subscribe(data => {
      this.getCompanyList();
      
      console.log(id+" deleted");
    
  },err => {
    console.log(err);
    return false;
  });
  }

  new_reset(){
    this.id=null;
    this.form.reset();
  }
  onCompProfileSubmit(){
    const comp = {
      company_name: this.company_name,
      gst_no: this.gst_no,
      adhaar: this.adhaar,
      rate: this.rate,
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
    if(this.id){
      this.authService.updateCompany(comp,this.id).subscribe(data => {
        if(data.success){
          this.flashMessage.show('Company Updated', {cssClass: 'alert-success', timeout: 3000});
          this.getCompanyList();
          
         // this.router.navigate(['/login']);
        } else {
          this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 3000});
         // this.router.navigate(['/register']);
         
        }
      });
    
    } else {
    this.authService.addCompany(comp).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Company Created', {cssClass: 'alert-success', timeout: 3000});
        this.getCompanyList();
        this.form.reset();
       // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/register']);
       
      }
    });
  }
  
}

}
