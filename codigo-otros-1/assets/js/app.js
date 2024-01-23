const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // le faltaba el putno en referencia a su class 
const $b = document.querySelector('.blog'); // Se cambio class por id 
const $l = document.querySelector('.location');

async function displayUser(username) { //Convertir en funcion async await
  $n.textContent = 'cargando...';
  try { //faltaba el try para que continuara la funcion
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Se añadió esta línea para convertir la respuesta a JSON 
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);
