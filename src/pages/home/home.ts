import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    searchQuery: string = '';
    items: string[];
  
  public tap: number = 0;

  constructor(public navCtrl: NavController) {

  }



  initializeItems() {
    this.items = [
      'coinpot',
      'moondoge',
      'moonbit'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }




  tapEvent(e) {
    this.tap++
  }


}
