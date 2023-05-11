import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/front-office/models/offer';
import { OfferService } from 'src/app/front-office/services/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  offers: Offer[] = [];

  constructor(private offerService: OfferService, private router : Router) { }

  ngOnInit(): void {
    this.getOffers();

  }

  getOffers() {
    this.offerService.getAllOffers().subscribe(
      (response: Offer[]) => {
        this.offers = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteOffer(idOffer: number): void {
    if (confirm("Are you sure you want to delete this offer?")) {
      this.offerService.deleteOffer(idOffer).subscribe(() => {
        this.offers = this.offers.filter(offer => offer.idOffer !== idOffer);
      });
    }}
}
