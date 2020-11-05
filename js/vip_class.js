function VIPClass(_parent,_img,_name,_company,_money,_year){
  var obj = {
    parent:_parent,
    img:_img,
    name:_name,
    company:_company,
    money:_money,
    year:_year,
    addToHtml:function(){
      var newDiv = document.createElement("div");
      newDiv.className = "col-lg-6 border p-2";
      document.querySelector(this.parent).appendChild(newDiv);

      newDiv.innerHTML += `
      <img src="${this.img}" alt="car"  class="w-25 float-left mr-2">
      <h2>${this.name}</h2>
      <div>Company: ${this.company}</div>
      `

    }
  }

  return obj;
}