import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/marketplace/pages/list-product/list-product.component';
import { CartComponent } from './components/marketplace/pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { FormRegistrationComponent } from './pages/form-registration/form-registration.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { MenuRegistrationComponent } from './pages/menu-registration/menu-registration.component';
import { FormPasswordComponent } from './pages/form-password/form-password.component';
import { FormPhoneConfirmComponent } from './pages/form-phone-confirm/form-phone-confirm.component';
import { FormSelfieComponent } from './pages/form-selfie/form-selfie.component';
import { FormDocumentComponent } from './pages/form-document/form-document.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { SelectEntityComponent } from './pages/select-entity/select-entity.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { DetailProductComponent } from './components/marketplace/pages/detail-product/detail-product.component';
import { VoucherComponent } from './pages/voucher/voucher.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { TermsAcceptComponent } from './pages/terms-accept/terms-accept.component';
import { IndexComponent } from './pages/index/index.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { TycBanksComponent } from './pages/tyc-banks/tyc-banks.component';
import { PaymentSummaryComponent } from './pages/payment-summary/payment-summary.component';
import { OtpBanksComponent } from './pages/otp-banks/otp-banks.component';
import { CreditVerifyComponent } from './pages/credit-verify/credit-verify.component';
import { CreditApprovedComponent } from './pages/credit-approved/credit-approved.component';
import { CreditPreapprovedComponent } from './pages/credit-preapproved/credit-preapproved.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CreditRejectComponent } from './pages/credit-reject/credit-reject.component';
import { CreditConditionsComponent } from './pages/credit-conditions/credit-conditions.component';
import { SelectAccountDisburseComponent } from './pages/select-account-disburse/select-account-disburse.component';
import { SelectCreditComponent } from './pages/select-credit/select-credit.component';
import { CreditSimulationComponent } from './pages/credit-simulation/credit-simulation.component';
import { CreditRequestComponent } from './pages/credit-request/credit-request.component';
import { CreditDisburseComponent } from './pages/credit-disburse/credit-disburse.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'credit/approved', component: CreditApprovedComponent },
  { path: 'credit/conditions', component: CreditConditionsComponent },
  { path: 'credit/disburse', component: CreditDisburseComponent },
  { path: 'credit/preapproved', component: CreditPreapprovedComponent },
  { path: 'credit/reject', component: CreditRejectComponent},
  { path: 'credit/request', component: CreditRequestComponent },
  { path: 'credit/select-account-disburse', component: SelectAccountDisburseComponent },
  { path: 'credit/select', component: SelectCreditComponent },
  { path: 'credit/simulation', component: CreditSimulationComponent },
  { path: 'credit/verify', component: CreditVerifyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ecommerce', component: ListProductComponent },
  { path: 'ecommerce/cart', component: CartComponent },
  { path: 'ecommerce/products/:id', component: DetailProductComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component:MenuComponent},
  { path: 'otp/banks', component: OtpBanksComponent },
  { path: 'products', component: MyProductsComponent },
  { path: 'products/add/data-product', component: AddProductComponent },
  { path: 'products/add/select-entity', component: SelectEntityComponent },
  { path: 'products/transactions', component: TransactionComponent },
  { path: 'register', component: MenuRegistrationComponent },
  { path: 'register/info', component: FormRegistrationComponent },
  { path: 'register/document', component: FormDocumentComponent },
  { path: 'register/phone-confirm', component: FormPhoneConfirmComponent },
  { path: 'register/selfie', component: FormSelfieComponent },
  { path: 'register/wallet', component: FormPasswordComponent },
  { path: 'summary', component: PaymentSummaryComponent },
  { path: 'transaction/voucher', component: VoucherComponent },
  { path: 'tyc', component: TermsConditionsComponent },
  { path: 'tyc/accept', component: TermsAcceptComponent },
  { path: 'tyc/banks', component: TycBanksComponent },
  { path: 'wallet', component: WalletComponent },
  { path: '**', redirectTo: 'ecommerce' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
