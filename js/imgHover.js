export function imgHover() {
  const registerIcon = document.querySelector(".register__login-icon");
  const registerLogin = document.querySelector(".register__login");
  const originalSrc = registerIcon.src;

  const registerAddList = document.querySelector('.register__addList');

  const registerAddListIcon = document.querySelector('.register__addList-icon');

const originalSrcAddList  = registerAddListIcon.src;

registerAddList.addEventListener("mouseenter", () => {
    registerAddListIcon.src = "../image/icon/home.png";
  });

  registerAddList.addEventListener("mouseleave", () => {
    registerAddListIcon.src = originalSrcAddList;
  });

  registerLogin.addEventListener("mouseenter", () => {
    registerIcon.src = "../image/icon/loginIconHover.svg";
  });

  registerLogin.addEventListener("mouseleave", () => {
    registerIcon.src = originalSrc;
  });
}
