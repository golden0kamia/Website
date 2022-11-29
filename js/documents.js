var filedict = {};

async function setBlock(path){
  //console.log(filedict);
  console.log(path);
  file = await fetch(path);
  txt = await file.text();
  block = document.getElementById("mdblock");
  block.innerHTML = marked.parse(txt);
  images = await document.getElementsByTagName("img");
  for(i = 0; i < images.length; i++){
    images.setAttribute("src", "Cours/" + images[i].getAttribute("src"));
  }
  //block.innerHTML = marked.parse(block.innerHTML);
  Prism.highlightAll();
  MathJax.typeset();
  //block.innerHTML = marked.parse(block.innerHTML);

}

async function setupFileTree(){
  let zone = document.getElementById("dirList");
  let res = await fetch('../dirList.html');
  let txt = await res.text();
  zone.innerHTML = txt;

  var toggler = document.getElementsByClassName("caret");
  var mdfiles = document.getElementsByClassName("mdfile");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener('click', function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }

  for(i = 0; i < mdfiles.length; i++){
    filedict[mdfiles[i].innerText] = mdfiles[i].getAttribute("path");
  }

  if(document.URL.split('#').length == 2){
    setBlock(filedict[decodeURI(document.URL.split('#')[1])]);
  }
}

window.addEventListener('hashchange', function(){
  setBlock(filedict[decodeURI(document.URL.split('#')[1])]);
});

