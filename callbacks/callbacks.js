// callbacks

/*
// SYNCHRONOUS CALLBACKS

// const posts = [
//     {title:"Post One",body:"This is post 1"},
//     {title:"Post Two",body:"This is post 2"}
// ]


// function createPost(post) {
//     setTimeout(function () {
//         posts.push(post)
//     },2000)
// }

// function getPosts() {
//     setTimeout(function () {
//         let output = ''
//         posts.forEach(function (post) {
//             output+=`<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     },1000)
    
// }

// createPost({title:"Post three",body:"This is post 3"})

// getPosts()

*/



// ASYNCHRONOUS CALLBACKS

// const posts = [
//     {title:"Post One",body:"This is post 1"},
//     {title:"Post Two",body:"This is post 2"}
// ]

// function createPost(post,callback) {
//     setTimeout(function () {
//         posts.push(post)
//         callback()
//     },2000)
// }

// function getPosts() {
//     setTimeout(function () {
//         let output = ''
//         posts.forEach(function (post) {
//             output+=`<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     },1000)
    
// }

// createPost({title:"Post three",body:"This is post 3"},getPosts)

// PROMISES

const posts = [
    {title:"Post One",body:"This is post 1"},
    {title:"Post Two",body:"This is post 2"}
]

function createPost(post) {
    return new Promise(function(resolve,reject){

        setTimeout(function () {
            posts.push(post)
            const err = false
            if(!err){
                resolve();
            }else{
                reject("Error: something went wrong!");
            }
        },2000)
    });
}

function getPosts() {
    setTimeout(function () {
        let output = ''
        posts.forEach(function (post) {
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    },1000)
    
}

createPost({title:"Post three",body:"This is post 3"})
.then(getPosts)
.catch(function(err) {
    console.log(err);
})




