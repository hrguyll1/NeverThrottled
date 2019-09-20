import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductService } from './product.service';
import { ProductComponent } from './components/product/product.component';
import { MatToolbarModule, MatSelectModule, MatIcon, MatButtonModule, MatDividerModule, MatIconModule, MatSnackBarModule, MatTableModule, MatOptionModule, MatCardModule, MatListModule, MatSidenavModule, MatDrawerContainer, MatMenuModule, MatSpinner, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatGridListModule} from '@angular/material';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    LoginComponent,
    UserComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatOptionModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule
      ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
