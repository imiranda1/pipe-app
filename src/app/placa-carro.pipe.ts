import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placaCarro'
})
export class PlacaCarroPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {

    let valid : boolean = false;

    let regex = '[A-z]{3}[0-9]{4}';

    if (value.match(regex) && value.length==7) {
      value = value.slice(0,3)+"-"+value.slice(3,7)
      valid = true;
    }

  return valid == true ? value.toUpperCase() : "Invalid";
  }

}
