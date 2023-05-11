import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './front-office/navbar/navbar.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { HomeComponent } from './front-office/comp/home/home.component';
import { ProductComponent } from './front-office/comp/product/product.component';
import { ProductDetailComponent } from './front-office/comp/product-detail/product-detail.component';
import { ShopComponent } from './front-office/comp/shop/shop.component';
import { ShopDetailComponent } from './front-office/comp/shop-detail/shop-detail.component';
import { CartComponent } from './front-office/comp/cart/cart.component';
import { CheckoutComponent } from './front-office/comp/checkout/checkout.component';
import { AccountComponent } from './front-office/comp/account/account.component';
import { RegisterComponent } from './front-office/comp/register/register.component';
import { LoginComponent } from './front-office/comp/login/login.component';
import { ContactComponent } from './front-office/comp/contact/contact.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IndexComponent } from './front-office/comp/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarBackComponent } from './back-office/navbar-back/navbar-back.component';
import { FooterBackComponent } from './back-office/footer-back/footer-back.component';
import { SidebarBackComponent } from './back-office/sidebar-back/sidebar-back.component';
import { DashboardComponent } from "./back-office/comp/dashboard/dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './front-office/comp/forum/forum.component';
import { BlogComponent } from './front-office/comp/blog/blog.component';
import { CategoryComponent } from './front-office/comp/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatgptComponent } from './front-office/comp/chatgpt/chatgpt.component';
import { MapComponent } from './front-office/comp/map/map.component';
import { PopUpComponent } from './front-office/comp/pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChatComponent } from './front-office/comp/chat/chat.component';
import { RequestComponent } from './front-office/comp/request/request.component';
import { RequestListComponent } from './front-office/comp/request-list/request-list.component';
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import { AddClaimComponent } from './front-office/comp/claim/add-claim/add-claim.component';
import { ClaimListComponent } from './front-office/comp/claim/claim-list/claim-list.component';
import { AddOfferComponent } from './front-office/comp/offer/add-offer/add-offer.component';
import { OfferListComponent } from './front-office/comp/offer/offer-list/offer-list.component'


const appRoute: Routes = [
  {path:'shop' , component : ShopComponent},
  {path:'requestList' , component : RequestListComponent},
  {path:'request' , component : RequestComponent},
  {path:'register' , component : RegisterComponent},
  {path:'account' , component : AccountComponent},
  {path:'cart' , component : CartComponent},
  {path:'checkouts/:price' , component : CheckoutComponent},
  {path:'checkout' , component : CheckoutComponent},
  {path:'login' , component : LoginComponent},
  {path:'ShopDetail' , component : ShopDetailComponent},
  {path:'Product' , component : ProductComponent},
  {path:'productDetails' , component : ProductDetailComponent},
  {path:'forum' , component : ForumComponent},
  {path:'blog' , component : BlogComponent},
  {path:'category' , component : CategoryComponent},
  {path:'chat' , component : ChatgptComponent},
  {path:'liveChat' , component : ChatComponent},
  {path:'offer-list' , component : OfferListComponent},
  {path:'add-claim' , component : AddClaimComponent},
  {path:'add-offer' , component : AddOfferComponent},
  {path:'claim-list' , component : ClaimListComponent},





  ]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ShopComponent,
    ShopDetailComponent,
    CartComponent,
    CheckoutComponent,
    AccountComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    IndexComponent,
    NavbarBackComponent,
    FooterBackComponent,
    SidebarBackComponent,
    DashboardComponent,
    ForumComponent,
    BlogComponent,
    ChatgptComponent,
    MapComponent,
    PopUpComponent,
    ChatComponent,
    RequestComponent,
    RequestListComponent,
    AddClaimComponent,
    ClaimListComponent,
    AddOfferComponent,
    OfferListComponent
  ],
  imports: [
    PdfViewerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
