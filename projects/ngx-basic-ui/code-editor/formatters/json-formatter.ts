import { Injectable } from '@angular/core';
import stringify from 'json-stable-stringify';
import JSON5 from 'json5';

@Injectable({ providedIn: 'root' })
export class JsonFormatter {
  format(data: string): string {
    let object: any;
    try {
      object = JSON5.parse(data);
    } catch {
      return data;
    }
    return (
      stringify(object, {
        space: '  ',
        collapseEmpty: true,
      }) ?? ''
    );
  }
}
