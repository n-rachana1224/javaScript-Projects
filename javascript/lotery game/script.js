    const gifts = [
      "₹100 Cash 💵",
      "Chocolate Box 🍫",
      "Lamp 🪔",
      "Sun Glasses 👓",
      "Book 📙",
      "Headphones 🎧",
      "T-Shirt 👕",
      "Gift Card 🎁",
      "Coffee Mug ☕",
      "Backpack 🎒",
      "Mobile Cover 📱",
      "Keychain 🔑",
      "Smartwatch ⌚",
      "Shoes 👟",
      "Perfume 🌸",
      "Pen Set ✒️",
      "Water Bottle 🍼",
      "Power Bank 🔋",
      "Earbuds 🎶",
      "Notebook 📓",
      "Wallet 👛",
      "Camera 📷",
      "Board Game 🎲",
      "Toy Car 🚗",
      "Umbrella ☂️",
      "Scarf 🧣",
      "Cap 🧢",
      "Watch ⌚",
      "Plant 🌱",
      "Action Figure 🤖",
      "Tablet 💻",
      "Sneakers 👞",
      "Sunglasses 😎",
      "Gift Hamper 🧺",
      "Puzzle 🧩",
      "Mouse 🖱️",
      "Keyboard ⌨️",
      "Earphones 🎧",
      "Handbag 👜",
      "Ring 💍",
      "Bracelet 📿",
      "Necklace 📿",
      "Cake 🎂",
      "Pizza 🍕",
      "Burger 🍔",
      "Ice Cream 🍨",
      "Movie Ticket 🎬",
      "Concert Ticket 🎟️",
      "Toy 🧸",
      "Candle 🕯️",
      "Speaker 🔊",
      "Gaming Controller 🎮",
      "Trip Voucher ✈️",
      "Gym Bag 🏋️",
      "Cricket Bat 🏏",
      "Football ⚽",
      "Basketball 🏀",
      "Mystery Prize 🎉",
      "Mega Jackpot 🏆",
      "₹750 Cash 💶"
    ];
    const tableBody = document.querySelector("#gift_table tbody");
    let row;
    gifts.forEach((gift, index) => {
        if (index % 5 === 0) {  
    // Start a new row every 5 items
    row = document.createElement("tr");
    tableBody.appendChild(row);
  }
  const cell = document.createElement("td");
  cell.innerHTML = `${index + 1}: ${gift}`;
  row.appendChild(cell);
});
//to generate random number
const numberBtn=document.getElementById("btn");
const resultBtn=document.getElementById("result_num");
const count=new Audio("count.mp3");
const win=new Audio("win.mp3");
numberBtn.addEventListener("click",()=>{
  count.play();
  resultBtn.innerHTML="Please Wait!........";

  setTimeout(function(){
    win.play();

    let randomnumber=Math.floor(Math.random()*gifts.length);
    resultBtn.innerHTML=` Your Number is ${randomnumber} <br>
     You won:${gifts[randomnumber-1]}`;
  },4000)
    
    
     
})



  
