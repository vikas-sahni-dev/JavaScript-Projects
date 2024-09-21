//in this better approach i am only using one set interval,earlier i was using three set intervals


//dateDropdown is not that good,it can be dateOptionsSelectElement 
const dateDropdown = document.querySelector(".container select");
const showDateElement = document.querySelector(".showDate");
let activeInterval;

function getDateData() {
  //variable name should be date not dateObj
  const dateObj = new Date();
  return {
    date: dateObj.getDate(),
    month: dateObj.getMonth() + 1,
    year: dateObj.getFullYear(),
    hours: dateObj.getHours(),
    minutes: dateObj.getMinutes(),
    seconds: dateObj.getSeconds(),
  };
}

function formatDate(format) {
  const { year, month, date, hours, minutes, seconds } = getDateData();
  if (format === "dd-mm-yyyy") {
    return `${date}-${month}-${year}`;
  } else if (format === "yyyy-mm-dd") {
    return `${year}-${month}-${date}`;
  } else {
    return `${month}-${date}-${year} ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }
}

function updateDate() {
  showDateElement.innerText = formatDate(dateDropdown.value);
}

function startUpdating() {
  if (activeInterval) clearInterval(activeInterval);
  updateDate();
  activeInterval = setInterval(updateDate, 1000);
}

dateDropdown.addEventListener("change", () => {
  startUpdating(dateDropdown.value);
});

startUpdating(dateDropdown.value);

//const dateDropdown = document.querySelector(".container select");
// const showDateElement = document.querySelector(".showDate");
// const allIdsOfSetInterval = [];
// let index = -1;

// function getDateData() {
//     const dateObj = new Date();
//     return {
//         date: dateObj.getDate(),
//         month: dateObj.getMonth() + 1,
//         year: dateObj.getFullYear(),
//         hours: dateObj.getHours(),
//         minutes: dateObj.getMinutes(),
//         seconds: dateObj.getSeconds(),
//     };
// }

// function clearAllInterval(allInterval) {
//     for (const interval of allInterval) {
//         console.log(interval);

//         clearInterval(interval);
//     }
// }

// function showDate(dateFormat) {
//     clearAllInterval(allIdsOfSetInterval);
//     if (dateFormat === "dd-mm-yyyy") {
//         const id1 = setInterval(() => {
//             const {
//                 date,
//                 month,
//                 year
//             } = getDateData();
//             showDateElement.innerText = `${date}-${month}-${year}`;
//         }, 1000);
//         allIdsOfSetInterval[++index] = id1;
//     } else if (dateFormat === "yyyy-mm-dd") {
//         const id2 = setInterval(() => {
//             console.log(2);
//             const {
//                 year,
//                 month,
//                 date
//             } = getDateData();
//             showDateElement.innerText = `${year}-${month}-${date}`;
//         }, 1000);
//         allIdsOfSetInterval[++index] = id2;
//     } else {
//         const id3 = setInterval(() => {
//             console.log(3);

//             const {
//                 year,
//                 month,
//                 date,
//                 hours,
//                 minutes,
//                 seconds
//             } = getDateData()
//             showDateElement.innerText = `${month}-${date}-${year} ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
//         }, 1000);
//         allIdsOfSetInterval[++index] = id3;
//     }
// }

// dateDropdown.addEventListener("change", () => {
//     showDate(dateDropdown.value);
// });

// showDate(dateDropdown.value);
