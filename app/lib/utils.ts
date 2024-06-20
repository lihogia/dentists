
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