export function filterFilmsByDirector(list, director) {
    if (!director) {
      return list; // Return the entire list if no director is selected
    }
  
    return list.filter((film) => film.director === director);
  }
  
  export function getListOf(list, prop) {
    return list.reduce((accumulator, item) => {
      const value = item[prop];
      if (!accumulator.includes(value)) {
        accumulator.push(value);
      }
      return accumulator;
    }, []);
  }