window.onload =  function(){
  createAllVip();
}

function createAllVip(){
  for(var i in vip_ar){
    var item = vip_ar[i];
    // document.querySelector("#id_row").innerHTML += `<div class="col-5">${item.name} ${item.worth}</div><br>`

    var vip1 = VIPClass("#id_row",item.image,item.name,item.source,item.worth,item.birth_year);
    vip1.addToHtml();

  }

}


// 14:50 להיות כאן