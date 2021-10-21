var btndata = document.getElementById("btn-showdata").onclick = showData;

function showData() {
    var close = document.getElementById("btnclose");
    close.removeAttribute("hidden");
    var demo = document.getElementById("demo");
    var userdata = document.getElementById("user-data");
    var users = document.getElementById("user-select");
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
                    data += `<div class="publi"> <h3>${json[i].id}.- ${json[i].title}</h3> <p>${json[i].body}</p> </div>`
                }
                demo.innerHTML = data;
            })
    })



    // function mostrarUserData() {

    users.addEventListener("change", () => {
        userdata.hidden = false;
        var id2 = document.getElementById("user-select").value
        fetch("https://jsonplaceholder.typicode.com/users?id=" + id2)
            .then((response) => response.json())
            .then((json) => {
                var usersdata = "";
                for (let i = 0; i < json.length; i++) {
                    usersdata = "Nombre: " + json[i].name + "<br>" + "Username: " + json[i].username + "<br>" + "Email: " + json[i].email + "<br>" + "Phone: " + json[i].phone;
                }

                userdata.innerHTML = usersdata;
                console.log(json);
            })
    })
    close.addEventListener("click", function() {
        userdata.hidden = true
    })
}
// }