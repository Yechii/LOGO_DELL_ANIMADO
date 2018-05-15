var velocidad=1;

$(document).ready(function(){

    var animaciones = {};
 
    var configExtrem={
          duration: 9000,
          iterations: Infinity,
          direction: 'alternate',
          
        };

    var moverCirculo=[{ transform: 'rotateX(0deg)' }, 
         { transform: 'rotateX(360deg)' }];

    var roteteE=[{ transform: 'rotate(0deg)' }, 
         { transform: 'rotate(-50deg)' }];


    var scaleLetras=[{ transform: 'scale(0.1)' }, 
         { transform: 'scale(1.1)' }];


    animaciones.LisDELL = 
      $('#Circulo')[0].animate(moverCirculo, configExtrem);


      animaciones.E =
         $('#E')[0].animate(roteteE, configExtrem);
    
    animaciones.LisDELL= 
      $('.LisDELL')[0].animate(scaleLetras, configExtrem);
    
    });
    
    
    