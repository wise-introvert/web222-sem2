const body = document.body;

const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains("dark");

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

btnTheme.addEventListener("click", toggleTheme);

const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};

btnHamburger.addEventListener("click", displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let values = {};
  Object.keys(event.target.elements).map((key) => {
    if (isNaN(key)) {
      values[key] = event.target.elements[key].value;
    }
  });

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      alert("Contact information successfully submitted!");
    })
    .catch((err) => {
      alert(`Oops!\nSomething went wrong. Please try again after some time.`);
    });
});

document.getElementById("question").addEventListener("change", () => {
  document.getElementById("rate").style = "display: none;";
});

document.getElementById("comment").addEventListener("change", () => {
  document.getElementById("rate").style = "display: none;";
});

document.getElementById("hiring").addEventListener("change", () => {
  document.getElementById("rate").style = "display: grid;";
});

document.addEventListener("scroll", scrollUp);
