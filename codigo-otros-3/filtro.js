// Tenemos un li de productos
document.addEventListener('DOMContentLoaded', function(){
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const ul = document.getElementById("lista-de-productos");
const filtro = document.getElementById("filtro");
console.log(filtro)

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  ul.appendChild(d)
}

const botonDeFiltro = document.getElementById("botonFiltro");

botonDeFiltro.onclick = function() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  const texto = filtro.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    ul.appendChild(d)
  }
}
const filtrado = (productos = [], texto) => {
  const textoLowerCase = texto.toLowerCase();
  return productos.filter(item => 
    item.tipo.toLowerCase() === textoLowerCase ||
    item.color.toLowerCase() === textoLowerCase ||
    item.nombre.toLowerCase().includes(textoLowerCase)
  );
}  })