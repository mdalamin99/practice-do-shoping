
const cartArray=[];


      function display(cartProduct){
      // console.log(cartProduct);
      let totalPrice=0;
      const tableBode=document.getElementById("products-cart");
      tableBode.innerHTML="";
      for(let i=0; i<cartProduct.length; i++){
            // console.log(cartArray[i].pdName, cartArray[i].pdPrice);
            const name=cartArray[i].pdName;
            const price=cartArray[i].pdPrice;
            totalPrice=totalPrice+price;
            const tr=document.createElement("tr");
            tr.innerHTML=`
            <th>${i+1}</th>
            <td>${name}</td>
            <td>${price}</td>`;
            tableBode.appendChild(tr);
      }
      const tr=document.createElement("tr");
      tr.innerHTML=`
      <th></th>
      <td>totalPrice</td>
      <td>${totalPrice}</td>`
      ;
      tableBode.appendChild(tr);

      }

function addToCart(element){
      // console.log(element.parentNode.parentNode.children[0].innerText);
      // console.log(element.parentNode.parentNode.children[1].children[0].innerText);

      const pdName=element.parentNode.parentNode.children[0].innerText;
      const pdPrice=element.parentNode.parentNode.children[1].children[0].innerText;

      const productObj={
            pdName:pdName,
            pdPrice:parseInt(pdPrice)
      }
      cartArray.push(productObj);
      // console.log(cartArray);
      document.getElementById("total-products").innerText=cartArray.length;
      display(cartArray);
}