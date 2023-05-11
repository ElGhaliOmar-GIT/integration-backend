import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  private baseUrl = 'http://localhost:9000/bns/claim';

  constructor(private http: HttpClient) { }

  getAllClaims(): Observable<Claim[]> {
    return this.http.get<Claim[]>(`${this.baseUrl}/retrieve-all-claims`);
  }

  createClaim(claim: Claim): Observable<Claim> {
    return this.http.post<Claim>(this.baseUrl + "/addclaim", claim);
  }

  deleteClaim(idClaim: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/remove-claim/${idClaim}`, { responseType: 'text' });
  }
}
