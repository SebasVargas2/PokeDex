let url="https://pokeapi.co/api/v2/"
let busqueda=''
let busqueda2=''
let contenido=''
let estadis=[]

const buscar=document.getElementById('buscar')
buscar.addEventListener('click',conseguir)

const estad=document.getElementById('stats')
estad.addEventListener('click',stats)


async function conseguir(){
    
    let espacio=document.getElementById('ingreso')
    busqueda=espacio.value

    url+=`pokemon/${busqueda}`

    if (busqueda==''){
        alert('Por favor, ingrese un pokemon')
        espacio.value=''
    }else{
        const respuesta= await fetch (url)
        if (respuesta.status==404){
            alert('Este pokemon no existe')
            url="https://pokeapi.co/api/v2/" 
            pokemon.innerHTML=``
            document.getElementById('pantalla2').innerHTML=''
        }else{
            busqueda2=busqueda
            const datos= await respuesta.json()
            const foto=(datos.sprites.front_default)

            let pokemon=document.getElementById('pokemon')
            pokemon.innerHTML=`<img src=${foto}>`
        }
        busqueda=''
        espacio.value=''
        contenido=''
        document.getElementById('pantalla2').innerHTML=''
    }
    url="https://pokeapi.co/api/v2/" 
}


async function stats(){

    url="https://pokeapi.co/api/v2/" 
    url+=`pokemon/${busqueda2}`

    const respuesta= await fetch (url)
    const datos= await respuesta.json()
    
    for (i=0;i<5;i++){
        let dato1=datos.stats[i].stat.name
        let dato2=datos.stats[i].base_stat
        estadis.push({dato1,dato2})
    }

    contenido+=`<table style border=''>`
    contenido+=`<th colspan="2">Estadisticas</th>`
    contenido+=`<tr>`
    contenido+=`<td>Hp</td>`
    contenido+=`<td>${estadis[0].dato2}</td></tr>`
    contenido+=`<tr>`
    contenido+=`<td>Attack</td>`
    contenido+=`<td>${estadis[1].dato2}</td></tr>`
    contenido+=`<tr>`
    contenido+=`<td>Defense</td>`
    contenido+=`<td>${estadis[2].dato2}</td></tr>`
    contenido+=`<tr>`
    contenido+=`<td>Special-Attack</td>`
    contenido+=`<td>${estadis[3].dato2}</td></tr>`
    contenido+=`<tr>`
    contenido+=`<td>Special-Defense</td>`
    contenido+=`<td>${estadis[4].dato2}</td></tr>`

    for (i=0;i<5;i++){
        estadis.pop()
    }
    
    document.getElementById('pantalla2').innerHTML=contenido
    url="https://pokeapi.co/api/v2/"
}