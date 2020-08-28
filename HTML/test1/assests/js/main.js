window.onload = function () {
    console.log("Heelo World");
    console.log("Hello World 2");
    alert("Hello World 3");
    http = new XMLHttpRequest()
    http.onreadystatechange = function () {
        if (http.readystate == 4) {
            x = document.getElementById("my-p")
            console.log(x)
        }
    }

    http.open("GET", "https://api.chucknorris.io/jokes/random", true)
    http.send()
}

