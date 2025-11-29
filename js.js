function ben(serch){
  let result;
  fetch('https://raw.githubusercontent.com/Bentelador/movie-bai/refs/heads/main/MDB.json')
    .then(response => response.json())
    .then(jsonData => {
      result = jsonData
      console.log(result);
    })
    console.log(result)
  const benner = result.filter(n => n.title.toLowerCase().includes(serch))
  return benner
}

export default ben


