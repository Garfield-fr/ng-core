/*
 * RERO angular core
 * Copyright (C) 2024 RERO
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
import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  translate = inject(TranslateService);
  confirmationService = inject(ConfirmationService);
  messageService = inject(MessageService);

  confirm(event: Event): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      acceptLabel: this.translate.instant('Yes'),
      rejectLabel: this.translate.instant('No'),
      message: this.translate.instant('Are you sure that you want to proceed?'),
      header: this.translate.instant('Confirmation'),
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.messageService.add({
            severity: 'info',
            summary: this.translate.instant('Confirmed'),
            detail: this.translate.instant('You have accepted')
          });
      },
      reject: () => {
          this.messageService.add({
            severity: 'error',
            summary: this.translate.instant('Rejected'),
            detail: this.translate.instant('You have rejected'),
            life: 3000
          });
      }
    });
  }
}