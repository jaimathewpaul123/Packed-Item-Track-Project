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

  addNewItem(val:string){
    let newItem:any = {
      'value': this.itemVal,
      'packed': false
    }
    this.itemList.unshift(newItem);
    this.itemVal='';
    this.getCount();
  }

  removeItem(index:number){
    this.itemList.splice(index,1);
    this.getCount();
  }

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

  markAll(){
    this.itemList.forEach(element => {
      element.packed = false;
    });
    this.getCount();
  }

  getCount(){
    this.unPackedItemCount = this.itemList.filter((obj) => obj.packed === false).length;
    this.packedItemCount= this.itemList.length - this.unPackedItemCount;

  }


}
