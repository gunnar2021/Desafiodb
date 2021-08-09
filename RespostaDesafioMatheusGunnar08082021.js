let olympicsMedalTable = [
  { id: 1, country: "BRASIL", gold: 7, silver: 6, bronze: 6, continent: "AMERICA DO SUL" },
  { id: 2, country: "USA", gold: 46, silver: 37, bronze: 17, continent: "AMERICA DO NORTE" },
  { id: 3, country: "CHINA", gold: 26, silver: 18, bronze: 26, continent: "ASIA" },
  { id: 4, country: "RUSSIA", gold: 19, silver: 18, bronze: 19, continent: "EUROPA" },
  { id: 5, country: "REINO UNIDO", gold: 27, silver: 23, bronze: 17, continent: "EUROPA" },
  { id: 6, country: "ALEMANHA", gold: 17, silver: 10, bronze: 15, continent: "EUROPA" },
  { id: 7, country: "JAPÃO", gold: 12, silver: 8, bronze: 21, continent: "ASIA" },
  { id: 8, country: "ARGENTINA", gold: 3, silver: 1, bronze: 0, continent: "AMERICA DO SUL" },
  { id: 9, country: "ITALIA", gold: 8, silver: 12, bronze: 8, continent: "EUROPA" },
  { id: 10, country: "QUÊNIA", gold: 6, silver: 6, bronze: 1, continent: "AFRICA" },
];

Array.prototype.customFind = function (predicate) {
for (const item of this) {
	if (predicate(item)) {
  return item;
 	}}
	return null;
	}

Array.prototype.customSoma = function (predicate) {
	for (const item of this) {
	if (predicate(item)) {
	return true;
	}}
	return false;
	}

Array.prototype.customFilter = function (predicate) {
  let array = [];
  	for (const item of this) {
  	if (predicate(item)) {
  	array.push(item);
  	}}
  	return array;
		}

Array.prototype.customMap = function (callback) {
    const array = [];
    for (const item of this) {
    array.push(callback(item))
    }
    return array;
		}

Array.prototype.customReduce = function (callback, initialValue) {

    let acc = initialValue || 0;
    for (const item of this) {
    acc = callback(acc, item)
    }
    return acc
		}

//DESAFIO 1
const paisAfricano = olympicsMedalTable.customFind(findPaisAfricano).country;
  
function findPaisAfricano(olympicsMedalTable){

   return olympicsMedalTable.continent ==='AFRICA'; 

  } 
  console.log (paisAfricano);
  
//DESAFIO 2
const somaMedalhas = olympicsMedalTable.customMap (function(medalha, gold, silver, bronze){

return  medalha.gold+medalha.silver+medalha.bronze;
})

console.log (somaMedalhas);

//Desafio 3

const paisMaisDezMedalhas = olympicsMedalTable.customFilter(item=>item.gold>10);
  
console.log (paisMaisDezMedalhas);

//Desafio 4
const paisesCom30MedalhasNoMinimo = olympicsMedalTable.customMap(item=>item.gold+item.silver+item.bronze).filter(item => item >= 30);

console.log(paisesCom30MedalhasNoMinimo);

// Desafio 5

const paisesComPeloMenos20MedalhasDeOUro = olympicsMedalTable.customFilter(item => item.continent === "AMERICA DO SUL").customReduce((acc, value) => acc + value.gold);

console.log(paisesComPeloMenos20MedalhasDeOUro);



