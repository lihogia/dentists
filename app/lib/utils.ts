
export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'en-US',
  ) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  };
  
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