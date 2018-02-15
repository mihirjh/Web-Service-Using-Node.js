var idx = Math.floor((new Date().getHours()));
var body = document.getElementsByTagName("body")[0];
body.className = "heaven-" + idx;

function getResponse(){
  var request = new XMLHttpRequest();
  request.open("GET", "https://41mkwllvad.execute-api.us-east-2.amazonaws.com/Prod/mihir/Jha)", false(async flag), "userName", "password");
  request.send();
}
