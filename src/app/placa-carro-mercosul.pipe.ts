import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placaCarroMercosul'
})
export class PlacaCarroMercosulPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {

    let valid : boolean = false;

    let regex = '[A-z]{3}[0-9][A-z][0-9]{2}';

    if (value.match(regex)&& value.length==7) {
      value = value.slice(0,3)+" - "+value.slice(3,4)+" - "+
      value.slice(4,5)+" - "+value.slice(5,7);
      valid = true;
    }

  return valid == true ? value.toUpperCase() : "Invalid";
  }

}
