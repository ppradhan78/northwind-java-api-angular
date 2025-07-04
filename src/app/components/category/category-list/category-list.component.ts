import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../../models/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true, // ✅ Very important for standalone
  imports: [CommonModule], // ✅ Required for *ngIf, *ngFor, etc.
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  errorMessage = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => (this.errorMessage = 'Failed to load categories'),
    });
  }
}
