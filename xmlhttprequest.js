

const makerequest = (method,url,data) =>{
    return new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);

        xhr.setRequestHeader('Content-type', 'application/json')

        xhr.onload = () =>{
            let data = xhr.response;
        // console.log(xhr.status);
            console.log(JSON.parse(data));
        }

        xhr.onerror = () =>{
            console.log("error is here")
        }
        
        xhr.send(JSON.stringify(data));
    })
}

const getData = () =>{
    makerequest('GET','https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res));
}

// const sendData = () =>{
//     makerequest('POST','https://jsonplaceholder.typicode.com/posts',{
        
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       })

// }

// const updateData = () =>{
//     makerequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        
//         id: 1,
//         title: 'fooMA',
//         body: 'barMA',
//         userId: 1,
//     })
// }

// const updateSingleData = () =>{
//     makerequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        
//         title: "foo",
//     })
// }

// const deleteData = () =>{
//     makerequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');   
     
// }


getData();

// sendData();
// updateData()
// updateSingleData();
// deleteData();