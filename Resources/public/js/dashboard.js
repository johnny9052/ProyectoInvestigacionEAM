 $(document).ready(function(){
    $('ul.tabs').tabs();
    setSizeReport();
  });

function setSizeReport() {
    tamano = tamVentana();
  if (tamano[0] < 990){
      alert("Estoy en el if");
      $('.fondoReporte').css("height","400px");
  }
}

function tamVentana() {
  var tam = [0, 0];
  if (typeof window.innerWidth != 'undefined')
  {
    tam = [window.innerWidth,window.innerHeight];
  }
  else if (typeof document.documentElement != 'undefined'
      && typeof document.documentElement.clientWidth !=
      'undefined' && document.documentElement.clientWidth != 0)
  {
    tam = [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
    ];
  }
  else   {
    tam = [
        document.getElementsByTagName('body')[0].clientWidth,
        document.getElementsByTagName('body')[0].clientHeight
    ];
  }
  alert("El tamaño es " + tam);
  return tam;
}

