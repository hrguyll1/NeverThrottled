import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductService } from './product.service';
import { ProductComponent } from './components/product/product.component';
import { MatToolbarModule, MatSelectModule, MatIcon, MatButtonModule, MatDividerModule, MatSnackBarModule, MatTableModule, MatOptionModule, MatCardModule, MatListModule} from '@angular/material';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatListModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
