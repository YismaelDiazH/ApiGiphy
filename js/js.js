
// const API_KEY = 'h6V0yMsand0N7sKRJXCOTdxRKF9vSPQV';
// const form = document.getElementById('form-search');
// form.addEventListener('submit', handleSubmit);
// async function handleSubmit(event) {
//   event.preventDefault();
  
//   const inputValue = document.getElementById('search-input').value;
//   const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputValue}`);
//   const data = await response.json();
//   const gifs = data.data;
//   console.log(gifs);
 
//   gifs.forEach((gif) => {
//   const img = document.createElement('img');
//   img.src = gif.images.original.url;
//  // document.body.appendChild(img);
//   img.className="mb-3";
//   document.getElementById("imagen").appendChild(img)
// });
  
// }



 

const API_KEY = 'h6V0yMsand0N7sKRJXCOTdxRKF9vSPQV';
const inputSearch = document.getElementById("search");
      inputSearch.onkeyup = async (event) => {
        event.preventDefault();
        console.log(event);
        if (event.keyCode != 13) return;
        const response = await fetch(
          `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputSearch.value}`
        );
        const datagif = await response.json();
        // console.log(data);
        // console.log(data.json);
        let content = ``;
        datagif.data.map((gif,index) => {
          content += `
          <img src="${gif.images.original.url}" class= "mb-3" alt="${gif.title}">
          `;
        });
        gifs.innerHTML = content;
       
      };



// const url = 'https://api.giphy.com/v1/gifs/search';
// let busqueda = "?q=";
// const key ='&api_key=h6V0yMsand0N7sKRJXCOTdxRKF9vSPQV';
// const limite = "&limit=10";
// let q = "cat";
// let urlCompleta = "";
// urlCompleta = url + busqueda +key+q + +limite;
// const btn = document.getElementById('btn');
// const getData = async ()=>{
//     await fetch(urlCompleta).then((response)=>{
//         return response.json();
//     }).then((giphy)=>{
//         console.log(giphy);
//     })
//     }
//     getData();


// const api_key = 'h6V0yMsand0N7sKRJXCOTdxRKF9vSPQV';
// const inputSearch = document.getElementById('search');

// inputSearch .onkeyup= async (event)=>{
//   event.preventDefault();
//   console.log(event);
//   if (event.keyCode !==13 )return;
  
//   const response = await fetch(
//       `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${inputSearch.value}`
//   );       
//   const data = await response.json();
  
//   console.log(data);
  
//   for (let i = 0; i < data.data.length; i++) {
//     const gif = document.createElement('img');
//     gif.src= data.data[i].images["original"].url;
//     gif.className="mb-3";
//     document.getElementById("imageneees").appendChild(gif)
    
//   }
// };