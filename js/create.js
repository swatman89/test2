window.onload = function(){
  createAllCamels();
}



function createAllCamels(){
  addCard("jack","Black jack","The best camel in vegas","http://vegas.com");
  addCard("koko","Koko akof","Koko is special camel that look like a monkey","http://monkeys.com");
  // addCamel("camel.jpeg","koko",20,"iraq");
  // addCamel("camel3.jpeg","momo",30,"iraq");
  // addCamel("camel5.jpeg","dodo brothers",30,"iraq");
}

function addCard(_name,_title,_info,_link){
  var newDiv = document.createElement("div");
  newDiv.className = "card col-lg-4 p-0";
  document.querySelector("#id_parent").appendChild(newDiv);

  newDiv.innerHTML += `
  <div class="card-header">
  ${_name}
  </div>
  `

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";
  newDiv.appendChild(cardBody);

  cardBody.innerHTML += `
  <h5 class="card-title">${_title}</h5>
  <p class="card-text">${_info}</p>
  `

  var button = document.createElement("button");
  button.className = "btn btn-primary";
  button.innerHTML = "Visit profile";
  cardBody.appendChild(button);

  button.addEventListener("click",function(){
    //alert(_link);
    button.className = "btn btn-danger";
    
  })
}

function addCamel(_img,_name,_age,_state){
  var newDiv = document.createElement("div");
  newDiv.className = "col-lg-6 border p-2";
  document.querySelector("#id_parent").appendChild(newDiv);

  newDiv.innerHTML += `
  <img src="images/${_img}" class="w-25 float-right ml-2">
  <h2>${_name}</h2>
  <div>Age: ${_age}</div>
  <div>Location: ${_state}</div>
  `
}