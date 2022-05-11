/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"
//const url ="https://platzi-avo.vercel.app/api/avo"
// const  appNode = document.querySelector('#app')

//fetch la usamos para traer recursos de una api 
//conectarnos a un servidor 
window.fetch(`${baseUrl}/api/avo`)
// procesar la informacion y convertirla en JSON 
.then((respuesta) => respuesta.json ())
//JSON > data > renderizar  informacion en el broswer
.then (respuestaJson => { //informacion pura 
       const todosLosItems =[]
   
    respuestaJson.data.forEach((item) => {
           // crear imagen 
       const imagen = document.createElement('img')
       imagen.src  = `${baseUrl}${item.image}`
              //crear titulo
       const title = document.createElement('h2')
       title.textContent = item.price
              //crear precio
       const price = document.createElement('div')
       price.textContent = item.preice
       //como queremos que todo esto quede en un div  entonces creamos el elemento 
       const container = document.createElement('div')
        container.append(imagen, title, price)        
//aqui creamos los nodos
       
       todosLosItems.push(container)

// const container = document.createElement('div')
//         container.appendChild(imagen)
//         container.appendChild(title)
//         container.appendChild(price)
   });
    //aqui los va amostrar en el html pero no los vamos a visualizar el pagina
    document.body.append(...todosLosItems)
})
