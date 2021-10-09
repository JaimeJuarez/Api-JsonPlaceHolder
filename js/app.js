var demo = document.getElementById("demo");
var users = document.getElementById("user-select")
var jsonbody = "";
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsondata => {
        for (let i = 0; i < jsondata.length; i++) {
            jsonbody += `<option value = "${jsondata[i].id}"> ${jsondata[i].name} </option>`
        }
        users.innerHTML = jsonbody;
    })


users.addEventListener("change", () => {
    var id = document.getElementById("user-select").value
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id)
        .then((response) => response.json())
        .then((json) => {
            var data = "";
            for (let i = 0; i < json.length; i++) {
                console.log(json);
                data += `<div> <h3>${json[i].id}.- ${json[i].title}</h3> <p>${json[i].body}</p> </div>`
            }
            demo.innerHTML = data;
        })
})