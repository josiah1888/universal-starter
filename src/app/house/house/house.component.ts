import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {House, HouseService} from '../services/house.service';
import {EditableHouseComponent} from '../editable-house/editable-house.component';
import {HouseAddressUrlPipe} from '../pipes/house-address-url.pipe';
import {LoginService} from '../../login/login.service';

const STOCK_IMAGE_URL: string = 'https://openclipart.org/image/2400px/svg_to_png/217511/1429747035.png';

@Component({
  selector: 'house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.css'],
  directives: [
    EditableHouseComponent,
    ...ROUTER_DIRECTIVES,
    ],
  providers: [LoginService],
})
export class HouseComponent {
  @Input() house: House;
  @Input() isOwnerView: boolean;
  @Input() isSmallView: boolean;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  hasAuth$: Observable<boolean>;
  pipe: HouseAddressUrlPipe = new HouseAddressUrlPipe();
  editableHouse: House;
  
  constructor(private houseService: HouseService, private loginService: LoginService) {
    this.hasAuth$ = loginService.hasAuth$;
  }

  ngOnChanges() {
    this.house.imageUrl = this.house.imageUrl || STOCK_IMAGE_URL;
    this.editableHouse = Object.assign({}, this.house);
  }
  
  changeOrder({house, direction}: {house: House, direction: number}) {
    this.houseService.changeOrder(house, direction);
  }
}

