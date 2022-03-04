// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }


// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject) 
//     .then (response => response.json())
//     .then (data => console.log(data))
// }


//     const configureUserObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify( {
//         name: userName,
//         email: userEmail,
//     }),
// }
function renderUser(data) {
   document.getElementsByTagName('body')[0].innerHTML = data
}

function appendError(error) {
    document.getElementsByTagName('body')[0].innerHTML = error.message
}


function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify( {
                name: userName,
                email: userEmail,
    })
    })
    .then(response => response.json())
    .then(data => renderUser(data.id))
    .catch(error => appendError(error))
    }




// function appendData (userData) {
//     let user = document.creatElement('div')
//     user.
// }

//console.log(submitData(Steve, steve@steve.com));
//console.log(submitData('Dave', 'dave@dave.com'));

console.log(submitData('Sam', 'sam@sam.com'))