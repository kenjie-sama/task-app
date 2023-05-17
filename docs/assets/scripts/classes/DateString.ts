export class DateString {
  public monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  public constructor(private d: Date) {}

  public GetMonth(): string {
    return this.monthNames[this.d.getMonth()];
  }

  public GetMMM(): string {
    const month: string = this.monthNames[this.d.getMonth()].substring(0, 3);
    return month.toLowerCase() === 'may' ? month + ' ' : month + '. ';
  }

  public GetMMMDDYYYY(): string {
    return this.GetMMM() + this.d.getDay() + ', ' + this.d.getFullYear();
  }
}
