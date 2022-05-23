keys = Object.keys(localStorage),
k = keys.length /4 ;

for (var idx = 1; idx <= k; idx++) {
  var nev = localStorage.getItem("name" + idx);
  var db = localStorage.getItem("darab" + idx);
  var ossz = localStorage.getItem("ossz" + idx);
  addItemToCart(nev, db, ossz)   
}
szummaz()

function addItemToCart(nev, db, ossz) {
  var cartRow = document.createElement('table')
  cartRow.classList.add('cart-row')
  var cartRowContents =
      `<tr class="cart-item">
        <th style="text-align: left"; width="75%"><h6>${nev}</h6></th>
        <th style="text-align: center"; width="100%"><h6>${db}</h6></th>         
        <th style="text-align: right";  width="50%"><h6>${ossz + "Ft"}</h6></th>
      </tr>`
  cartRow.innerHTML = cartRowContents
  table.appendChild(cartRow)
}

function szummaz() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    let ossz = 0
  while ( i-- ) {
    if (keys[i].includes("ossz"))
        ossz += parseInt(localStorage.getItem(keys[i]))
  }       
   document.getElementById("osszp").innerHTML = ossz  +  " Ft";
}

function deleteItems() {
  let text = "Biztosan ki akarja törölni az árukat";
  if(confirm(text) == true ){
  localStorage.clear();
  alert("Sikeresen törölte az összes árut")
  }
  else{
    alert("Sikeresen vissza vontad")
  }
}