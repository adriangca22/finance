import { Component, inject } from '@angular/core';
import { OverviewCardHeaderComponent } from '../../../components/overview/overview-card-header/overview-card-header.component';
import { BudgetsPieComponent } from './budgets-pie/budgets-pie.component';
import { PotsSavingsMicroComponent } from '../pots-overview/pots-savings-micro/pots-savings-micro.component';
import { BudgetsService } from '../../../services/budgets/budgets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budgets-overview',
  standalone: true,
  imports: [
    OverviewCardHeaderComponent,
    BudgetsPieComponent,
    PotsSavingsMicroComponent,
    CommonModule,
  ],
  templateUrl: './budgets-overview.component.html',
  styleUrl: './budgets-overview.component.css',
})
export class BudgetsOverviewComponent {
  budgetService = inject(BudgetsService);
}
