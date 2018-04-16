import { Component, OnInit } from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';
import { CustomHTTPService } from '../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private customHttp: CustomHTTPService) { }

  model = {
    inputSearch: ""
  }
  clients: Array<any> = [];

  ngOnInit() {

  }

  onChangeSearch(){

    console.log(this.model.inputSearch);

    if (this.model.inputSearch.length >= 2){

      this.customHttp.search(this.model.inputSearch).then(res => {

       this.clients = res.data;
       
  
      }).catch(err => {
        
        //use if need handle error
        
        //console.log(err);
      });

    }

  }

  onGetAllClients(){

    this.customHttp.getAll().then(res => {

      this.clients = res.data;
      
 
     }).catch(err => {
       
       //use if need handle error
       
       //console.log(err);
     });

  }

  deleteItem(item){

    console.log(item);

    this.customHttp.delete(item.cpf).then(res => {

      var idx = this.clients.findIndex(function(element, index){
        return element.cpf == item.cpf;
      });

      if (idx > -1)
        this.clients.splice(idx, 1);

    }).catch(err => {
      //handle error
      console.log(err);
    })

  }

}
