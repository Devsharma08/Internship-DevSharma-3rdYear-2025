import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown
  {
    const [multiplier, offset] = args;
    if(args.length == 1){
      return value*multiplier;
    }
    if(args.length > 1){
      return value*multiplier+offset;
    }
    return value;
  }
}
