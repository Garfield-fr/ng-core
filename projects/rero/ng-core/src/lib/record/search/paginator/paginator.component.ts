/*
 * RERO angular core
 * Copyright (C) 2020-2024 RERO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { Component, OnInit, Signal, computed, input, output } from '@angular/core';

// Documentation: https://primeng.org/paginator

export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

export interface PaginatorChangeEvent {
  page: number;
  rows: number;
}

@Component({
  selector: 'ng-core-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {

  /** Input */
  alwaysShow = input<boolean>(true);
  currentPage = input<number>(1);
  pageLinkSize = input<number>(5);
  rows = input<number>(10);
  rowsPerPageOptions = input<number[]>();
  showCurrentPageReport = input<boolean>(false);
  showFirstLastIcon = input<boolean>(false);
  totalRecords = input<number>(0);

  /** Output */
  rowPageChange = output<PaginatorChangeEvent>();

  /** Position for the current page */
  first: Signal<number> = computed(() => this.eventData.page * this.eventData.rows);

  /** Paginator Event */
  private eventData: PaginatorChangeEvent = {
    page: 0,
    rows: 10
  };

  /** OnInit hook */
  ngOnInit(): void {
    this.eventData.page = this.currentPage() - 1;
    this.eventData.rows = this.rows();
  }

  /**
   * Event on change page
   * @param event PageEvent
   */
  onPageChange(event: PageEvent): void {
    this.eventData.rows = event.rows;
    this.eventData.page = event.page;
    this.rowPageChange.emit(this.eventData);
  }
}