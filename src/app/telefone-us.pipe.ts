import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneUS'
})
export class TelefoneUSPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
