const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  // Your code in here ...
  let qualifiedStations = [ ]
  for ( let each of stations) {
    if (each[1] >= 20 && (each[2] === 'school' || each[2] === "community centre")) {
      qualifiedStations.push(each[0]);
    }
  }
  return qualifiedStations;
}

console.log(chooseStations(stations));