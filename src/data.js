// Trae Films
export const getFilm = (data) => {
  const dataGhibli = data.films.map((arr) => arr);
  return dataGhibli;
}
 //Searcher all films
 export const searchFilms = (data, condition, value) => {
   return data.filter(item => item[condition].toLowerCase().includes(value.toLowerCase()));
 }

//Por año
export const searchYears = (data, fecha) => {
  const result = data.filter(arr => arr.release_date == fecha);
  return result;
}
// Por productor
export const allProducers = (data, cineasta) => {
  const arrayP = data.filter(arr => arr.producer == cineasta);
  return arrayP;
} 

//Orden por letras de pelicula A-Z -- Z-A

export const sortAZ = (data) =>{
  const sortLetters = data.sort((name1, name2) => {
    return(name1.title < name2.title) ? -1  : 1 
  });
  return sortLetters;
}
export const sortZA = (data) =>{
  const sortLetterZA = data.sort((name1, name2) => {
    return(name1.title > name2.title) ? -1  : 1 
  });
  return sortLetterZA;
}

// top 10
export const arrayTop = (data) =>{
  const arrayTop10 = data.filter((number)=>number.rt_score > 91);
 return arrayTop10;
}
export const bestFilms = (data) =>{
  const best = data.sort((score1, score2) => score2.rt_score - score1.rt_score);
  return best
}
