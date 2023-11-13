function menuopen() {
    document.getElementById('menu')
    .style.display = "inline";
    document.getElementById('navitemclose')
    .style.display = "inline";
    document.getElementById('menu')
    .style.animationName = "menuopen";
    document.getElementById('main').style.position = "relative";
    document.getElementById('main').style.right = "500%";
    document.getElementById('navitem').style.display = "none";
    document.getElementById('hidewebsite').style.position = "relative";
    document.getElementById('hidewebsite').style.right = "500%";
}  
function menuclose() {
    document.getElementById('menu')
    .style.display = "none";
    document.getElementById('navitemclose')
    .style.display = "none";
    document.getElementById('main')
    .style.display = "inline-block";
    document.getElementById('main')
    .style.maxWidth = "100%";
    document.getElementById('main').style.position = "unset";
    document.getElementById('main').style.right = "-500%";
    document.getElementById('navitem').style.display = "inline"
    document.getElementById('hidewebsite').style.position = "unset";
    document.getElementById('hidewebsite').style.right = "-500%";;
}  
function light() {
    document.body.style.backgroundColor = "#dfdfdf";
    document.getElementById('navbg').style.backgroundColor = "#d0d0d0";
    document.getElementById(h4).style.color = "#00FF00";
    document.getElementById('light').style.display = "none";
    document.getElementById('dark').style.display = "inline-block";
}  
function dark() {
    document.body.style.backgroundColor = "#1C2023";
    document.getElementById('dark').style.display = "none";
    document.getElementById('light').style.display = "inline-block";
}  