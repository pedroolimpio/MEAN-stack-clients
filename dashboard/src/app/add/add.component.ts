import { Component, OnInit, EventEmitter } from '@angular/core';

import {MaterializeAction} from 'angular2-materialize';
import { CustomHTTPService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private customHttp: CustomHTTPService, private router: Router) { }

  maritalStatus = [
    {value: 0, name: "UNMARRIED"},
    {value: 1, name: "MARRIED"}
  ]

  model = {
    cpf: "",
    name: "",
    email: "",
    maritalStatus: -1,
    address: "",
    phones: []
  }

  tempPhone = "";
  responseSubmit = "";

  ngOnInit() {

  }

  onChangeMaritalStatus(value){

    this.model.maritalStatus = parseInt(value);

  }

  addPhone(phone){

    if (phone.length > 0)
      this.model.phones.push(phone);
    this.closeModal();
  }

  deletePhone(phone){

    var idx = this.model.phones.findIndex(function(element, index){
      return element == phone;
    });

    if (idx > -1)
      this.model.phones.splice(idx, 1);

  }

  onSubmit(){

    this.customHttp.add(this.model).then(res => {

      this.router.navigate(["/"]);

    }).catch(err => {
      console.log(err);
      this.responseSubmit = JSON.parse(err._body).error.message;
    });

  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
