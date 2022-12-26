("use strict");
const carBrand = [
  "Apollo",
  "Arash",
  "Ariel",
  "ARO",
  "Arrival",
  "Arrinera",
  "Artega",
  "Chrysler",
  "Dacia",
  "Daewoo",
  "DAF",
  "Daihatsu",
  "Datsun",
  "Delage",
  "Diatto",
  "Dodge",
  "Drako",
  "Haval",
  "Hillman",
  "Hindustan",
  "Higer",
  "Honda",
  "Hongyan",
  "Hudson",
  "Hummer",
  "Hyundai",
  "Lifan",
  "Lincoln",
  "Maserati",
  "Maybach",
  "Mazda",
  "MCLaren",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nikola",
  "Nissan",
  "Opel",
  "Pagani",
  "Peugeot",
  "Polestar",
  "Porsche",
  "Range Rover",
  "Ravon",
  "Renault",
  "Rivian",
  "Rolls-Royce",
  "Saab",
  "Seat",
  "Skoda",
  "Smart",
  "SsangYong",
  "Subaru",
  "Suzuki",
  "Tata",
  "Tesla",
  "Toyota",
  "VinFast",
  "Volkswagen",
  "Volvo",
  "Zotye",
];

const carModal = [
  "Durango",
  "Ram",
  "Challenger",
  "Charger",
  "Grand Caravan",
  "X7",
  "X5",
  "X3",
  "X6 M",
  "X6",
  "X1",
  "X4",
  "C3 Aircross",
  "C5 Aircross",
  "Duster",
  "CR-V",
  "Corolla",
  "C4 Cactus",
  "DS3 Crossback",
  "C1",
  "C3",
  "Berlingo Multispace",
  "DS4 Crossback",
  "UX 250h",
  "NX 300h",
  "LC 500",
  "RX 350/200t",
  "Rapid",
  "Largus",
  "IS 200t",
  "LS 500h",
  "RX",
  "ES 200/250/350",
  "Hatchback",
  "CX-5",
  "Sedan",
  "CX-30",
  "CX-9",
  "CX-3",
  "CX-4",
  "CX-5",
  "MX-5",
  "Roadster",
  "Phantom",
  "Camry",
  "Polo",
  "Cullinan",
  "Ghost",
  "Dawn",
  "Duster",
  "Arkana",
  "Sandero",
  "Logan",
  "Trafic Fourgon",
  "Logan MCV",
  "Captur",
  "Kadjar",
  "RAV4",
  "Rio",
  "Creta",
  "Solaris",
];
const base = "http://127.0.0.1:3000";

const basePath = {
  garage: "/garage",
  engine: "/engine",
  winners: "/winners",
};

const createQruery = (queryParameters = []) =>
  queryParameters.length
    ? `?${queryParameters.map((item) => `${item.key}=${item.value}`).join("&")}`
    : "";
const getCars = async function (queryParameters) {
  try {
    const response = await fetch(
      `${base}${basePath.garage}${createQruery(queryParameters)}`
    );
    const cars = await response.json();
    return cars;
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
  console.log(cars);
};

//  TODO --------------------------------------------UI-FRAGMENT----------------------------------
const header = `
<div class="wrapper">
  <div class="header_wrapper">
    <div class="box">
      <span></span>
      <h1 >Async Race</h1>
    </div>
  
    <div class="switch">
      <button class="header_btn to_garage_btn">to garage</button>
      <button class="header_btn to_winners_btn">to winners</button>
    </div>
  </div>
</div>
`;

const html = `
<div class="wrapper">
<div class="main_wrapper">
 <section class="garage">
<div class="garage_settings">
    <div class="garage_settings_row create_set">
      <div class="input_block">
        <input type="text" class="create_input" placeholder="Create car...">
        <input type="color" class="create_color" value="#ffba08"></div>
        <button class="identic_btn create_btn">Create</button>
    </div>
    <div class="garage_settings_row change_set">
      <div class="input_block">
        <input type="text" class="update_input" placeholder="Update car...">
        <input type="color" class="update_color" value="#000000"></div>
        <button class="identic_btn update_btn">Update</button>
    </div>
    <div class="garage_settings_row">
        <button class="identic_btn race_btn">Race</button>
        <button class="identic_btn reset_btn">Reset</button>
        <button class="identic_btn generate_btn">Generate cars</button>
    </div>
</div>
<div class="garage_wrapper">
    <h2 class="garage_counter">Garage</h2>
    <h3 class="garage_page">Page <span>&#8470 </span>1</h3>
    <div class="car_section">
        
    </div>
    <div class="garage_pagination">
        <button class="identic_btn pagination_btn garage_page_prev" disabled>Previous</button>
        <span class="garage_page_current">1</span>
        <span>/</span>
        <span class="page_total">1</span>
        <button class="identic_btn pagination_btn garage_page_next">Next</button>
    </div>
</div>
</section> 
<section class="winners invisible">
<div class="winners_wrapper">
    <h2>Winners</h2>
    <h3 class="winners_page">Page <span>&#8470 </span> 1</h3>
    <table class = 'winners_section'>
    <thead>
        <tr class="winners_table_head">
            <th>&#8470</td>
            <th>Car</td>
            <th>Name</td>
            <th>Wins</td>
            <th>Best time (sec.)</td>
        </tr>
        </thead>
        <tbody>
        <th>-</td>
        <th>-</td>
        <th>-</td>
        <th>-</td>
        <th>-</td>
        </tbody>
    </table>
    <div class="winners_pagination">
        <button class="identic_btn pagination_btn winners_page_prev">Previous</button>
        <span class="winners_page_current">1</span>
        <span>/</span>
        <span class="winners_page_total">1</span>
        <button class="identic_btn pagination_btn winners_page_next">Next</button>
    </div>
</div>
</section>

</div>
</div>

`;

const headerRoot = document.createElement("header");
headerRoot.innerHTML = header;
document.body.appendChild(headerRoot);

const mainRoot = document.createElement("main");
mainRoot.innerHTML = html;
document.body.appendChild(mainRoot);

//  TODO --------------------------------------------UI-FRAGMENT------END----------------------------

// !----------------------------------PAGE-SWITCHER-------------
const toGarageBTN = document.querySelector(".to_garage_btn");
const pageGarage = document.querySelector(".garage");
const toWinnerBTN = document.querySelector(".to_winners_btn");
const pageWinner = document.querySelector(".winners");
toGarageBTN.addEventListener("click", () => {
  pageWinner.classList.add("invisible");
  pageGarage.classList.remove("invisible");
});
toWinnerBTN.addEventListener("click", () => {
  pageGarage.classList.add("invisible");
  pageWinner.classList.remove("invisible");
});

// !----------------------------------CREATOR-CAR--------------
const carCreator = function (carName, carColor, carID) {
  const carItemHTML = document.createElement("div");
  carItemHTML.className = "car";
  carItemHTML.id = `${carID}`;
  carItemHTML.innerHTML = `
                                <div class="car_settings">
                                    <button class="identic_btn car_btn select" id="${carID}-SELECT">SELECT</button>
                                    <button class="identic_btn car_btn" id="${carID}-REMOVE">X</button>
                                    <a class="car_name" id="${carID}-NAME">${carName}</a>
                                </div>
                                <div class="car_road">
                                    <div class="car_road_top">
                                        <div class="car_road_buttons">
                                            <button class="drive_btn" id="${carID}-START"><img width="15"
                                            src="./assets/play.png"
                                            alt="play"></button>
                                            <button class="drive_btn" id="${carID}-BACK" disabled><img width="15"
                                            src="./assets/stop.png"
                                            alt="stop"></button>
                                        </div>

                                        <svg class="car_img" fill="${carColor}" id="${carID}-IMAGE" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                                        <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M1736.5,2103c-318.2-12.5-608.3-40.5-648.8-56.1c-196.5-84.2-377.4-876.5-427.3-1877.8l-21.8-399.3H485.6h-156L339-486l9.4-258.9l140.4-65.5c78-37.4,268.3-102.9,427.3-146.6l287-78l93.6,393C1402.7-208.3,1490-43,1670.9,63c102.9,59.3,121.6,59.3,720.6,15.6c564.6-40.5,623.9-53,729.9-121.6c196.5-134.1,265.1-268.3,340-667.5l65.5-361.8h1784.2h1781.1l102.9,389.9c102.9,393,168.5,517.8,324.4,642.5c102.9,81.1,124.8,81.1,761.1,46.8C8701.7-15,8807.8-30.6,8917-86.7c221.5-112.3,299.4-243.3,374.3-627l65.5-336.9l215.2,18.7c115.4,9.3,224.6,24.9,240.2,34.3c15.6,12.5,46.8,118.6,68.6,237.1c43.7,246.4,12.5,374.3-90.4,374.3c-53,0-62.4,31.2-74.9,258.9c-28.1,446.1-165.3,655.1-464.8,708.1c-240.2,43.7-1185.3,143.5-1899.6,202.8c-489.7,40.5-614.5,62.4-648.8,102.9c-21.8,28.1-106.1,159.1-190.3,287c-162.2,252.7-377.4,508.4-589.5,698.7l-134.1,121.7l-411.7,40.5C4328.6,2137.3,2987.3,2162.3,1736.5,2103z M3473.9,1841c65.5-12.5,65.5-15.6-65.5-411.7l-134.1-396.2l-168.4-9.4c-93.6-3.1-439.8,3.1-773.6,15.6l-605.1,24.9l-90.5,112.3l-87.3,109.2l78,218.3c43.7,118.5,96.7,255.8,115.4,302.6l34.3,87.3l814.1-18.7C3040.3,1866,3436.4,1850.4,3473.9,1841z M6047.3,1301.4c149.7-249.5,271.4-455.4,265.1-458.5c-3.1-3.1-427.3,12.5-942,37.4c-514.7,21.8-960.7,40.5-991.9,43.7c-49.9,0-53,24.9-37.4,258.9c9.4,140.4,24.9,330.6,34.3,421.1l15.6,162.2l692.5-6.2l689.4-9.4L6047.3,1301.4z M9515.9,300.1c21.8-15.6,56.1-87.3,78-159.1c21.8-71.7,46.8-146.6,56.1-171.6c12.5-34.3-21.8-43.7-156-43.7h-174.7l-137.2,212.1c-71.7,115.4-143.5,224.6-156,243.3C9001.2,424.9,9459.7,350,9515.9,300.1z"/><path d="M245.5,1136c-15.6-21.8-56.2-109.2-84.2-196.5C98.8,771.1,80.1,253.3,123.8,44.3l25-118.5h184h187.2v321.3c0,287,31.2,605.2,81.1,842.2c18.7,84.2,15.6,84.2-152.8,84.2C348.4,1173.5,264.2,1157.9,245.5,1136z"/><path d="M1674.1-155.3c-115.4-109.2-140.4-159.1-221.5-446c-49.9-180.9-90.5-343.1-90.5-368.1c0-74.9,62.4-40.5,81.1,46.8c78,340,433.6,636.3,817.2,683.1c414.9,46.8,864-268.3,976.3-683.1c15.6-65.5,43.7-118.5,59.3-118.5c40.5,0,40.5-12.5-18.7,318.2c-56.1,302.5-127.9,436.7-283.9,542.7c-102.9,68.6-118.5,71.7-904.6,124.8l-283.8,18.7L1674.1-155.3z"/><path d="M7625.6-158.4c-143.5-99.8-202.7-202.8-287-511.6c-90.4-333.7-93.6-371.2-49.9-371.2c18.7,0,31.2,25,31.2,56.1c3.1,99.8,127.9,333.8,243.3,452.3c502.2,520.9,1353.8,315,1553.4-374.3c25-90.5,62.4-165.3,78-165.3c18.7,0,25,25,15.6,56.1c-6.2,28.1-31.2,156-53,283.8c-43.7,252.7-118.6,386.8-268.3,489.7c-112.3,74.9-240.2,96.7-789.2,121.7C7753.5-102.3,7700.5-108.6,7625.6-158.4z"/><path d="M2029.7-476.6c-174.7-78-343.1-262-399.3-433.6c-96.7-277.6-46.8-520.9,149.7-745.5c159.1-180.9,324.4-255.8,561.5-258.9c227.7,0,408.6,81.1,561.5,249.5c99.8,109.2,205.9,368.1,205.9,499.1c0,28-21.8,124.8-49.9,215.2c-56.1,193.4-215.2,380.6-399.3,467.9C2488.2-398.6,2207.5-395.5,2029.7-476.6z M2578.7-698.1c171.6-87.3,258.9-224.6,274.5-433.6c31.2-486.6-514.7-745.5-864-414.9C1546.2-1125.4,2035.9-420.5,2578.7-698.1z"/><path d="M7878.3-504.7c-533.4-274.5-533.4-1048.1,0-1322.6c393-205.9,885.8-28.1,1054.3,374.3c68.6,162.2,56.1,452.3-21.8,614.5C8726.7-454.8,8258.8-305.1,7878.3-504.7z M8474-704.3c439.8-221.5,336.9-889-146.6-979.5c-165.3-31.2-315,15.6-449.2,134.2c-215.2,193.4-237.1,505.3-49.9,717.4C8009.3-626.3,8233.8-582.7,8474-704.3z"/></g></g>
                                        </svg>
                                        <img class="flag_img" src="./assets/flag-finish.svg" alt="finish">
                                    </div>
                                    <hr>
                                </div>`;
  document.querySelector(".car_section").append(carItemHTML);
  /////////////////////////////////////////////////////////////////////
  const forRemove = document.getElementById(`${carID}-REMOVE`);
  forRemove.addEventListener("click", () => removeCarFunc(carID));
  //////////////////////////////////////////////////////////////////////
  const forSelect = document.getElementById(`${carID}-SELECT`);
  forSelect.addEventListener("click", () => updateCarFunc(carID));

  countCar();
};

let currentPage = 1;

const basis = async () => {
  const cars = await getCars([
    { key: "_page", value: currentPage },
    { key: "_limit", value: 7 },
  ]);

  document.querySelectorAll(".car").forEach((el) => el.remove());
  cars.forEach((el) => carCreator(el.name, el.color, el.id));
};

basis();

// !----------------------------------BUTTON-CREATE-NEW-CAR-------------
const createCar = async function (body) {
  try {
    const response = await fetch(`${base}${basePath.garage}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const car = await response.json();
    return car;
  } catch (err) {
    alert(err);
  }
};

const creteCarBTN = document.querySelector(".create_btn");
const creteCarINPUT = document.querySelector(".create_input");
const creteCarCOLOR = document.querySelector(".create_color");

creteCarBTN.addEventListener("click", async () => {
  let carName;
  if (creteCarINPUT.value == "") {
    carName =
      carBrand[Math.floor(Math.random() * 60)] +
      " " +
      carModal[Math.floor(Math.random() * 60)];
  } else carName = creteCarINPUT.value;

  const carColor = creteCarCOLOR.value;
  await createCar({
    name: carName,
    color: carColor,
  });
  basis();
  creteCarINPUT.value = "";
  countCar();
});

// !----------------------------------DELETE-CAR-------------
const deleteCar = async function (id) {
  try {
    const response = await fetch(`${base}${basePath.garage}/${id}`, {
      method: "DELETE",
    });
    const car = await response.json();
    return car;
  } catch (err) {
    alert(err);
  }
};

const removeCarFunc = async function (id) {
  await deleteCar(id);
  document.getElementById(id).remove();
  basis();
};

// !----------------------------------COUNT-CAR-------------

const resultCountCar = async function () {
  try {
    const response = await fetch(
      `${base}${basePath.garage}${createQruery([{ key: "_page", value: "0" }])}`
    );
    const countCar = Number(response.headers.get("X-Total-Count"));
    return countCar;
  } catch (err) {
    alert(err);
  }
};

const garageItemCount = document.querySelector(".garage_counter");
const pageCount = document.querySelector(".page_total");
let totalcountCar = 0;
const countCar = async () => {
  totalcountCar = await resultCountCar();
  garageItemCount.innerHTML = `Garage (${totalcountCar})`;
  pageCount.innerHTML = Math.ceil(totalcountCar / 7);
};

// !----------------------------------100-NEW-CAR-------------
const generateBTN = document.querySelector(".generate_btn");
generateBTN.addEventListener("click", async () => {
  for (let i = 0; i < 100; i++) {
    const carName =
      carBrand[Math.floor(Math.random() * 60)] +
      " " +
      carModal[Math.floor(Math.random() * 60)];

    const carColor = `rgb(${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )}, ${getRandom(0, 255)})`;

    function getRandom(min, max) {
      return Math.ceil(Math.random() * (max - min) + min);
    }
    await createCar({
      name: carName,
      color: carColor,
    });
  }
  basis();
  countCar();
});

// !----------------------------------UPDATE-CAR-------------

const updateCarInput = document.querySelector(".update_input");
const colorCarInput = document.querySelector(".update_color");
const updateCarBTN = document.querySelector(".update_btn");
updateCarBTN.disabled = true;

const getCar = async function (id) {
  try {
    const response = await fetch(`${base}${basePath.garage}/${id}`);
    const car = await response.json();
    return car;
  } catch (err) {
    alert(err);
  }
};

const updateCarFunc = async function (id) {
  const car = await getCar(id);
  const carName = document.getElementById(`${id}-NAME`);
  updateCarBTN.disabled = false;
  updateCarInput.value = car.name;
  colorCarInput.value = car.color;
  carName.classList.add("active");
};

const updateCar = async function (id, body) {
  try {
    const response = await fetch(`${base}${basePath.garage}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const car = await response.json();
    return car;
  } catch (err) {
    alert(err);
  }
};

updateCarBTN.addEventListener("click", async function () {
  const carName = updateCarInput.value;
  const carColor = colorCarInput.value;
  const carToChange = document.querySelector(".active");
  const id = Number(carToChange.id.replace("-NAME", ""));
  await updateCar(id, {
    name: carName,
    color: carColor,
  });
  carModificator(carName, carColor, id);
  updateCarBTN.disabled = true;
  document.getElementById(`${id}-NAME`).classList.remove("active");
  updateCarInput.value = "";
});

function carModificator(carName, carColor, carID) {
  const changingCarName = document.getElementById(`${carID}-NAME`);
  changingCarName.innerHTML = carName;
  const modifyCarImage = document.getElementById(`${carID}-IMAGE`);
  modifyCarImage.innerHTML = `
  <svg class="car_img" fill="${carColor}" id="${carID}-IMAGE" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
  <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
  <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M1736.5,2103c-318.2-12.5-608.3-40.5-648.8-56.1c-196.5-84.2-377.4-876.5-427.3-1877.8l-21.8-399.3H485.6h-156L339-486l9.4-258.9l140.4-65.5c78-37.4,268.3-102.9,427.3-146.6l287-78l93.6,393C1402.7-208.3,1490-43,1670.9,63c102.9,59.3,121.6,59.3,720.6,15.6c564.6-40.5,623.9-53,729.9-121.6c196.5-134.1,265.1-268.3,340-667.5l65.5-361.8h1784.2h1781.1l102.9,389.9c102.9,393,168.5,517.8,324.4,642.5c102.9,81.1,124.8,81.1,761.1,46.8C8701.7-15,8807.8-30.6,8917-86.7c221.5-112.3,299.4-243.3,374.3-627l65.5-336.9l215.2,18.7c115.4,9.3,224.6,24.9,240.2,34.3c15.6,12.5,46.8,118.6,68.6,237.1c43.7,246.4,12.5,374.3-90.4,374.3c-53,0-62.4,31.2-74.9,258.9c-28.1,446.1-165.3,655.1-464.8,708.1c-240.2,43.7-1185.3,143.5-1899.6,202.8c-489.7,40.5-614.5,62.4-648.8,102.9c-21.8,28.1-106.1,159.1-190.3,287c-162.2,252.7-377.4,508.4-589.5,698.7l-134.1,121.7l-411.7,40.5C4328.6,2137.3,2987.3,2162.3,1736.5,2103z M3473.9,1841c65.5-12.5,65.5-15.6-65.5-411.7l-134.1-396.2l-168.4-9.4c-93.6-3.1-439.8,3.1-773.6,15.6l-605.1,24.9l-90.5,112.3l-87.3,109.2l78,218.3c43.7,118.5,96.7,255.8,115.4,302.6l34.3,87.3l814.1-18.7C3040.3,1866,3436.4,1850.4,3473.9,1841z M6047.3,1301.4c149.7-249.5,271.4-455.4,265.1-458.5c-3.1-3.1-427.3,12.5-942,37.4c-514.7,21.8-960.7,40.5-991.9,43.7c-49.9,0-53,24.9-37.4,258.9c9.4,140.4,24.9,330.6,34.3,421.1l15.6,162.2l692.5-6.2l689.4-9.4L6047.3,1301.4z M9515.9,300.1c21.8-15.6,56.1-87.3,78-159.1c21.8-71.7,46.8-146.6,56.1-171.6c12.5-34.3-21.8-43.7-156-43.7h-174.7l-137.2,212.1c-71.7,115.4-143.5,224.6-156,243.3C9001.2,424.9,9459.7,350,9515.9,300.1z"/><path d="M245.5,1136c-15.6-21.8-56.2-109.2-84.2-196.5C98.8,771.1,80.1,253.3,123.8,44.3l25-118.5h184h187.2v321.3c0,287,31.2,605.2,81.1,842.2c18.7,84.2,15.6,84.2-152.8,84.2C348.4,1173.5,264.2,1157.9,245.5,1136z"/><path d="M1674.1-155.3c-115.4-109.2-140.4-159.1-221.5-446c-49.9-180.9-90.5-343.1-90.5-368.1c0-74.9,62.4-40.5,81.1,46.8c78,340,433.6,636.3,817.2,683.1c414.9,46.8,864-268.3,976.3-683.1c15.6-65.5,43.7-118.5,59.3-118.5c40.5,0,40.5-12.5-18.7,318.2c-56.1,302.5-127.9,436.7-283.9,542.7c-102.9,68.6-118.5,71.7-904.6,124.8l-283.8,18.7L1674.1-155.3z"/><path d="M7625.6-158.4c-143.5-99.8-202.7-202.8-287-511.6c-90.4-333.7-93.6-371.2-49.9-371.2c18.7,0,31.2,25,31.2,56.1c3.1,99.8,127.9,333.8,243.3,452.3c502.2,520.9,1353.8,315,1553.4-374.3c25-90.5,62.4-165.3,78-165.3c18.7,0,25,25,15.6,56.1c-6.2,28.1-31.2,156-53,283.8c-43.7,252.7-118.6,386.8-268.3,489.7c-112.3,74.9-240.2,96.7-789.2,121.7C7753.5-102.3,7700.5-108.6,7625.6-158.4z"/><path d="M2029.7-476.6c-174.7-78-343.1-262-399.3-433.6c-96.7-277.6-46.8-520.9,149.7-745.5c159.1-180.9,324.4-255.8,561.5-258.9c227.7,0,408.6,81.1,561.5,249.5c99.8,109.2,205.9,368.1,205.9,499.1c0,28-21.8,124.8-49.9,215.2c-56.1,193.4-215.2,380.6-399.3,467.9C2488.2-398.6,2207.5-395.5,2029.7-476.6z M2578.7-698.1c171.6-87.3,258.9-224.6,274.5-433.6c31.2-486.6-514.7-745.5-864-414.9C1546.2-1125.4,2035.9-420.5,2578.7-698.1z"/><path d="M7878.3-504.7c-533.4-274.5-533.4-1048.1,0-1322.6c393-205.9,885.8-28.1,1054.3,374.3c68.6,162.2,56.1,452.3-21.8,614.5C8726.7-454.8,8258.8-305.1,7878.3-504.7z M8474-704.3c439.8-221.5,336.9-889-146.6-979.5c-165.3-31.2-315,15.6-449.2,134.2c-215.2,193.4-237.1,505.3-49.9,717.4C8009.3-626.3,8233.8-582.7,8474-704.3z"/></g></g>
  </svg>
`;
}

// !----------------------------------GARAGE--PAGINATION-------------

const prevGaragePage = document.querySelector(".garage_page_prev");
const nextGaragePage = document.querySelector(".garage_page_next");
const currentGaragePage = document.querySelector(".garage_page_current");
const numGaragePage = document.querySelector(".garage_page");

nextGaragePage.addEventListener("click", () => {
  currentPage += 1;
  numGaragePage.innerHTML = `Page  &#8470 ${currentPage}`;
  currentGaragePage.innerHTML = currentPage;
  basis();
  btnDesable();
});

prevGaragePage.addEventListener("click", () => {
  currentPage -= 1;
  numGaragePage.innerHTML = `Page  &#8470 ${currentPage}`;
  currentGaragePage.innerHTML = currentPage;
  basis();
  btnDesable();
});
const btnDesable = async function () {
  totalcountCar = await resultCountCar();

  if (currentPage == 1) {
    prevGaragePage.disabled = true;
  } else prevGaragePage.disabled = false;

  if (totalcountCar < 7 || currentPage == Math.ceil(totalcountCar / 7)) {
    nextGaragePage.disabled = true;
  } else nextGaragePage.disabled = false;
};
