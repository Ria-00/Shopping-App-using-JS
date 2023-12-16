// import {doNetworkCall} from "../services/service.js"; 
// used when we use export in service.js and not export default
// export default function can be used only once in a file
// deafult export can be imported withour curly braces as it isn't being imported as an object
// curly braces import is for object import

import doNetworkCall from "../services/service.js";

window.addEventListener("load", bindEvents);

let row;
let cart=[];
let cart1;

function bindEvents() {
  row=document.querySelector("#row1");
  // cart1=document.querySelector("#cart1");
  getData();
}


{
       /*  <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> */
}

async function getData() {
  const data = await doNetworkCall();
  showProducts(data);
}

function showProducts(data){
    data.map((ele) => printCards(ele));
}

function addCart(ele){
    console.log("Add to cart called",ele.id);
    cart.push(ele);
    cart1.innerText="";
    showCart(cart);
}

function showCart(cart){
  cart.map((ele)=>printCart(ele));
}

function RemoveCart(ele){
  cart.splice(cart.indexOf(ele),1);
  cart1.innerText="";
  showCart(cart);
}

// document.createElement("h1");, document.createElement("a");

function printCards(ele){
    const div = document.createElement("div");
    div.className="card h-100";
    div.style="width: 290px; margin-left:48px; padding:25px; display:flex;text-align:center;";
    const img = document.createElement("img");
    img.src=ele.image;
    img.className="card-img-top";
    img.alt=ele.title;
    img.style="height: 270px;"
    div.appendChild(img);
    const div2=document.createElement("div");
    div2.className="card-body";
    div2.style='float:bottom'
    const h5=document.createElement("h5");
    h5.className="card-title";
    h5.innerText=ele.title;
    const p=document.createElement('p');
    p.className="card-text";
    p.innerText='$'+ele.price;
    const button=document.createElement("button");
    button.className="btn btn-primary";
    button.innerText="Add to Cart";
    button.addEventListener("click",()=>addCart(ele))
    div.appendChild(div2);
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(button);

    // create div for each card
    const col=document.createElement('div');
    col.className="col-3";
    col.style="margin-bottom:20px;position:relative"

    // assign child to each div
    col.appendChild(div);
    row.appendChild(col);
}


function printCart(ele){
    const div = document.createElement("div");
    div.className="card";
    div.style="width: 290px; margin:20px; padding:25px; display:flex;";
    const img = document.createElement("img");
    img.src=ele.image;
    img.className="card-img-top";
    img.alt=ele.title;
    img.style="height: 270px;"
    div.appendChild(img);
    const div2=document.createElement("div");
    div2.className="card-body";
    const h5=document.createElement("h5");
    h5.className="card-title";
    h5.innerText=ele.title;
    const p=document.createElement('p');
    p.className="card-text";
    p.innerText=ele.price;
    const button=document.createElement("button");
    button.className="btn btn-primary";
    button.innerText="Remove";
    button.addEventListener("click",()=>(RemoveCart(ele)))
    div.appendChild(div2);
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(button);

    // create div for each card
    const col=document.createElement('div');
    col.className="col-2";

    // assign child to each div
    col.appendChild(div);
    cart1.appendChild(col);
}