import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'escapeHTML'})
export class EscapeHTML implements PipeTransform {
  constructor(){}

    transform(value: string) {

        const chars = {'<':'&lt;','>':'&gt;'};
        const s = value;

        return s.replace(/[<>]/g, m => chars[m]);
    }
}