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
import { Component, inject, Input, OnInit } from '@angular/core';
import { ResultItem, TitleMetaService } from '@rero/ng-core';

/**
 * Component for displaying a document brief view.
 */
@Component({
    templateUrl: './document.component.html',
    standalone: false
})
export class DocumentComponent implements OnInit, ResultItem {
  // Inject
  private titleMetaService = inject(TitleMetaService);

  // Record data.
  @Input() record: any;

  // Type of resource.
  @Input() type: string;

  // Object containing link to detail.
  @Input() detailUrl: { link: string, external: boolean };

  ngOnInit() {
    this.titleMetaService.setTitle(this.type);
  }
}
