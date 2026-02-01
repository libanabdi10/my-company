const carSelect = document.getElementById("carSelect");
const carInfo = document.getElementById("carInfo");
const submitBtn = document.getElementById("submitBtn");
const phone = document.getElementById("phone");
// fullname.addEventListener("input",(event)=>{
//     fullnameText=event.target.value
//     if(fullnameText.length>=3 && fullnameText.length<=15){
//         fullname.style.border="3px solid green"
//     }else{
//         fullname.style.border="3px solid red"
//     }
//     if(/[0-9]/.test(fullnameText)){
//         fullname.style.border="4px solid orange"
//     }
// })

  // Cars Data
  const cars = {
    lamborghini: { price: "$900,000", image: "lamborghini aventador.jpg" },
    dodge: { price: "$100,000", image: "Dodge Challenger SRT Super Stock .jpg" },
    ferrari: { price: "$200,000", image: "Ferrari F40.jpg" },
    rolls: { price: "$350,000", image: "Rolls-Royce .jpg" },
    mclaren: { price: "$200,000", image: "mcLaren.jpg" },
    landcruiser: { price: "$57,200", image: "land-cruiser.jpg" }
  };

  // Show Car Info on Select
  carSelect.addEventListener("change", function () {
    const selectedCar = carSelect.value;
    if (selectedCar === "") {
      carInfo.innerHTML = "";
      return;
    }
    carInfo.innerHTML = `
      <img src="${cars[selectedCar].image}">
      <div class="price">Qiimaha: ${cars[selectedCar].price}</div>
    `;
  });

  // Submit Validation
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const selectedCar = carSelect.value;

    if (!fullname || !email || !phone || !selectedCar) {
      alert("Fadlan buuxi dhammaan fields-ka iyo dooro baabuur.");
      return;
    }

    alert(`Waad ku mahadsan tahay ${name}! Waxaad dooratay ${carSelect.options[carSelect.selectedIndex].text}.`);
  });






//get all elements
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const phoneNumber = document.getElementById("phoneNumber");
const age = document.getElementById("age");
const password = document.getElementById("password");
const button = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// fullname.addEventListener("input", (event) => {
//   fullnameText = event.target.value;
//   // console.log(fullnameText)
//   if (fullnameText.length >= 3 && fullnameText.length <= 15) {
//     fullname.style.border = "4px solid green";
//   } else {
//     fullname.style.border = "3px solid red";
//   }
//   if (/[1-9]/.test(fullnameText)) {
//     fullname.style.border = "4px solid red";
//   }
// });

// phoneNumber.addEventListener("input", (event) => {
//   phone = event.target.value;
//   if (phone.length >= 9 && phone.length <= 12) {
//     phoneNumber.style.border = "4px solid green";
//     if (phone > 252610000000 && phone < 252619999999) {
//       phoneNumber.style.border = "4px solid green";
//     } else phoneNumber.style.border = "4px solid red";
//   } else {
//     phoneNumber.style.border = "4px solid red";
//   }
// });

age.addEventListener("input", (event) => {
  userAge = event.target.value;
  if (userAge >= 15 && userAge <= 100) {
    age.style.border = "4px solid green";
  } else {
    age.style.border = "4px solid red";
  }
});

password.addEventListener("input", (event) => {
  passText = event.target.value;
  validate = validatePassword(passText);
  console.log(validate);
  if(validate.length==0){
    password.style.border="4px solid green"
  }else{
    password.style.border="4px solid red"
  }
});

function validatePassword(password) {
  if (password.length < 8) {
    return "password must be atleast 8 chars";
  }
  if (!/[A-Z]/.test(password)) {
    return "password must contain atleast 1 capital leter";
  }
  if (!/[a-z]/.test(password)) {
    return "password must contain atleast 1 lower letter";
  }
  if (!/[1-9]/.test(password)) {
    return "password must contain atleast 1 digit";
  }
  if(!/[^A-Za-z0-9]/.test(password)){
    return "must contain atleast one special char"
  }
  return "";
}


fullname.addEventListener("input",(event)=>{
    fullnameText=event.target.value
    if(fullnameText.length>=3 && fullnameText.length<=15){
        fullname.style.border="3px solid green"
    }else{
        fullname.style.border="3px solid red"
    }
    if(/[0-9]/.test(fullnameText)){
        fullname.style.border="4px solid orange"
    }
})

phoneNumber.addEventListener("input",(event)=>{
    phone=event.target.value;
    if(phone.length>9 && phone.length<=12){
        phoneNumber.style.border="3px solid green"
        if(phone <= 252613254711 && phone >= 252613254711){
            phoneNumber.style.border="3px solid green"
        }else{
            phoneNumber.style.border="3px solid red"
        }
    }else{
        phoneNumber.style.border="3px solid red"
    }
})








//  const carSelect = document.getElementById("carSelect");
//  const carInfo = document.getElementById("carInfo");

//   // Cars Data (MAGACYADA AAD BIXISAY)
//   const cars = {
//     lamborghini: {
//       price: "$500,000",
//       image: "https://via.placeholder.com/400x250?text=Lamborghini+Aventador"
//     },
//     dodge: {
//       price: "$90,000",
//       image: "https://via.placeholder.com/400x250?text=Dodge+Challenger+SRT"
//     },
//     ferrari: {
//       price: "$1,300,000",
//       image: "https://via.placeholder.com/400x250?text=Ferrari+F40"
//     },
//     rolls: {
//       price: "$450,000",
//       image: "https://via.placeholder.com/400x250?text=Rolls-Royce"
//     },
//     mclaren: {
//       price: "$300,000",
//       image: "https://via.placeholder.com/400x250?text=McLaren"
//     },
//     landcruiser: {
//       price: "$80,000",
//       image: "https://via.placeholder.com/400x250?text=Land+Cruiser"
//     }
//   };

//   // Event
//   carSelect.addEventListener("change", function () {
//     const selectedCar = carSelect.value;

//     if (selectedCar === "") {
//       carInfo.innerHTML = "";
//       return;
//     }

//     carInfo.innerHTML = `
//       <img src="${cars[selectedCar].image}">
//       <div class="price">Qiimaha: ${cars[selectedCar].price}</div>
//     `;
//   });

