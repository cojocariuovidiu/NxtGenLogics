import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SharedService } from '../../../layouts/shared-service';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class PageDestinationsComponent implements OnInit {
  pageTitle: string = 'Destinations';
  dest_id: String;
  dest_name: String;
  state: String;
    
  stateCtrl: FormControl;
  filteredStates: any;
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

  constructor( private fb: FormBuilder, 
    private _sharedService: SharedService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService ) {
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
      dest_id: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      dest_name: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      
    });
  }

  onAddDestinationSubmit(){
    const destination = {
      dest_id: this.dest_id,
      dest_name: this.dest_name,
      state: this.state,
      
    }
    this.authService.addDestination(destination).subscribe(data => {
      if(data.success){
        this.flashMessage.show('destination added', {cssClass: 'alert-success', timeout: 3000});
       // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/register']);
      }
    });
  }

}
