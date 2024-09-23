const separateFullName = (fullname) => {
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

const toTitleCase = (text) => {
  const lowerCaseText = text.toLowerCase();
  const texts = lowerCaseText.split(' ');
  const utexts = texts.map((value) => {
    const firstChar = value.charAt(0);
    const restValue = value.substring(1);
    return `${firstChar.toUpperCase()}${restValue}`
  });

  return utexts.join(' ');
}

const formatDateObjToLocal = (
  dateObj,
  locale = 'vi-VN',
) => {

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(dateObj);
};


const isLeapYear = (year) => {
  if (year % 100 == 0 && year % 400 == 0) return true;
  else if (year % 100 != 0 && year % 4 == 0) return true;
  else return false;
}

const checkAndConvertDate = (textDate) => {
    let isD = "true";
    let nDate = "";

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

  
module.exports = {
  separateFullName,
  toTitleCase,
  checkAndConvertDate,
  formatDateObjToLocal
}