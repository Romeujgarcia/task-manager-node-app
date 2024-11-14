const axios = require('axios');

async function fetchAndProcessData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const filteredData = response.data.filter(post => post.userId === 1); // Filtra posts do usuário com ID 1
    console.log(filteredData);
  } catch (error) {
    console.error('Erro ao buscar dados: ', error);
  }
}

// Chame a função
fetchAndProcessData();
