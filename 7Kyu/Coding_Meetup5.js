// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages(7kyu)
/* Input 
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
]; */
/* Output 
{ C: 2, JavaScript: 1, Ruby: 1 }
*/

function countLanguages(list) {
    const languageList = Array.from(new Set(list.map(item => item.language)))
    let languageObj = languageList.reduce((obj,item) => {
      obj[item] = 0;
      return obj;
    }, {});
    list.forEach(item => {
      languageObj[item.language] += 1;
    })
    return languageObj
  }
  
  const list = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];
  
  console.log(countLanguages(list))