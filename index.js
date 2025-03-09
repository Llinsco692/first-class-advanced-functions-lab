// 1. createFareMultiplier function
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // 2. returnFirstTwoDrivers function
  const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // 3. returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // 4. fareDoubler: Doubles the fare by using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // 5. fareTripler: Triples the fare by using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // 6. selectDifferentDrivers: Returns first or last two drivers based on the passed function
  function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
  }
  
  // 7. selectingDrivers: Array that holds both functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Example usage:
  
  // Drivers array
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  
  // 1. Test fareDoubler
  console.log(fareDoubler(10));  // => 20
  
  // 2. Test fareTripler
  console.log(fareTripler(10));  // => 30
  
  // 3. Test selectDifferentDrivers with returnFirstTwoDrivers and returnLastTwoDrivers
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));  // => ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));   // => ['Amari', 'Mo']
  
  // 4. Test selectingDrivers array
  console.log(selectingDrivers[0](drivers));  // => ['Antonia', 'Nuru'] (using returnFirstTwoDrivers)
  console.log(selectingDrivers[1](drivers));  // => ['Amari', 'Mo'] (using returnLastTwoDrivers)
  