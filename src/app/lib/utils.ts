import { MedicalRecordsForm, Revenue } from '@/src/app/lib/data/definition';

export const MAX_ITEMS_PER_PAGE = 10;

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

export const formatDateObjToLocal = (
  dateObj: Date,
  locale: string = 'vi-VN',
) => {

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(dateObj);
};

export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'vi-VN',
  ) => {

    const date = new Date(dateStr);
    return formatDateObjToLocal(date, locale);
  };

const isLeapYear = (year: number) => {
  if (year % 100 == 0 && year % 400 == 0) return true;
  else if (year % 100 != 0 && year % 4 == 0) return true;
  else return false;
}

export const getNextDate = (startDate: string) => { // format: YYYY-MM-DD
  const dateObj = new Date(startDate);
  const nextDate = new Date();
  const ADayInMillis = 24 * 60 * 60 * 1000;
  nextDate.setTime(dateObj.getTime() + ADayInMillis);

  const dateString = formatDateObjToLocal(nextDate);
  const [iD, convertedDateStr] = checkAndConvertDate(dateString);
  return convertedDateStr;
}

export const checkAndConvertDate = (textDate: string, requiredZero: boolean = true) => { // dd/mm/yyyy
    let isD: string = "true";
    let nDate: string = "";

    if (requiredZero && textDate.length != 10) {
      isD = "false";
    }else {
      const [dd, mm, yyyy] = textDate.split('/');

      if (dd.trim() == "" || mm.trim() == "" || yyyy == "") {
        isD = "false";
      }else {
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
      }  
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

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 500000) * 500000;

  for (let i = topLabel; i >= 0; i -= 500000) {
    if (i == 0) yAxisLabels.push(`0 đ`);
    else
      yAxisLabels.push(`${i / 500000}00K đ`);
  }

  return { yAxisLabels, topLabel };
};

type MonthAndLocale = {
  locale: string;
  months: string[];
};

const MAP_OF_MONTHS: MonthAndLocale[] = [
  {
    locale: 'en-US',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  {
    locale: 'vi',
    months: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']
  }
];

export const localeOfMonth = (month: number, plocale: string = 'en-US') => {
  const locale = plocale.includes('en') ? 'en-US' : plocale;

  const theMap = MAP_OF_MONTHS.find((value) => value.locale == locale);
  
  let retValue = '';

  if (theMap != null ) {
    retValue = theMap.months[month - 1];
  }

  return retValue;
}
