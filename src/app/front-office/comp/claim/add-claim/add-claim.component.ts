import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaimService } from 'src/app/front-office/services/claim.service';
import { Claim, ClaimSubject } from 'src/app/front-office/models/claim'; // Replace with actual path to ClaimSubject enum

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {
  claimForm!: FormGroup;
  submitted = false;
  subjectOptions: string[] = Object.values(ClaimSubject); // Get list of subject options from enum
  claim : Claim = new Claim();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private claimService: ClaimService
  ) { }

  ngOnInit(): void {
    this.claimForm = this.formBuilder.group({
      fullName: [''],
      orderNumber: [''],
      productRef: [''],
      subject: [''],
      subtheme: [''],
      description: [''],
      cfile: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.claimForm.controls; }

  onSubmit() {
    this.submitted = true;
    //this.claim.fullName = this.claimForm.get('fullName');
    //console.log(this.claimForm.value)
    this.claimService.createClaim(this.claim).subscribe((response) => {
      this.router.navigate(['/claim-list']);
    }, (error) => {
      console.log(error);
    });
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.claim.cfile = file.name;
  }

  onCancel() {
    this.router.navigate(['/claim-list']);
  }

}
