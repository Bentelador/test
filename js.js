async function ben(serch){
  let result;
  await fetch('https://raw.githubusercontent.com/Bentelador/movie-bai/refs/heads/main/MDB.json')
    .then(response => response.json())
    .then(jsonData => {
      result = jsonData.filter(n => n.title.toLowerCase().includes(serch));
    })
  console.log(result)
  return result;
}

export default ben










