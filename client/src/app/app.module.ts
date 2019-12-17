import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { TransactionsComponent } from './pages/admin/transactions/transactions.component';
import { AdmissionComponent } from './pages/user/admission/admission.component';
import { PaymentComponent } from './pages/user/payment/payment.component';
import { FormslistComponent } from './pages/formslist/formslist.component';
import { FormviewerComponent } from './pages/formviewer/formviewer.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    DashboardComponent,
    TransactionsComponent,
    AdmissionComponent,
    PaymentComponent,
    FormslistComponent,
    FormviewerComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
