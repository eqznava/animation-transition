const $transformar = document.getElementById('subrect');
$transformar.addEventListener('animationend',mostrar);


function mostrar(){
  $transformar.style.backgroundColor ='green';
  return console.log("Termino la animacion");
}
