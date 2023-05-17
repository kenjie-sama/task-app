export class StringUtil {
  public static ToTitleCase(text: string, isDebug: boolean = true): string {
    let tempString: string[] = text.split(' ');
    if (isDebug) console.log(tempString);

    let allString = '';
    tempString.map((v) => {
      allString += v != '' ? v[0].toUpperCase() + v.substring(1) + ' ' : '';
    });

    if (isDebug) console.log(allString);

    return allString;
  }

  public static ToSentenceCase(text: string, isDebug: boolean = true): string {
    let allString = text[0]?.toUpperCase() + text.substring(1);

    if (isDebug) console.log(allString);

    return allString;
  }
}
