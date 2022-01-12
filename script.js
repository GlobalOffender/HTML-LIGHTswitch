var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code
btn.onclick = function(){
    lightswitch(); 
}
function lightswitch(){
  if (btn.innerHTML == "switch light on"){
    btn.innerHTML = "switch light off";
    document.body.style.backgroundColor = "white";
  } else {
    btn.innerHTML = "switch light on";
    document.body.style.backgroundColor = "black";
  }
}
// schijf hier tussen je code