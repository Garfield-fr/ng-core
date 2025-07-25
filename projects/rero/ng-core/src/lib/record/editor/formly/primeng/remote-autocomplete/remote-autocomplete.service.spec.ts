/*
 * RERO angular core
 * Copyright (C) 2025 RERO
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

import { ISuggestionItem } from "./remote-autocomplete.interface";
import { RemoteAutocompleteService } from "./remote-autocomplete.service";

describe('RemoteAutocompleteService', () => {
  let service: RemoteAutocompleteService;

  beforeEach(() => {
    service = new RemoteAutocompleteService();
  });

  it('should return the suggestions', () => {
    service.getSuggestions('foo', {}, '1').subscribe((suggestions: ISuggestionItem[]) => {
      expect(suggestions).toEqual([{ label: 'test'}]);
    });
  });

  it('should return the html value', () => {
    service.getValueAsHTML({}, { label: 'test'}).subscribe((html: string) => {
      expect(html).toEqual('test');
    });
  });
});
