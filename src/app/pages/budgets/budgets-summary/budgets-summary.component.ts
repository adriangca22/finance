import { Component, inject } from '@angular/core';
import { BudgetsPieComponent } from '../../overview/budgets-overview/budgets-pie/budgets-pie.component';
import { SummaryItemComponent } from './summary-item/summary-item.component';
import { BudgetsService } from '../../../services/budgets/budgets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budgets-summary',
  standalone: true,
  imports: [BudgetsPieComponent, SummaryItemComponent, CommonModule],
  templateUrl: './budgets-summary.component.html',
  styleUrl: './budgets-summary.component.css',
})
export class BudgetsSummaryComponent {
  budgetService = inject(BudgetsService);
}
