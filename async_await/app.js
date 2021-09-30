// function func() {
//     return "It is a normal function";
// }

// console.log(func())

// ASYNC AWAIT

// async

// async function func() {
//     return "It is a promise...";
// }

// func().then(data =>console.log(data))



// await

// async function func(){
//     const p = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("message")}, 1000);
//     });

//     const err = false
//     if(err){
//         await Promise.reject(new Error("Something went wrong!"))
//     }else{
//         const response = await p;
//         return response;
//     }

// }


// func()
//     .then(res => console.log(res))


async function getUsers() {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();

    return data;
}


getUsers()
.then(users=>console.log(users))