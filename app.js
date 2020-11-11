window.onload = function() {
    var button = document.getElementsByClassName("btn")[0];
    var form = document.getElementById("name")
    var result = document.getElementsByClassName("result")[0]
    var sname = document.getElementsByTagName("h3")[0]
    var alias = document.getElementsByTagName("h4")[0]
    var bio = document.getElementsByTagName("p")[0]

    button.addEventListener("click", function(e){
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                var superheroes = JSON.parse(httpRequest.responseText);
                for(var i=0; i < superheroes.length; i++){
                    if (sanitize(form.value) == superheroes[i].name || sanitize(form.value) == superheroes[i].alias){
                        sname.removeAttribute("style");
                        sname.innerHTML = superheroes[i].name;
                        alias.innerHTML = superheroes[i].alias;
                        bio.innerHTML = superheroes[i].biography;
                        break;
                    }
                    else{
                        sname.style = "color: red";
                        sname.innerHTML = "Superhero not found";
                    }
                }
            }
        };
        httpRequest.open("GET","http://localhost:8080/superheroes.php",true);
        httpRequest.send();   
    })

    function sanitize(string) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;',
        };
        const reg = /[&<>"'/]/ig;
        return string.replace(reg, (match)=>(map[match]));
      }
}