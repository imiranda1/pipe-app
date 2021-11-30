import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneBr'
})
export class TelefoneBrPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {

    let valid : boolean = false;


  if(value.length>=8 && value.length<=13){

      if (value.length==8) {
        value = value.slice(0,4)+"-"+value.slice(4,8)

        return value;
      }
      if (value.length==9) {
        value =  value.slice(0,1)+" " +value.slice(1,5)+"-"+value.slice(5,9)
        valid = true;
        return value;
      }
      if (value.length==10) {
        value =  "("+ value.slice(0,2) + ")"+" " +value.slice(2,6)+"-"+value.slice(6,10)
        valid = true;
        return value;
      }
      // (16) 9 1234-5678
      if (value.length==11) {
        value =  "("+ value.slice(0,2) + ")" + " " + value.slice(2,3) + " " + value.slice(3,7) + "-"+ value.slice(7,11);
        valid = true;
        return value;
      }

      //+01 (23) 4567-8901
      if (value.length == 12) {
        value = "+" + value.slice(0,2) + " " + "("+ value.slice(2,4) + ")" +" " + value.slice(4,8) + "-"+ value.slice(8,12);
        valid = true;
        return value;
      }
      if (value.length == 13) {
        value = "+" + value.slice(0,2) + " " + "("+ value.slice(2,4) + ")" +" " + value.slice(4,5) +" " + value.slice(5,9) + "-"+ value.slice(9,13);
        valid = true;
        return value;
      }
    }
    else{
      return "Invalid"
    }
  }


}
