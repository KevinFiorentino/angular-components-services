import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {

    const divisa = args[0];

    if (divisa == 'USD')
      return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(value);
    else
      return new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS' }).format(value);

  }

}
