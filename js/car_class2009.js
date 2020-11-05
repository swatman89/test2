// הולך להגדיר מחלקה של רכב
function CarClass(_parent,_img,_name,_color,_price){
  var obj = {
    parent:_parent,
    img:_img,
    name:_name,
    color:_color,
    price:_price,
    addToHtml:function(){
      var newDiv = document.createElement("div");
      newDiv.className = "col-lg-6 border p-2";
      // document.querySelector("#id_parent").appendChild(newDiv);
      document.querySelector(this.parent).appendChild(newDiv);

      newDiv.innerHTML += `
      <img src="images/${this.img}" alt="car" height="140" class="float-left mr-2">
      <h2>${this.name}</h2>
      <div>Color:${this.color}</div>
      <div>Price:${this.price}</div>
      `
    }
  }

  return obj;
}