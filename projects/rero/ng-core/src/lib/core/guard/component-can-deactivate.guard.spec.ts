// SPDX-FileCopyrightText: Fondation RERO+
// SPDX-License-Identifier: AGPL-3.0-or-later
import { TestBed } from '@angular/core/testing';

import { provideTranslateService } from '@ngx-translate/core';
import { DialogService } from '@openng/optimus-ui/dynamicdialog';
import { AbstractCanDeactivateComponent } from '../component/abstract-can-deactivate/abstract-can-deactivate.component';
import { ComponentCanDeactivateGuard } from './component-can-deactivate.guard';
import { DialogComponent } from '../component/dialog/dialog.component';

export class MockComponent extends AbstractCanDeactivateComponent {
  canDeactivate = true;
}

describe('ComponentCanDeactivateGuard', () => {
  let guard: ComponentCanDeactivateGuard;
  let component: MockComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockComponent,
        ComponentCanDeactivateGuard,
        DialogService,
        DialogComponent,
        provideTranslateService(),
      ],
    });
    guard = TestBed.inject(ComponentCanDeactivateGuard);
    component = TestBed.inject(MockComponent);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return a boolean if confirmation is not required.', () => {
    expect(guard.canDeactivate(component)).toBe(true);
  });
});
