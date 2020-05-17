import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordcount'
})
export class WordcountPipe implements PipeTransform {

  transform(value: string, ...args: string[]) {
    if (args.length == 0)
      return value.trim().split(/\s+/).length;

    // if (args.length == 1) {
    //   let count: Number;
    //   let splitResult = value.trim().split(/\s+/);
    //   for (const iterator of splitResult) {
    //     if (iterator == args[0]) {
    //       console.log(iterator);
    //       count++;
    //     }
    //   }
    //   return count;
    // }
    return args.length
  }


}
