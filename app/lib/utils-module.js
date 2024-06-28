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
  
module.exports = {
  separateFullName,
  toTitleCase
}