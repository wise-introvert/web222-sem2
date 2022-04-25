function checkPhones(numbersToTest, validatedNumbers) {
  let matches = 0;

  numbersToTest.forEach((number) => {
    if (/\d{3}\-\d{3}\-\d{4}/gi.test(number)) {
      validatedNumbers.push(number);
      matches += 1;
    }
  });

  return matches;
}

let emptyArray = []

console.log(
  checkPhones(
    ["111-111-1111", "2222222222", "333-333-3333", "4556", "999-999-9999"],
    emptyArray
  )
);

console.log(emptyArray)
