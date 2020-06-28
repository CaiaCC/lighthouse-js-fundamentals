const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

// const judgeVegetable = function (vegetables, metric) {
//   let currentMax = 0;
//   for (let i = 0; i < vegetables.length; i++) {
//     currentMax = Math.max(currentMax, vegetables[i][metric]);	
//   }
//   for (let i = 0; i < vegetables.length; i++) {
//     if (vegetables[i][metric] === currentMax) {
//       return vegetables[i].submitter;
//     }	
//   }
// }

const judgeVegetable = function (vegetables, metric) {
	let currentMax = 0;
	let currentMaxSubmitter = "";
	for (let i = 0; i < vegetables.length; i++) {
		const veggie = vegetables[i];
		if (currentMax < veggie[metric]) {
			currentMax = veggie[metric];
			currentMaxSubmitter = veggie.submitter;
		}
	}
	return currentMaxSubmitter;


console.log(judgeVegetable(vegetables, metric))

// function comparingValue(a, b){
// 	if(a > b){
// 		return a;
// 	}
// 	if (b > a) {
// 		return b;
// 	}
// }