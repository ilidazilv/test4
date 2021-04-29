let counter = 1;
function callback(response){
    let htmlObject = $(response); // jquery call
    htmlObject.id = 'el' + (counter + 1);
    document.body.appendChild(htmlObject);
}
function request(url){
    let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({name:"John Rambo", time:"2pm"}));
    xmlhttp.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.response);
        }
    }
}
function main(){
    $(window).scroll(function() {
        if(counter > 2){
            request('your.php');
        }
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('#el' + (counter + 1)).css("display", "block");
            counter++;
        }
    });
}