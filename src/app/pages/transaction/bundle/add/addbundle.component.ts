import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from '../../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { SharedService } from '../../../../layouts/shared-service';
import { forEach } from '@angular/router/src/utils/collection';
//import { Stream } from 'stream';


@Component({
  selector: 'app-bundle',
  templateUrl: './addbundle.component.html',
  styleUrls: ['./addbundle.component.scss']
})
export class PageAddBundleComponent implements OnInit {
  pageTitle: string = 'Create Bundle';
  awbno: String;
  bookdate: String;
  awbss: String;
  hub: String;
  

  public form: FormGroup;
  awbCtrl: FormControl;
  filteredAwbs: any;

  company1 = [
    'Gk Logistics',
    'Abc log',
  ];

 // awbss = this.authService.listBookings();
   //awbs = ['aw677665', 'aw767878', 'aw566565', 'aw07665', 'awhhhh7676'];
   awbs=[];
   aww = this.getbookings();   
   filterAwbs(val: string) {
    return val ? this.awbs.filter((s) => new RegExp(val, 'gi').test(s)) : this.awbs;
  }
  SelectedAwbs = [];
  Bundleid: String;
  addAwb(newAwb: string) {
    if (newAwb) {
      this.SelectedAwbs.push(newAwb);
    } 
  }
  
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
    this.awbCtrl = new FormControl();
    this.filteredAwbs = this.awbCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterAwbs(name));
  }
  
  ngOnInit() {
    this.form = this.fb.group({
      awbss: [null],
      awbno: [null],
      bookdate: [null],
      hub: [null]
      
    });
  }
  getbookings(){
    //let awbs1 = [];
    this.authService.listBookings().subscribe(data => {
     //console.log(data.bookings);
      data.bookings.forEach(element => {
           
          if(element.awbno!=null && element.bundled !=element.packetsnum){ 
            let awb = element.awbno+'-'+(element.packetsnum-element.bundled);
            this.awbs.push(awb); }       
      });
      return this.awbs;
    },err => {
      console.log(err);
      return false;
    
    });    

  }
  onBundleSubmit(){
    const bundle = {
      awbno: this.awbno,
      bookdate: this.bookdate,
      hub: this.hub,
      awbss: this.SelectedAwbs
    }
    this.authService.addBundle(bundle).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Bundle Created', { cssClass: 'alert-success', timeout: 3000 });
       // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/register']);
      }
    });
  }

}
