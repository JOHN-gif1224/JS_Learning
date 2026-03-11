export const cart = [];

export function addToCart(productId) {
  // 1. on vérifie que la carte existe déjà
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // 2. si la carte existe déjà, on incrémente la qte
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    // 3. si la carte n'existe pas, on l'ajoute à la liste ou de la table des cartes
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
  /* Il pourrait y avoir des produit avec des prix ou notation différentes et pourtant ayant même nom
        pour résoudre ce problème, on donne à chaque produit une identité unique : "id" */
}