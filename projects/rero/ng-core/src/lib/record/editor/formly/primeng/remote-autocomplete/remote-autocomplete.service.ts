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
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IQueryOptions, IRemoteAutocomplete, ISuggestionItem } from "./remote-autocomplete.interface";

// Override this service in your application to implement your logic

@Injectable({
  providedIn: 'root'
})
export class RemoteAutocompleteService implements IRemoteAutocomplete {

  private data: ISuggestionItem[] = [
    { label: 'House', value: 'house' , description: 'House description' },
    { label: 'Mystery', value: 'mystery' },
  ];

  public getSuggestions(query: string, queryOptions: IQueryOptions, currentPid: string): Observable<ISuggestionItem[]> {
    if (!query) {
      return of([]);
    }

    if (query.startsWith('*')) {
      return of(this.processName(queryOptions.filter));
    }

    return of(this.processName(queryOptions.filter).filter((element: ISuggestionItem) => element.label.toLowerCase().includes(query)));
  }

  getValueAsHTML(queryOptions: IQueryOptions, value: string): Observable<string> {
    return of(value);
  }

  private processName(filter?: string): ISuggestionItem[] {
    if (filter) {
      return structuredClone(this.data).map((element: ISuggestionItem) => {
        element.label = `${filter} - ${element.label}`;

        return element;
      });
    } else {
      return this.data;
    }
  }
}