 //switch to pages
 const menu = document.querySelectorAll("ul li")
 function selectPage(home,e){
     fetch(`./${home?"./Home":e.target.innerText}.html`).then(data=>data.text()).then(data=>{
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
     }else{
         e.target.innerText = "🌙"
         board.classList.remove("dark")
         board.classList.add("light"); 
         document.querySelector("body").style.backgroundColor="white"
     }
     
     
 });
 selectPage(true)

function setCerradex(){
// const endpoint = 'https://api.gbif.org/v1/species/search';
// const params = {
//   kingdom: 'Animalia',
//   rank: 'SPECIES',
//   // adicione seu token de acesso aqui, se necessário
// };
// const url = new URL(endpoint);
// url.search = new URLSearchParams(params).toString();
// // console.log(url)
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     fetch('https://api.unsplash.com/search/photos' + '?query=' + data.results[0].canonicalNmame, {
//         headers: {
//             Authorization: 'Client-ID ' + "Uav8XoQ_N1t2FeIrRglbTPAK6X0m-3KZethJ7TnNhRI"
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Loop through the search results and display the images on the webpage
//         let imagesHtml = '';
//         data.results.forEach(function(result) {
//             imagesHtml += '<img src="' + result.urls.regular + '" alt="' + result.alt_description + '">';
//         });
//         document.getElementById('image-grid').innerHTML = imagesHtml;
//     })
//   })
//   .catch(error => {
//     console.error(error);
//   });

}