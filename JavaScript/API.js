// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //       .then(response => response.json())
// //       .then(json => console.log(json))


// // Performing ;

// (async (id) =>{



// const FetchData = async (id) => {

//       try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//             const Data = await response.json();

//             return Data;

//       } catch (error) {
//             console.log(error);

//       }


// }

// console.log( await FetchData(1));




// })();




// For Creating new Post;




(async () => {

      const NewPost = {
            userId: 1,
            id: 1,
            title: "Nitin-Rajdharmesh",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"

      }

      const CreateData = async (post) => {

            try {

                  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                        method: "POST",
                        body: JSON.stringify(post),
                        headers: {
                              "Content-type": "application/json"
                        }


                  });
                  const Data = await response.json();

                  return Data

            } catch (error) {
                  console.log(error);

            }


      }



      // const createdPost = await CreateData(NewPost);
      // console.log(createdPost);


      const UpdatePost = async (id, post) =>{

            try {
                  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                        method:"PUT",
                        body:JSON.stringify(post),
                        headers:{
                              "Content-type":"application/json"
                        }
                  });

                  const Data = response.json();
                return Data;

            } catch (error) {
                  console.log(error);
                  
            }
      }


      const UpdatedPost = await UpdatePost(1, {
             userId: 1,
            id: 1,
            title: "Nitin-Rajdharmesh",
            body: "I LOVE YOU SOO MUCH my Love!!"

      })

//   console.log(UpdatedPost);
  

// DELETe the post;


const DeletePost = async (id) =>{
      try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                  mathod:"DELETE"
            });

            const Data = await response.json()
            return Data;
      } catch (error) {
            console.log(error);
            
            
      }
}

const DeletedPost = await DeletePost(1);
console.log(DeletedPost);



})();




// Doccument.cookis : are way to store small amout of data on user computer ;
const CookieInfo = document.cookie = "username=Nitin-Rajdharmesh; expires=" + new Date(Date.now() + 3600000).toUTCString();

const Cookies = CookieInfo.split(";");

for(let i = 0; i < Cookies.length; i++)
{
      let CookiesTrim = Cookies[0].trim();

      console.log(CookiesTrim);
}





// LocalStorage;


localStorage.setItem("Name", "Nitin-Rajdharmesh");

const Name = localStorage.getItem("Name");
console.log(Name);


