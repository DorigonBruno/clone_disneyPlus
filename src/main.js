document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  for (let i = 0; i < buttons.length; i++) {
    const buttonArray = buttons[i];

    buttonArray.addEventListener("click", (e) => {
      const target = e.target.dataset.tabButton;
      const buttonTarget = document.querySelector(`[data-tab-id=${target}]`);

      hideLists();

      buttonTarget.classList.add("shows__list--is-active");

      removeActiveButton();

      e.target.classList.add("shows__tabs__button--is-active");
    });
  }

  for (let i = 0; i < questions.length; i++) {
    const questionsArray = questions[i];

    questionsArray.addEventListener("click", (element) => {
      const classe = "faq__questions__item--is--open";
      const elementoPai = element.target.parentNode;

      elementoPai.classList.toggle(classe);
    });
  }
});

function hideLists() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}

function removeActiveButton() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}
