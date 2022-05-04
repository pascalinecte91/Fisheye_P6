
 async function getPhotographers() {
//    const photographers = await fetch("/data/photographers.json")
//     .then((response) => response.json())
//      .then((data) => {
//       return data.photographers;
//     });
    
//   return photographers;


return fetch("/data/photographers.json")
            .then(function(response) {
                return response.json();
            })
            .then((datas) => {
                console.log('data :', datas);
                return datas;
            })
            .catch(err => console.log('error', err));
 }
  



