const http = new easyHTTPes5;

// single post
http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post) {
    if(err){
        console.log(err)
    }else{
        console.log(post)    
    }
})

// list of posts
http.get('https://jsonplaceholder.typicode.com/posts/',function(err,posts) {
    if(err){
        console.log(err)
    }else{
        console.log(posts)    
    }
})


const data = {
    title:'My post',
    body:"This is my post"
}

// post request
http.post('https://jsonplaceholder.typicode.com/posts/',data,function(err,post) {
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }
})

// put request
http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post) {
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }
})

delete request
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response) {
    if(err){
        console.log(err)
    }else{
        console.log(response)    
    }
})
