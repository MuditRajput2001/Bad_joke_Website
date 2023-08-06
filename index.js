const jokes = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokeBtn");

// const generatejoke = () => {
//     const setHeader = {
//         headers: {
//             Accept: "application/json",
//         },
//     };

//     fetch('https://icanhazdadjoke.com/', setHeader)
//         .then((res) => res.json()) // Parse the JSON data here
//         .then((data) => {
//             jokes.innerHTML = data.joke; // Access the joke property from the parsed data
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

const generatejoke = async ()=>{

    try{
        const setHeader = {
            headers :{
              Accept : "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/',setHeader);
        const data =  await res.json();
        jokes.innerHTML = data.joke;
    }
    catch(err)
    {
        console.log(err);
    }
    
}




// Assuming you have an event listener for the button click
jokebtn.addEventListener('click', generatejoke);
