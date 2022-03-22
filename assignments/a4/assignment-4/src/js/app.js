/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Fardeen Sohil Panjwani
 *      Student ID: 119588218
 *      Date:       22 Mar, '22
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

let selectedCategory = {};

categories.forEach((category) => {
  const e = document.createElement("button");
  e.innerText = category.name;
  e.setAttribute("style", "margin: 0 .25rem;");
  e.addEventListener("click", () => {
    selectedCategory = category;
    document.getElementById("selected-category").innerText = selectedCategory.name;
    const newTBody = document.createElement("tbody");
    products
      .filter((product) => {
        return product.category.indexOf(selectedCategory.id) >= 0 && !product.discontinued;
      })
      .forEach((product) => {
        const e = document.createElement("tr");
        const name = document.createElement("td");
        name.innerText = product.name;
        const description = document.createElement("td");
        description.innerText = product.description;
        const price = document.createElement("td");
        price.innerText = `$${product.price / 100}`;

        e.appendChild(name);
        e.appendChild(description);
        e.appendChild(price);
        newTBody.appendChild(e);
      });
    document.getElementById("category-products").replaceWith(newTBody);
    newTBody.setAttribute("id", "category-products");
  });
  document.getElementById("menu").appendChild(e);
});

products.forEach((product) => {
  const e = document.createElement("tr");
  const name = document.createElement("td");
  name.innerText = product.name;
  const description = document.createElement("td");
  description.innerText = product.description;
  const price = document.createElement("td");
  price.innerText = `$${(product.price / 100).toLocaleString("en-ca")}`;

  e.appendChild(name);
  e.appendChild(description);
  e.appendChild(price);

  document.getElementById("category-products").appendChild(e);
});

/*
var config = { childList: true };
var callback = function (mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.type == "childList") {
      const newTBody = document.createElement("tbody");
      products
        .filter((product) => {
          return product.category.indexOf(selectedCategory.id) >= 0;
        })
        .forEach((product) => {
          const e = document.createElement("tr");
          const name = document.createElement("td");
          name.innerText = product.name;
          const description = document.createElement("td");
          description.innerText = product.description;
          const price = document.createElement("td");
          price.innerText = `$${product.price / 100}`;

          e.appendChild(name);
          e.appendChild(description);
          e.appendChild(price);
          newTBody.appendChild(e);
        });
      document.getElementById("category-products").replaceWith(newTBody);
      newTBody.setAttribute("id", "category-products");
    }
  }
};
var observer = new MutationObserver(callback);
observer.observe(document.getElementById("selected-category"), config);
*/
