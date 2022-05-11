/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo"

//fetch la usamos para traer recursos de una api 
//conectarnos a un servidor 
window.fetch(url)
// procesar la informacion y convertirla en JSON 
.then((respuesta) => respuesta.json ())
//JSON > data > renderizar  informacion en el broswer
.then (respuestaJson => { //informacion pura 
    
   
    respuestaJson.data.forEach((item) => {
       console.log(item.name)
       // crear imagen 
       const imagen = document.createElement('img')
              //crear titulo
       const title = document.createElement('h2')
              //crear precio
       const price = document.createElement('div')
       //como queremos que todo esto quede en un div  entonces creamos el elemento 
       
        const container = document.createElement('div')
        document.body.appendChild(imagen)
        document.body.appendChild(title)
        document.body.appendChild(price)
//aqui creamos los nodos
        

//const container = document.createElement('div')
// container.body.append(imagen, title, price)
//
// const todosLosItems =[]
// todosLosItems.push (container)
// document.body.append(...todosLosItems)

   });
   document.body.appendChild(container) //aqui los va amostrar en el html pero no los vamos a visualizar el pagina 
})
