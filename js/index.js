 //switch to pages
 const menu = document.querySelectorAll("ul li")
 function selectPage(home,e){
     fetch(`./views/${home?"./Home":e.target.innerText}.html`).then(data=>data.text()).then(data=>{
         document.querySelector(".board").innerHTML=data
         })

         if(!home &&    e.target.innerText=="Cerradex"){
            setCerradex()
         }
 }
 menu.forEach(Element=>{   
     Element.addEventListener("click",e=>{        
         selectPage(false, e)
         menu.forEach(el=>{
           if(el.innerText !== e.innerText && el.classList.contains("selected"))  {
             el.classList.remove("selected")
           }
         })
         e.target.classList.add("selected")
     })
     
 })
 //switch the light
 const board = document.querySelector(".board");
 document.querySelector(".switchRegulator").addEventListener("click",e=>{
     if(e.target.innerText == "🌙"){
         e.target.innerText ="☀️";
         board.classList.remove("light")
         board.classList.add("dark")

         document.querySelector("body").style.backgroundColor="rgb(21, 23, 30)"
         document.querySelector("footer").style.backgroundColor="white"
         document.querySelector("footer").style.color="black"
     }else{
         e.target.innerText = "🌙"
         board.classList.remove("dark")
         board.classList.add("light"); 
         document.querySelector("body").style.backgroundColor="white"
         document.querySelector("footer").style.backgroundColor="rgb(21, 23, 30)"
         document.querySelector("footer").style.color="white"
     }
     
     
 });
 selectPage(true)


let dado =null;
function setCerradex(){
 fetch("../public/cerradex.json").then(data=>data.json( )).then(data=>{
     dado=data
    data.forEach((e,id)=>{
        const block = document.createElement("div")
        block.id = `${id}`
        block.classList.add("selectBlock")

        const span = document.createElement("span")
        span.innerText = `#${id}`
        block.style.backgroundImage=`url(${e.img})`
    
        // const img = document.createElement("img")
        // img.src=e.img

        const name = document.createElement("p")
        name.innerText = e.species

        block.appendChild(span)
        // block.appendChild(img)
        block.appendChild(name)

        block.addEventListener("click",showStatus)
        document.querySelector("#image-grid").appendChild(block)
    })
 })

}

function showStatus(e){
    const id = Number(e.target.id)
    const especie = dado[id]
    document.querySelector(".board").innerHTML=`
    <div id="statusContainer">
    <div id="Statusheader"><h1>${especie.species}</h1> <span>#${id}</span></div>
    <img src="${especie.img}">
    <div id="infos">
        <div id="family">
       <span>Familia</span> <p>${especie.family}</p>
        </div>
        <div id="sName">
       <span>Nome cientifico</span> <p>${especie.scientific_name}</p>
        </div>
        <div id="status">
       <span>status</span> <p>${especie.status}</p>
        </div>
    </div>
    </div>
    `
}