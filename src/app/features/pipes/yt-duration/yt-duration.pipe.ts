import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ytDuration'
})
export class YtDurationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
