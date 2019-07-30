const $transformar = document.getElementById('subrect');
$transformar.addEventListener('animationend',mostrar);


function mostrar(){
  $transformar.style.backgroundColor ='black';
  return console.log("Termino la animacion");
}
