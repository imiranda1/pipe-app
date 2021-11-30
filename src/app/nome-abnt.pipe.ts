import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeABNT'
})
export class NomeABNTPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {

    let arrayNome = value.split(" ");
    let nome: string;
    let sobrenomeAbreviado: string = "";

    if(arrayNome.length <= 1){
      return "Invalid";

    }

    arrayNome.map((sobrenome, index)=> {
      if(index != 0 && index != (arrayNome.length -1)){
        sobrenomeAbreviado = sobrenomeAbreviado + sobrenome.charAt(0)+ ". ";
      }
    })
    return arrayNome[arrayNome.length -1].toUpperCase()+ ", " + arrayNome[0]+ " " + sobrenomeAbreviado;

  }



}
