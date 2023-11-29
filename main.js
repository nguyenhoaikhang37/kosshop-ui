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
