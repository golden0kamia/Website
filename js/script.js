
function showOnly(n){
    const webSlide = document.getElementById("website");
    const webButton = document.getElementById("webButton");
    const servSlide = document.getElementById("services");
    const servButton = document.getElementById("servButton");
    const docSlide = document.getElementById("documents");
    const docButton = document.getElementById("docButton");
    switch(n){
        case 1:
            webSlide.style.display = "";
            servSlide.style.display = "none";
            docSlide.style.display = "none";
            webButton.style.color="rgb(20, 20, 20)";
            webButton.style.backgroundColor="white";
            servButton.style.color="white";
            servButton.style.backgroundColor="rgb(20, 20, 20)";
            break;
        case 2:
            webSlide.style.display = "none";
            servSlide.style.display = "";
            docSlide.style.display = "none";
            servButton.className = '.btn.actif';
            servButton.style.color="rgb(20, 20, 20)";
            servButton.style.backgroundColor="white";
            webButton.style.color="white";
            webButton.style.backgroundColor="rgb(20, 20, 20)";

            let myinfo = document.getElementById("heiaMotd");
            if(myinfo.innerText == "MOTD"){
                myinfo.innerText = "Loading";
                fetch("https://api.mcsrvstat.us/2/heia.mc.piguetb.ch").then(res => {
                    //console.log(res.json());
                    return res.json();
                }).then(json =>{
                    let myinfo = document.getElementById("heiaPlayer");
                    let mytext = document.getElementById("heiaMotd");
                    let myIcon = document.getElementById("heiaIcon");
                    myIcon.src = json.icon;
                    mytext.innerHTML = json.motd.html;
                    //console.log(json.motd)
                    myinfo.innerText = json.players.online + "/" + json.players.max;
                    //console.log(json.players.list);
                    myinfo.title = json.players.list;
                });
            }

            fetch("sensors.json").then(res => {
                //console.log(res.json());
                return res.json();
            }).then(json => {
                let tempDisplay = document.getElementById("TempDisplay");
                let fillBar = document.getElementById("fillBar")
                let coreTemp = json['coretemp-isa-0000']['Package id 0']['temp1_input'];
                tempDisplay.innerHTML = coreTemp+"°C";
                let tempPercent = ((coreTemp-20)*100)/70;
                if(coreTemp < 20){
                    tempPercent = 100-(coreTemp*100)/20;
                    fillBar.style.backgroundColor = "aqua";
                    fillBar.style.marginLeft = (100-tempPercent)+'%';
                }
                else if(coreTemp < 60){
                    fillBar.style.backgroundColor = "green";
                }
                else if (coreTemp < 80){
                    fillBar.style.backgroundColor = "orange";
                }
                else{
                    fillBar.style.backgroundColor = "red";
                }
                fillBar.style.width = tempPercent + '%';
            });
            break;
        case 3:
            webSlide.style.display = "none";
            servSlide.style.display = "none";
            docSlide.style.display = ""
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
  