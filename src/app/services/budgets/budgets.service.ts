import { Injectable } from '@angular/core';
import { Budget } from '../../types/budget';
import { BehaviorSubject, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetsService {
  private budgets: BehaviorSubject<Budget[]> = new BehaviorSubject<Budget[]>([
    {
      category: 'Entertainment',
      spent: 15,
      max: 50,
      theme: { name: 'Green', class: 'bg-g', color: '#277C78' },
    },
    {
      category: 'Bills',
      spent: 150,
      max: 750,
      theme: { name: 'Cyan', class: 'bg-cyan', color: '#82C9D7' },
    },
    {
      category: 'Dining Out',
      spent: 133.75,
      max: 75,
      theme: { name: 'Yellow', class: 'bg-yellow', color: '#F2CDAC' },
    },
    {
      category: 'Personal Care',
      spent: 40,
      max: 100,
      theme: { name: 'Navy', class: 'bg-navy', color: '#626070' },
    },
  ]);

  budgets$: Observable<Budget[]> = this.budgets.asObservable();

  constructor() {}

  addBudget(newBudget: Budget) {
    let tempBudget = this.budgets.getValue();
    tempBudget.push(newBudget);
    this.budgets.next(tempBudget);
    console.log('New Budget list: ', this.budgets.getValue());
  }

  removeBudget(index: number) {
    let tempBudget = this.budgets.getValue();
    tempBudget = tempBudget.filter((value, i) => i !== index);
    this.budgets.next(tempBudget);
  }

  getBudget(index: number) {
    return this.budgets.getValue()[index];
  }

  getThemes() {
    return this.budgets$.pipe(
      map((budgets) => budgets.map((budget) => budget.theme))
    );
  }

  updateBudget(updates: Partial<Budget>, index: number) {
    const budgets = this.budgets.getValue();
    const budget = { ...budgets[index], ...updates };
    budgets[index] = budget;
    this.budgets.next(budgets);
  }
}
