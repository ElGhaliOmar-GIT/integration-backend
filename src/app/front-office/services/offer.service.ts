import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private baseUrl = 'http://localhost:9000/bns/offer';

  constructor(private http: HttpClient) { }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/retrieve-all-offers`);
  }

  createOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(`${this.baseUrl}/add-offer`, offer);
  }

  deleteOffer(idOffer: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/remove-offer/${idOffer}`, { responseType: 'text' });
  }
}
