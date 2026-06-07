import { Injectable } from '@angular/core';
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
    return JSON5.stringify(object);
  }
}
