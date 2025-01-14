import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { BudgetsCardItemComponent } from './budgets-card-item/budgets-card-item.component';
import { CommonModule } from '@angular/common';
import { Budget } from '../../../types/budget';
import { EllipsesComponent } from '../../../components/shared/ellipses/ellipses.component';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import { filter, map, Observable, Subscription } from 'rxjs';
import { Transactions } from '../../../types/transactions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budgets-card',
  standalone: true,
  imports: [BudgetsCardItemComponent, CommonModule, EllipsesComponent],
  templateUrl: './budgets-card.component.html',
  styleUrl: './budgets-card.component.css',
})
export class BudgetsCardComponent implements OnInit, OnDestroy {
  @Input() budget!: Budget;
  @Input() index!: number;
  cardTransactions: Transactions[] = [];
  transactionService = inject(TransactionsService);
  router = inject(Router);
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.transactionService
      .getRawTransactions()
      .pipe(
        map((trans) =>
          trans.filter((trans) => trans.category == this.budget.category)
        ),
        map((trans) =>
          trans.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
        )
      )
      .subscribe((value) => (this.cardTransactions = value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToTransactions() {
    this.router.navigateByUrl('/transactions');
  }
}
