let url="https://pokeapi.co/api/v2/"

const buscar=document.getElementById('buscar')
buscar.addEventListener('click',conseguir)



async function conseguir(){
    
    let espacio=document.getElementById('ingreso')
    let busqueda=espacio.value

    url+=`pokemon/${busqueda}`
    console.log(url)
    espacio.value=''
    
    const respuesta= await fetch (url)
    const datos= await respuesta.json()
    const foto=(datos.sprites.front_default)

    let pokemon=document.getElementById('pokemon')
    pokemon.innerHTML=`<img src=${foto}>`

    url="https://pokeapi.co/api/v2/"
}