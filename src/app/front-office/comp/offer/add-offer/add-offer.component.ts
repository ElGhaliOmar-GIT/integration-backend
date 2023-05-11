import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/front-office/services/offer.service';
import { BusinessType } from 'src/app/front-office/models/offer';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offerForm!: FormGroup;
  submitted = false;
  businessTypeOptions = Object.values(BusinessType);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private offerService: OfferService
  ) { }

  ngOnInit(): void {
    this.offerForm = this.formBuilder.group({
      namePer: [''],
      shopName: [''],
      businessType: ['', Validators.required],
      businessPhoneNumber: [''],
      businessEmail: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.offerForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.offerService.createOffer(this.offerForm.value).subscribe(() => {
      this.router.navigate(['/offer-list']);
    });
  }

  onCancel() {
    this.router.navigate(['/offer-list']);
  }

}
