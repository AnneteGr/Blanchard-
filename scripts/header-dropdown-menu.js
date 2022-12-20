document.addEventListener('DOMContentLoaded', function(){
  // реализация dropdown меню
  const params = {
    btnClassName: "js-header-dropdown-btn", // кнопки меню
    dropClassName: "js-header-drop", // само dropdown меню
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  // корректная реализация rotate еффекта для стрелок нижнего меню при клики
  function delRotate(e) {
    document.body.addEventListener('click', ()=> {
      if (!e.classList.contains('is-active')){
        e.classList.remove('rotate');
      };
    });
  };

  // функция разворота меню и стрелок
  function rotateFunc() {
    let headerMenuActiveEffect = document.querySelectorAll('.item__btn');

    for (let btn of headerMenuActiveEffect) {
      btn.addEventListener('click', ()=>{
        btn.classList.add('rotate');
        delRotate(btn);
      });

    };
  };

  function setMenuListener() {
    rotateFunc();
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  };

  setMenuListener();
});
