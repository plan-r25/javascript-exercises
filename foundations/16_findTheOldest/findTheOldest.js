const findTheOldest = function(array) {
  return array.reduce((oldest, curr) => {
    const currentYear = new Date().getFullYear();

    const getAge = (p) => (p.yearOfDeath ?? currentYear) - p.yearOfBirth;

    const oldestAge = getAge(oldest);
    const currentAge = getAge(curr);

    return currentAge > oldestAge ? curr : oldest;
  });
};

/*  const currentYear = new Date().getFullYear();
  const peopleAge = array.map((person) => {
    const death = person.yearOfDeath || currentYear;
    return {
      ...person,
      age: death - person.yearOfBirth
    }
  })
  return peopleAge.reduce((oldest, curr) => {
    return curr.age > oldest.age ? curr : oldest;
  })
}; */

// Do not edit below this line
module.exports = findTheOldest;
