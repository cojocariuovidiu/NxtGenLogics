import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { SharedService } from '../../../layouts/shared-service';
import { forEach } from '@angular/router/src/utils/collection';
import { ValidateService } from 'app/services/validate.service';
//import { Stream } from 'stream';


@Component({
  selector: 'app-trainloading',
  templateUrl: './trainloading.component.html',
  styleUrls: ['./trainloading.component.scss']
})
export class PageTrainLoadingComponent implements OnInit {
  pageTitle: string = 'Train Loading';
  awbno: String;
  bookdate: String;
  bundleid: String;
  origin: String;
  destination: String;
  trainno: String;
  rake: String;
  trainbookno: String;
  trainbookamt: String;
  leased: Boolean;
  status: String;

  public form: FormGroup;
  awbCtrl: FormControl;
  filteredAwbs: any;
  bundleCtrl: FormControl;
  filteredBundles: any;

  
  awbs=[];
  aww = this.getbookings();
  bundless=[];
  bww = this.getbundles();
  hubss=[];
  hww = this.gethubs();
  trainLoadings = this.getCurrentLoadings();
  
  
  filterAwbs(val: string) {
    return val ? this.awbs.filter((s) => new RegExp(val, 'gi').test(s)) : this.awbs;
  }
  SelectedAwbs = [];
  addAwb(newAwb: string) {
    if (newAwb) {
      this.SelectedAwbs.push(newAwb);
    }
  }
  
  filterBundles(val: string) {
    return val ? this.bundless.filter((s) => new RegExp(val, 'gi').test(s)) : this.bundless;
  }
  SelectedBundles = [];
  addBundle(newBundle: string) {
    if (newBundle) {
      this.SelectedBundles.push(newBundle);
    }
  }

  constructor( 
    private fb: FormBuilder, 
    private _sharedService: SharedService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService
     ) {
    this._sharedService.emitChange(this.pageTitle);
    this.bundleCtrl = new FormControl();
    this.filteredBundles = this.bundleCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterBundles(name));
    this.awbCtrl = new FormControl();
    this.filteredAwbs = this.awbCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterAwbs(name));
  }
  
  ngOnInit() {
    this.form = this.fb.group({
      awbno: [null],
      bookdate: [null],
     // hub: [null],
      bundleid: [null],
      origin: [null, Validators.compose([Validators.required])],
      destination: [null, Validators.compose([Validators.required])],
      rake: [null, Validators.compose([Validators.required])],
      trainno: [null, Validators.compose([Validators.required])],
      trainbookno: [null],
      trainbookamt: [null],
      leased: [null]
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
  getbundles(){
    //let awbs1 = [];
    this.authService.listBundles().subscribe(data => {
     //console.log(data.bundles);
      data.bundles.forEach(element => {
            this.bundless.push(element.bundleid);       
      });
      return this.bundless;
    },err => {
      console.log(err);
      return false;
    
    });    

  }

  gethubs(){
    //let awbs1 = [];
    this.authService.listHubs().subscribe(data => {
     //console.log(data.bundles);
      data.hubs.forEach(element => {
            this.hubss.push(element);       
      });
      return this.hubss;
    },err => {
      console.log(err);
      return false;
    });    
  }

  getCurrentLoadings(){
    this.authService.listCurrentLoadings().subscribe(data => {
      console.log(data.movements);
      // return JSON.parse(data.movements);
      var res =Object.assign({},data.movements);
    },err => {
      console.log(err);
      return false;
    });    
  }

  ontrainLoadingSubmit(){
    const movement = {
      awbno: this.awbno,
      bundles: this.SelectedBundles,
     // bookdate: this.bookdate,
     // hub: this.hub,
      bundleid: this.bundleid,
      movetype: "trainin",
      origin: this.origin,
      destination: this.destination,
      trainno: this.trainno,
      rake: this.rake,
      trainbookno: this.trainbookno,
      trainbookamt: this.trainbookamt,
      leased: this.leased,
      status: "Loaded"

      
    }
    this.authService.addMovement(movement).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Movement Successfull', {cssClass: 'alert-success', timeout: 3000});
       // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/register']);
      }
    });
  }

}
