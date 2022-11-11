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
            break;
        default:
            webSlide.style.display = "block";
            servSlide.style.display = "none";
            break;
    }
}
  