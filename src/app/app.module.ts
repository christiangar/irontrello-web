import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    LoginComponent,
    FormComponent,
    ModalComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
