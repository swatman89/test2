var car1;
var car2 ;
var car3 ;

window.onload = function(){
  createAllCars()
}

function createAllCars(){
  car1 = {
    img:"....",
    name:"sosoita",
    color:"silver",
    price:"20K",
    
  }

  car2 = CarClass("#id_parent","mazda3.jpg","mazda3","silver","10K");
  car3 = CarClass("#id_parent","ferrari.jpg","Ferrari","red","5M");

  car2.addToHtml();
  car3.addToHtml();
}