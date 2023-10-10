exports.cardHasValidFormat = (date) => {
    const dateFormat = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
  
    if (dateFormat.test(date)) {
      return true;  
    } 

    return false;
};

exports.cardDateHasExpired = (date) => {
    const currentDate = new Date();
    const [givenMonth, givenYear] = date.split('/');

    const parsedDate = new Date(`20${givenYear}`, givenMonth - 1, new Date(20 + givenYear, givenMonth, 0).getDate());

    return !(parsedDate >= currentDate);
};

exports.cardHasValidAmericanExpressPan = (pan) => {
  const panPrefix = pan.slice(0, 2);
  const panLength = pan.length;

  return (panPrefix === '34' || panPrefix === '37') && (panLength >= 16 && panLength <= 19);
};