import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { FormGroup,  FormBuilder,  Validators, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
productid
  constructor(private activatedRoute: ActivatedRoute) {
    this.createForm();

   }
   createForm()
   {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((currentid)=>
    {
      console.log(currentid)
      this.productid = currentid.id
    });
    console.log(this.productid)
  }

  

}
