import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noRepeate'
})
export class NoRepeatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
