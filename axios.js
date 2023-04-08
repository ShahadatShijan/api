

// axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// axios
//     .post("https://jsonplaceholder.typicode.com/posts",{
//         method: 'POST',
//         body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));


const makeRequest = async (config) =>{
    return await axios(config);
}

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

}

const sendData = () => {
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts",
        method : 'POST',
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

}

const updateData = () => {
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method : 'PUT',
        data: JSON.stringify({
            id: 1,
            title: 'hello',
            body: 'bar',
            userId: 1
        })
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

}

const patchData = () => {
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method : 'patch',
        data: JSON.stringify({      
            title: 'how',      
        })
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

}

const deleteData = () => {
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: 'DELETE'
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}

getData();
// sendData();
// updateData();
// patchData();
// deleteData();