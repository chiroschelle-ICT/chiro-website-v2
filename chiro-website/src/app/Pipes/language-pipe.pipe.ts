import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'languagePipe',
  standalone: true
})
export class LanguagePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    const datePipe = new DatePipe('en-US');
    let formattedDate = datePipe.transform(value as Date, 'fullDate');

    const dayNames = [
      'Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'
    ];
    const englishDayNames = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    englishDayNames.forEach((englishDay, index) => {
      formattedDate = formattedDate?.replace(englishDay, dayNames[index]) ?? formattedDate;
    });

    const monthNames = [
      'januari', 'februari', 'maart', 'april', 'mei', 'juni',
      'juli', 'augustus', 'september', 'oktober', 'november', 'december'
    ];
    const englishMonthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    englishMonthNames.forEach((englishMonthNames, index) => {
      formattedDate = formattedDate?.replace(englishMonthNames, monthNames[index]) ?? formattedDate;
    });

  

    return formattedDate;
  }

}
