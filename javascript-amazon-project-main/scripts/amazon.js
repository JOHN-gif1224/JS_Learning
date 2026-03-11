import { cart, addToCart  } from "../data/cart.js";
import { products } from "../data/products.js";

/* Main idea of js */
/* 1. save data
  2. generate HTML
  3. make it iteractive */

/*Data structure for listing products*/

/* avec la variable "productsHTML", on arrive à itérer les produits en fonction
  des données déjà déclaré plus haut. Encore une fois la méthode ".forEach()" permet de créer une nouvelle
  classe qui contient toutes les données. Optimisé avec la génération du HTML */

let productsHTML = ""; // Accumulator pattern

products.forEach((products) => {
  productsHTML += ` 
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${products.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${products.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${products.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${products.rating.count}
                </div>
            </div>

            <div class="product-price">
                ${(products.priceCents / 100).toFixed(2) /* La méthode ".toFixed" uniquement pour les nombres, permet d'ajouter un certain nombre de chiffres désirés après une décimale */}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = "${products.id /* "data-product-name" est un "Data Attribute" il est spécifique à HTML | Il doit toujours commencer par "data-" et le nom que l'on veut donner à notre élément avec du "kebab-case" comme convention de nomination*/}">
                Add to Cart
            </button>
            </div>
        `;
});

// Génération des cartes pour chaque produit avec JS
document.querySelector(".js-products-grid").innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}


// Lorsqu'on clique sur le btn on ajoute la carte le contenant à une liste "cart[]"
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId; // La méthode ".dataset" permet prendre des infos provenant du data attribute d'un élément HTML

    /*On augmente ici, la qte d'un produit quand il est déjà ajouté(cliqué)*/
    addToCart(productId);

    /* Quantité total des produit séléctionnés */
    updateCartQuantity();

  });
});
