import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import {LocalStorageService} from './storage.service'
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    CreateproductComponent,
    EditproductComponent
  ],
  imports: [ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ StorageServiceModule, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
