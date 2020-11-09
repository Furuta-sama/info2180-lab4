window.onload = function() {
    let button = document.getElementsByClassName("btn")[0];

    button.addEventListener("click", function(e){
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                alert(this.response);
            }
        };
        httpRequest.open("GET","http://localhost:8080/superheroes.php",true);
        httpRequest.send();   
    })
}