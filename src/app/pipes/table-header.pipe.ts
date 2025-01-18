import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableHeader',
  standalone: true
})
export class TableHeaderPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) {
      return value;
    }

    // Convert to Pascal Case
    const pascalCase = value
      .split(/[\s_]+/) // Split by spaces or underscores
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    // Insert spaces before uppercase letters
    return pascalCase.replace(/([A-Z])/g, ' $1').trim();
  }

}
