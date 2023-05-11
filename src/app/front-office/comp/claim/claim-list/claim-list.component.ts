import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/front-office/models/claim';
import { ClaimService } from 'src/app/front-office/services/claim.service';

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {

  claims: Claim[] = [];

  constructor(private claimService: ClaimService, private router : Router) { }

  ngOnInit(): void {
    this.getClaims();

  }

  getClaims() {
    this.claimService.getAllClaims().subscribe(
      (response: Claim[]) => {
        this.claims = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteClaim(idClaim: number): void {
    if (confirm("Are you sure you want to delete this claim?")) {
      this.claimService.deleteClaim(idClaim).subscribe(() => {
        this.claims = this.claims.filter(claim => claim.idClaim !== idClaim);
      });
    }}

}
