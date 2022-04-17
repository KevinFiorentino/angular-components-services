import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testName'
})
export class TestNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
