
let date = new Date().toLocaleString("en-US", {timeZone: 'Asia/Kolkata'});
date= new Date(date)
let currdate=date.toString().slice(0,21)
console.log(currdate);

var deletekey = 0;
function adduser() {
  
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var country = document.getElementById("country").value;
var score = +document.getElementById("score").value;

  let para = document.getElementById("para");

  var table = document.getElementById("table");


   if(fname==""||lname==""||country==""||score==""){
      para.innerHTML = ""
      para.innerHTML = "All fields are required*"
      para.style.fontSize="1.1rem"
      para.style.color="red"
      para.style.fontWeight="bold"
   }
   else{
    para.innerHTML = "";
  console.log("clicked");
//   const details = {
//     fullname: "",
//     country: "",
//     score: "",
//   };



//   details.fullname = fname + " " + lname;
//   details.country = country;
//   details.score = score;

//   objectdeatils.push(details);
//   console.log(objectdeatils);

//   objectdeatils.map((ele) => {
    table.innerHTML += `
        <div class="tr" id="tr${deletekey}">
        <div class="td" id="full">${(fname + " " + lname).toUpperCase()} <p> ${currdate}</p></div>
        <div class="td" id="coun">${country.toUpperCase()}</div>
        <div class="td" id="scr${deletekey}">${score}</div>
        <div class="btn">
        <button style="color:#cb4238" id="del${deletekey}"onclick="deleteuser(${deletekey})"><i class="fa fa-trash-can" aria-hidden="true"></i>
        </button>
       <button id="plus5" onclick="plusfive(${deletekey})">+5</button>
       <button id="minus5" onclick="subfive(${deletekey})">-5</button>
       </div>

        </div>`;
        console.log(deletekey);

        deletekey = deletekey + 1;

//   });

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("country").value = "";
  document.getElementById("score").value = "";
}

}



function deleteuser(deletekey) {
  var trdel = document.getElementById(`tr${deletekey}`);
  trdel.remove()
  


//   let arr=[{name:"Swati", age:'20'}, {name:'Priya', age:'21'}, {name:'tannu', age:'19'}];
        // console.log(objectdeatils);
        // let idx=1
        // objectdeatils=objectdeatils.slice(0,deletekey).concat(objectdeatils.slice(deletekey+1,objectdeatils.length))
        // console.log(objectdeatils)

   

}

function plusfive(deletekey){
  var addfive = document.getElementById(`scr${deletekey}`);

  console.log("plus5")
  
  addfive.innerHTML= +addfive.innerHTML+5



}

function subfive(deletekey){
  var subfive = document.getElementById(`scr${deletekey}`);

  console.log("sub")
  
  subfive.innerHTML= +subfive.innerHTML-5



}