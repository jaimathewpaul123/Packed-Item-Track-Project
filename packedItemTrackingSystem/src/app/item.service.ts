import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  itemList:any = [{
    'value': 'Pants',
    'packed': false
  }, {
    'value': 'Jacket',
    'packed': false
  }, {
    'value': 'iPhone Charger',
    'packed': false
  }, {
    'value': 'MacBook',
    'packed': false
  }, {
    'value': 'Sleeping Pills',
    'packed': true
  }, {
    'value': 'Underwear',
    'packed': false
  }, {
    'value': 'Hat',
    'packed': false
  }, {
    'value': 'T-Shirts',
    'packed': false
  }, {
    'value': 'Belt',
    'packed': false
  }, {
    'value': 'Passport',
    'packed': true
  }, {
    'value': 'Sandwich',
    'packed': true
  }];

  getItemList(){
    return this.itemList;
  }

  updateItemList(){
    
  }

}
