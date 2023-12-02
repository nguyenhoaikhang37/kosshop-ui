/**
 * JS toggle
 *
 * How to use:
 * <button class="js-toggle" toggle-target="#box">Click</button>
 * <div id="box">Content show/hide</div>
 */
window.addEventListener("DOMContentLoaded", initJsToggle);

function initJsToggle() {
  getEls(".js-toggle").forEach((button) => {
    const target = button.getAttribute("toggle-target");
    if (!target) {
      document.body.innerText = `Cần thêm toggle-target cho: ${button.outerHTML}`;
    }
    button.onclick = () => {
      if (!getEl(target)) {
        return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
      }
      const isHidden = getEl(target).classList.contains("hide");

      requestAnimationFrame(() => {
        getEl(target).classList.toggle("hide", !isHidden);
        getEl(target).classList.toggle("show", isHidden);
      });
    };
  });
}

initJsToggle();

/**
 * Handle logic show/hide category menu
 */
const categoryNavbar = getEl("#category-navbar");

function handleScrollCategoryNavbar() {
  if (window.location.pathname !== "/pages/") {
    return;
  }

  if (window.innerWidth < 1200) {
    return;
  }

  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 50) {
    categoryNavbar.style.display = "none";
  } else {
    categoryNavbar.style.display = "block";
  }
}

window.addEventListener("DOMContentLoaded", handleScrollCategoryNavbar);

window.onscroll = handleScrollCategoryNavbar;

/**
 * Handle logic show/hide mega menu
 */

// Get all elements with the class 'the-li'
const liItems = document.querySelectorAll(".mega-menu-item");

// Get the element with the class 'mega-menu'
const megaMenu = document.querySelector(".mega-menu");

// Add hover event listeners to each 'the-li' element
liItems.forEach((li) => {
  li.addEventListener("mouseover", function () {
    // Check if the 'the-li' element has a 'fa-chevron-right' icon
    // If it does, display the 'mega-menu' element
    if (li.querySelector(".fa-chevron-right")) {
      megaMenu.style.display = "block";
    }
  });

  li.addEventListener("mouseout", function () {
    megaMenu.style.display = "none";
  });
});

/**
 * Handle logic hover image products
 */
window.addEventListener("DOMContentLoaded", () => {
  const productItems = getEls(".product-item");

  if (!productItems) return;

  productItems.forEach((productItem) => {
    const smallImageElements = productItem.querySelectorAll(".small-image");

    const bigImageElement = productItem.querySelector(".big-image");

    smallImageElements.forEach((smallImage) => {
      smallImage.addEventListener("mouseover", function () {
        smallImageElements.forEach((smallImage) => {
          smallImage.classList.remove("border-primary");
          smallImage.classList.remove("border-greyLight");
        });

        smallImage.classList.add("border-primary");
        smallImage.classList.remove("border-greyLight");

        const imageUrl = smallImage.querySelector("img").src;
        bigImageElement.src = imageUrl;
      });
    });
  });
});

/**
 * Handle toggle blur content
 */
window.addEventListener("DOMContentLoaded", () => {
  // Get the button and content elements
  const toggleButtons = getEls(".toggleButton");

  if (!toggleButtons) return;

  // Add a click event to the button

  toggleButtons.forEach((toggleButton) => {
    if (!toggleButton) return;

    toggleButton.addEventListener("click", function () {
      const isHidden = toggleButton.querySelector("span").textContent === "Xem tất cả";

      toggleButton.querySelector("span").textContent = isHidden ? "Thu gọn" : "Xem tất cả";

      // Change the button icon based on the state of #detail-content
      const icon = isHidden ? "fa-chevron-up" : "fa-chevron-down";
      toggleButton.querySelector("i").classList = `text-sm fa-solid ${icon}`;
    });
  });
});

/**
 * Handle dialog gallery
 */
window.addEventListener("DOMContentLoaded", () => {
  // Get the modal
  const modal = getEl("#gallery-dialog");

  // Get the button that opens the modal
  const btn = getEl("#gallery-button");

  // Get the <span> element that closes the modal
  const closeBtns = getEls(".js-gallery-close");

  if (!modal || !btn || !closeBtns) return;

  // When the user clicks the button, open the modal
  console.log("✅ ~ btn:::", btn);
  btn.onclick = function () {
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
  };

  // When the user clicks on <span> (x), close the modal
  closeBtns.forEach((closeBtn) => {
    closeBtn.onclick = function () {
      modal.style.opacity = 0;
      modal.style.visibility = "hidden";
    };
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.opacity = 0;
      modal.style.visibility = "hidden";
    }
  };
});

/**
 * Handle dialog specifications
 */
window.addEventListener("DOMContentLoaded", () => {
  // Get the modal
  const modal = getEl("#specifications-dialog");

  // Get the button that opens the modal
  const btn = getEl("#specifications-button");

  // Get the <span> element that closes the modal
  const closeBtns = getEls(".js-specifications-close");

  if (!modal || !btn || !closeBtns) return;

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
  };

  // When the user clicks on <span> (x), close the modal
  closeBtns.forEach((closeBtn) => {
    closeBtn.onclick = function () {
      modal.style.opacity = 0;
      modal.style.visibility = "hidden";
    };
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.opacity = 0;
      modal.style.visibility = "hidden";
    }
  };
});
