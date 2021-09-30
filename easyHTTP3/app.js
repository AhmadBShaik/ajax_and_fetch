const http = new easyHTTP;

// GET request
http.get("https://jsonplaceholder.typicode.com/users")
.then(data=>{
    let output="";
    data.forEach(element => {
        output += `<b>${element.username}</b><br><p>${element.name}&nbsp&nbsp|&nbsp&nbsp${element.email}</p><br>`
    });
    console.log(data)
    document.body.innerHTML = output;
})
.catch(err=>console.log(err))

// user data
const data = {
    name:"Saif",
    username:"Being-Saif",
    email:'safeali@gmail.com'
}

// POST request
http.post("https://jsonplaceholder.typicode.com/users",data)
.then(data => console.log(data))
.catch(err => console.log(err))


// PUT request
http.put("https://jsonplaceholder.typicode.com/users/4",data)
.then(data => console.log(data))
.catch(err => console.log(err))

// DELETE request
http.delete("https://jsonplaceholder.typicode.com/users/4")
.then(data => console.log(data))
.catch(err => console.log(err))

