import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../storage.service'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  angForm: FormGroup;
  constructor(private localStorageService: LocalStorageService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
       title: this.fb.control('', Validators.required ),
       price: this.fb.control('' , Validators.required)
      })
    }

  ngOnInit(): void {

    
  //  console.log(this.angForm.value)
  }

  submit()
  {
    var product = this.angForm.value
    console.log(product.title)
    this.localStorageService.storeOnLocalStorage(product.title, product.price);
  }

}
