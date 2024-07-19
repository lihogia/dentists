import { MedicalRecordsForm} from '@/app/lib/data/definition';

export const formatCurrency = (
    amount: number,
    locale: string = 'vi-VN',
    currency: string = 'VND'
  ) => {

  const formatAmount = amount;
  return (formatAmount).toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
};

export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'vi-VN',
  ) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  };

const isLeapYear = (year: number) => {
  if (year % 100 == 0 && year % 400 == 0) return true;
  else if (year % 100 != 0 && year % 4 == 0) return true;
  else return false;
}

export const checkAndConvertDate = (textDate: string) => {
    let isD: string = "true";
    let nDate: string = "";

    const [dd, mm, yyyy] = textDate.split('/');
    
    const nDD = Number.parseInt(dd);
    const nMM = Number.parseInt(mm);
    const nYYYY = Number.parseInt(yyyy);

    if ( nDD < 1 || nDD > 31 || nMM < 1 || nMM > 12 || 
      ((nMM == 2 || nMM == 4 || nMM == 6 || nMM == 9 || nMM == 11) && nDD == 31) ||
      (nMM == 2 && nDD == 30) || (!isLeapYear(nYYYY) && nMM == 2 && nDD == 29)
    ) {
      isD = "false";
    }else {
        nDate = `${yyyy}-${mm}-${dd}`;
    }
    return [isD, nDate];
}
  
export const formatPhoneNumber = (phone: string) => {
  const nums = [];
  for (let i = 0; i < phone.length; ) {
      if (i+3 < phone.length) {
          let subNums = phone.substring(i, i+3);
          if (i + 3 == phone.length - 1) {
              subNums =  phone.substring(i);
              i = i + 4;
          }
          nums.push(subNums);
      }else {
          nums.push(phone.substring(i));
          break;
      }
      i = i + 3;
  }
  return nums.join('-');
}

export const toTitleCase = (text: string) => {
  const lowerCaseText = text.toLowerCase();
  const texts = lowerCaseText.split(' ');
  const utexts = texts.map((value) => {
    const firstChar = value.charAt(0);
    const restValue = value.substring(1);
    return `${firstChar.toUpperCase()}${restValue}`
  });

  return utexts.join(' ');
}

export const separateFullName = (fullname: string) => {
  const names = fullname.trim().split(' ');
  if (names.length == 1) {
    return [names[0], '', ''];
  }

  const middles = names.filter((name, index) => {
    return (index != 0 && index != names.length - 1);
  })

  const [firstname, middlename, lastname] = [names[0], middles.join(' ') , names[names.length-1]];
  return [firstname, middlename, lastname];
}

export const mergeToFullName = (names: string[]) => { // array created by separateFullName (array of 3 string)
  const nNames = names.filter((name) => name != '');
  return nNames.join(' ');
}

