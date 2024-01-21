export const convertToPersianNumbers = (inputString: string) => {
  const latinNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  for (let i = 0; i < 10; i++) {
    const regex = new RegExp(latinNumbers[i], "g");
    inputString = inputString.replace(regex, persianNumbers[i]);
  }

  return inputString;
}
