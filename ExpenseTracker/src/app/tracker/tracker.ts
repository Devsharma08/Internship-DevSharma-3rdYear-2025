import { CommonModule } from '@angular/common';
import { Component,ChangeDetectorRef, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracker',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './tracker.html',
  styleUrl: './tracker.css'
})
export class Tracker {

  cdRef = inject(ChangeDetectorRef);
  positiveExpense: any[] = [];
  negativeExpense: any[] = [];
  percentage: any = 0;


  totalPostiveAmount:number = 0
  totalNegativeAmount:number = 0

  onHover:number = -1
  onHoverDelete:number = -1

  expenseForm = new FormGroup({
    sign: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)])
  });

  ngOnInit() {
    this.setPositiveExpense();
    this.setNegativeExpense();
    this.percentageValue();
  }


  setPositiveExpense() {
    const positiveItem = localStorage.getItem('positive');
    this.positiveExpense = positiveItem ? JSON.parse(positiveItem) : [];
    this.totalPositiveExpense()
  }

  setNegativeExpense() {
    const negativeItem = localStorage.getItem('negative');
    this.negativeExpense = negativeItem ? JSON.parse(negativeItem) : [];
    this.totalNegativeExpense()
  }

  handleFormSubmit() {
    if (this.expenseForm.valid) {
      this.handleExpenseGroup(this.expenseForm.value);
      this.expenseForm.reset();
    }
  }

  handleExpenseGroup(formValues: any) {
    if (formValues.sign === '+') {
      this.positiveExpense.push(formValues);
      localStorage.setItem('positive', JSON.stringify(this.positiveExpense));
      this.setPositiveExpense()
  
    } else {
      this.negativeExpense.push(formValues);
      localStorage.setItem('negative', JSON.stringify(this.negativeExpense));
      this.setNegativeExpense()
    }
  }

  totalPositiveExpense() {
  this.totalPostiveAmount = 0;
  this.positiveExpense.forEach(item => {
    this.totalPostiveAmount += Number(item.amount);
  });
}

totalNegativeExpense() {
  this.totalNegativeAmount = 0;
  this.negativeExpense.forEach(item => {
    this.totalNegativeAmount += Number(item.amount);
  });
}

percentageValue() {
  if (this.totalNegativeAmount === 0) {
    this.percentage = 0;
  } else {
    this.percentage = ((this.totalNegativeAmount/this.totalPostiveAmount) * 100).toFixed(2);
  }
}


handleDelete(e:number){
  let positiveExpense = JSON.parse(localStorage.getItem('positive') || "[]")
  positiveExpense.splice(e,1);
   localStorage.setItem('positive', JSON.stringify(positiveExpense));
  this.setPositiveExpense();
  this.percentageValue()
  this.cdRef.detectChanges()
}
handleDeleteNegative(e:number){
  let negativeExpense = JSON.parse(localStorage.getItem('negative') || "[]")
  negativeExpense.splice(e,1);
   localStorage.setItem('negative', JSON.stringify(negativeExpense));
  this.setNegativeExpense();
  this.percentageValue()
  this.cdRef.detectChanges()
}

}
