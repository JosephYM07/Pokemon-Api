//Consultamos la API de pokemon
const consultarPokemon = (id, number) => {
  //Fetch permite hacer peticiones HTTP desde JavaScript de una manera más sencilla
  // se usa ${id} para que el id sea dinamico y se pueda cambiar por el numero que se le pase a la funcion
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //Manejo de promesas con then y catch
    //then: se ejecuta cuando la promesa se cumple
    .then((response) => {
      /*se retorna la respuesta en formato json porque la API nos devuelve los datos en 
        ese formato y se retorna para que se pueda usar en el siguiente then*/
      return response.json();
    })
    //Aqui se recibe la respuesta en formato json y se puede usar en la funcion pintarPokemon
    .then((data) => {
      //console.log(data);
      pintarPokemon(data, number);
    })
    .catch((error) => {
      console.log(error);
    });
};
// Con esta funcion generamos un numero aleatorio entre 1 y 150 y lo asignamos a la variable primerPokemon
const btnSeleccionar = () => {
  let primerPokemon = Math.round(Math.random() * 150);
  let segundoPokemon = Math.round(Math.random() * 150);
  consultarPokemon(primerPokemon, 1);
  consultarPokemon(segundoPokemon, 2);

  //restringir para que no se perita dos pokemones iguales
  if (primerPokemon == segundoPokemon) {
    btnSeleccionar();
  }
};
//Llamamos a la funcion btnSeleccionar
btnSeleccionar();

//Con esta funcion pintamos los datos de los pokemones en el HTML
const lista = document.getElementById("listarpokemon");

//Con esta funcion pintamos los datos de los pokemones en el HTML
const pintarPokemon = (data, id) => {
  let item = lista.querySelector(`#pok-${id}`); //con esta linea  buscamos el id del pokemon que se va a pintar en el HTML y lo guardamos en la variable item
  item
    .getElementsByTagName("img")[0]
    .setAttribute("src", data.sprites.front_default);
  item.getElementsByTagName("p")[0].innerHTML = data.name;
};
