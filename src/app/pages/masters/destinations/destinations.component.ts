import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class PageDestinationsComponent implements OnInit {
  pageTitle: string = 'Destinations';
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

  constructor( private _sharedService: SharedService ) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
    this._sharedService.emitChange(this.pageTitle);
  }

  filterStates(val: string) {
    return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
  }

  ngOnInit() {}
}
