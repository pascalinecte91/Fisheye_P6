

//fetch renvoi une promesse JS qui fait la demande
async function getPhotographers() {

    const data = await fetch("/data/photographers.json")
    

    const photographers = await data.json();
    console.table(photographers);
    return photographers;

    // const photographers = async () => {
    //     try {
    //         const res = await fetch("/data/photographers.json");
    //         if (!res.ok) {
    //             throw new Error(res.status);
    //         }
    //         const data = await res.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
     
    // photographers();

}


