// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//Попап правила

// const modalRules = document.getElementById("popup-rules");
// const btnRules = document.getElementById("rules");
// const closeRules = document.getElementsByClassName("closeRules")[0];

// if (modalRules) {
//   btnRules.onclick = function () {
//     modalRules.style.display = "flex";
//   };

//   closeRules.onclick = function () {
//     modalRules.style.display = "none";
//   };
// }

function showModal(btnSelector, modalSelector, closeSelector) {
  const modal = document.getElementById(modalSelector);
  const btn = document.getElementById(btnSelector);
  const close = document.getElementsByClassName(closeSelector)[0];
  if (modal) {
    btn.addEventListener("click", (e) => {
      if (e.target) {
        e.preventDefault();
      }
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
    close.addEventListener("click", (e) => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
    modal.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }
}

showModal("rules", "popup-rules", "closeRules");
showModal("prize", "popup-prize", "closePrize");

//Настройка "Добавить товар"
const tabsItems = document.querySelectorAll(".tabs-play__items");

if (tabsItems) {
  tabsItems.forEach((el) => {
    const parent = el.closest(".tabs-play__body");

    if (el.children.length === 0) {
      const pagging = parent.querySelector(".pagging");
      const filter = parent.querySelector(".filter-catalog");

      parent.querySelector(".mising-products").style.display = `flex`;

      if (pagging) {
        pagging.style.display = `none`;
      }

      if (filter) {
        filter.style.display = `none`;
      }
    }
  });
}
