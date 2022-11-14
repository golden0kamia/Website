
function showOnly(n){
    const webSlide = document.getElementById("website");
    const servSlide = document.getElementById("services");
    const webButton = document.getElementById("webButton");
    const servButton = document.getElementById("servButton");
    switch(n){
        case 1:
            webSlide.style.display = "block";
            servSlide.style.display = "none";
            webButton.style.color="rgb(20, 20, 20)";
            webButton.style.backgroundColor="white";
            servButton.style.color="white";
            servButton.style.backgroundColor="rgb(20, 20, 20)";
            break;
        case 2:
            webSlide.style.display = "none";
            servSlide.style.display = "block";
            servButton.style.color="rgb(20, 20, 20)";
            servButton.style.backgroundColor="white";
            webButton.style.color="white";
            webButton.style.backgroundColor="rgb(20, 20, 20)";

            let myinfo = document.getElementById("heiaPlayer");
            myinfo.innerText = "Loading";
            fetch("https://api.mcsrvstat.us/2/heia.mc.piguetb.ch").then(res => {return res.json()}).then(json =>{
                let myinfo = document.getElementById("heiaPlayer");
                let mytext = document.getElementById("heiaMotd");
                let myIcon = document.getElementById("heiaIcon");
                myIcon.src = json.icon;
                mytext.innerHTML = json.motd.html;
                myinfo.innerText = json.players.online + "/" + json.players.max;
            });
            break;
        default:
            break;
    }
}

function showMore(){
    let button = document.getElementById("hiddenButton");
    let moreLink = document.getElementById("privateLink");
    if(moreLink.style.display == "none"){
        moreLink.style.display = "block";
        button.textContent="Less";
    }
    else{
        moreLink.style.display = "none";
        button.textContent="More";
    }
}
  