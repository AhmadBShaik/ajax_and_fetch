// LOCAL TEXT FILE
document.getElementById("button1")
.addEventListener('click',getText)

function getText(){
    fetch('sample.txt')
    .then(
        function(res) {
            return res.text();
        }
    ).then(
        function(data) {
            document.getElementById("output").innerHTML = data;
        }
    ).catch(
        function(err) {
            document.getElementById("output").innerHTML = err;
        }
    )
}


// LOCAL JSON FILE
document.getElementById("button2")
.addEventListener('click',getJSON)

function getJSON(){
    fetch('posts.json')
    .then(
        function(res) {
            return res.json();
        }
    )
    .then(
        function(data) {
            let output = '';
            data.forEach(function(post) {
                output += `<b>${post.title}</b><br><p>${post.body}</p>`
            });
            document.getElementById("output").innerHTML = output;
        }
    )
    .catch(
        function(err) {
            document.getElementById("output").innerHTML = err;
        }
    )
}

// // EXTERNAL DATA
// document.getElementById("button3").addEventListener('click',getExternalData);

// function getExternalData() {
//     fetch('https://api.github.com/users')
//     .then(
//         function(res) {
//             return res.json();
//         }
//     )
//     .then(
//         function(data) {
//             let output = '';
//             data.forEach(function(user) {
//                 output += `
//                     <b>${user.login}</b><br>
//                     <p>${user.html_url}</p>
//                 `
//             });
//             document.getElementById("output").innerHTML = output;
//         }
//     )
//     .catch(
//         function(err) {
//             document.getElementById("output").innerHTML = err;
//         }
//     )
// }

// EXTERNAL DATA WITH ARROW FUNCTIONS
document.getElementById("button3").addEventListener('click',getExternalData);

function getExternalData() {
    fetch('https://api.github.com/users')
    .then( res => res.json())
    .then( data => {
        let output = ''
        data.forEach(user =>
             output += `
                <b>${user.login}</b><br>
                <p>${user.html_url}</p>
                `);
        document.getElementById("output").innerHTML = output;
    })
    .catch(err => document.getElementById("output").innerHTML = err);
}