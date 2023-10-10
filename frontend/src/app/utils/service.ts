export const isAmericanExpress = (pan: string): boolean => {
    return pan.startsWith('34') || pan.startsWith('37');
}

export const isCreditCardExpired = (givenDate: string): boolean => {
    if(!givenDate) return true;

    const [givenMonth, givenYear] = givenDate.split('/').map(Number);
  
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentYear = currentDate.getFullYear() % 100;
  
    return !(givenYear > currentYear || (givenYear === currentYear && givenMonth >= currentMonth));
  };
  
  