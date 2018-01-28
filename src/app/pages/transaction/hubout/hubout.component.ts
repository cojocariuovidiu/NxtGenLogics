import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { SharedService } from '../../../layouts/shared-service';
import { forEach } from '@angular/router/src/utils/collection';
//import { Stream } from 'stream';


@Component({
  selector: 'app-booking',
  templateUrl: './hubout.component.html',
  styleUrls: ['./hubout.component.scss']
})
export class PageHubOutComponent implements OnInit {
  pageTitle: string = 'Hub Out';
  awbno: String;
  bookdate: String;
  bundleid: String;
  hub: String;
  

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
    return val ? this.awbs.filter((s) => new RegExp(val, 'gi').test(s)) : this.awbs;
  }
  SelectedBundles = [];
  addBundle(newBundle: string) {
    if (newBundle) {
      this.SelectedBundles.push(newBundle);
    }
  }
  awbBundleChange(hubcode){
    console.log(this.hub);
    if(typeof this.hub!="undefined"){
      this.bundless = [];
      this.awbs = [];
      this.getHubBundles(this.hub);
      this.getHubAws(this.hub);
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
      hub: [null],
      bundleid: [null]
            
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

getHubBundles(hubcode){
  //let awbs1 = [];
  this.authService.listHubBundles(hubcode).subscribe(data => {
   //console.log(data.bundles);
    data.movements.forEach(element => {
      if(typeof element.awbnobundleid != "undefined"){
          this.bundless.push(element.awbnobundleid);
      }       
    });
    return this.bundless;
  },err => {
    console.log(err);
    return false;
  
  });    

}

getHubAws(hubcode){
  //let awbs1 = [];
  this.authService.listHubAwbs(hubcode).subscribe(data => {
   //console.log(data.bundles);
    data.movements.forEach(element => {
      if(typeof element.awbnobundleid != "undefined"){
          this.awbs.push(element.awbnobundleid);
      }       
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

  onHuboutSubmit(){
    const movement = {
      awbno: this.awbno,
     // bookdate: this.bookdate,
      hub: this.hub,
      bundleid: this.bundleid,
      movetype: "out"
      
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
