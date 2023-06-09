

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then((res) => {
//     if(!res.ok){
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err)); 


const makeRequest = async(url,config) => {
    const res = await fetch(url,config);
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    const data = res.json();
    return data;
}

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}


const sendData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
const updateData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

const patch = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PATCH',
        body: JSON.stringify({
            title: 'hello',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

const deleteData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'DELETE',
        
      })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}


getData();
// sendData();
// updateData();
// patch();
// deleteData();