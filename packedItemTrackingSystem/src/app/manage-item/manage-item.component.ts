import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.sass']
})
export class ManageItemComponent implements OnInit {

  constructor(private ItemService: ItemService) { }

  itemList:any;
  itemVal:string='';
  packedItemCount:number;
  unPackedItemCount:number;

  ngOnInit() {
    this.itemList = this.ItemService.getItemList();
    this.getCount();
  }

  //To add a new item to the existing list
  addNewItem(){
    let newItem:any = {
      'value': this.itemVal,
      'packed': false
    }
    this.itemList.unshift(newItem);
    this.itemVal='';
    this.getCount();
  }

  //To remove an item from the existing list
  removeItem(index:number){
    this.itemList.splice(index,1);
    this.getCount();
  }

  //To move an item between the packed and unpacked list
  moveItem(event:any, item:any, index:number){
    if(event.target.checked){
      this.itemList[index].packed = true;
    } else{
      this.itemList.splice(index,1);
      item.packed = false;
      this.itemList.unshift(item);
    }
    this.getCount();
  }

  //To mark all unpacked
  markAll(){
    this.itemList.forEach(element => {
      element.packed = false;
    });
    this.getCount();
  }

  //To get the total count of Packed and Unpacked list
  getCount(){
    this.unPackedItemCount = this.itemList.filter((obj) => obj.packed === false).length;
    this.packedItemCount= this.itemList.length - this.unPackedItemCount;
  }
}
