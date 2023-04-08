


const makeRequest = async (url,method,data) => {
    try{
        const result = await $.ajax({
            url: url,
            method: method,
            data: data
        })
        return result;
    }catch(err){
        console.log(err);
    }
    
}

const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts","GET")
    .then((res) => console.log(res))      
}

const sendData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts","POST",{
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
    .then((res) => console.log(res))      
}

const updateData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","PUT",{
        id: 1,
        title: 'fooMA',
        body: 'bar',
        userId: 1,
      })
    .then((res) => console.log(res))      
}


// getData();
//sendData();
updateData();


