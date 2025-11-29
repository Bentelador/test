function ben(serch){
  let result;
  fetch('https://raw.githubusercontent.com/Bentelador/movie-bai/refs/heads/main/MDB.json')
    .then(response => response.json())
    .then(jsonData => {
      result = jsonData;
    })
    
  const benner = res.filter(n => n.title.toLowerCase().includes(serch))
  return benner
}

export default ben
