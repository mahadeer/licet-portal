import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { DashboardComponent } from "./pages/admin/dashboard/dashboard.component";
import { TransactionsComponent } from "./pages/admin/transactions/transactions.component";
import { AdmissionComponent } from "./pages/user/admission/admission.component";
import { PaymentComponent } from "./pages/user/payment/payment.component";
import { FormslistComponent } from "./pages/formslist/formslist.component";
import { FormviewerComponent } from "./pages/formviewer/formviewer.component";
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  /* Auth Pages */
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  /* Admin Pages */
  { path: "dashboard", component: DashboardComponent },
  { path: "transactions", component: TransactionsComponent },
  /* User Pages */
  { path: "create", component: AdmissionComponent },
  { path: "payment", component: PaymentComponent },
  /* Common Pages */
  { path: "home", component: FormslistComponent },
  { path: "viewer", component: FormviewerComponent },
  { path: "profile", component: ProfileComponent },
  { path: "404", component: NotfoundComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  /* JWT and Angular Route Guard Implementation pending */
}
