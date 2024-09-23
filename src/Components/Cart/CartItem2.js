import { products } from "../../Utilities/ProductsArr";

export default function CartItem2() {
  return products.map((product) => {
    return (
      <div class="container2-items">
        <div class="cart-item-profile">
          <div class="cart-img">
            <img src={product.img} alt="" />
          </div>
          <div class="cart-item-description">
            <p>{product.name}</p>
            <p>
              Sold by <span>Maxi Official Store</span>
            </p>
          </div>
        </div>
        <section class="cart-sec2">
          <div class="cart-quantity">
            Quantity:
            <div class="button-wrapper">
              <button class="decrease">-</button>
              <p>1</p>
              <button class="increase">+</button>
            </div>
          </div>
          <div class="cart-item-price">
            <p class="cart-item-final-price">{product.newPrice}</p>
            <p class="cart-item-calculations">{product.newPrice} x 1 item</p>
          </div>
        </section>
        <section class="cart-sec3">
          <div class="cart-item-buttons">
            <button class="cart-item-remove">
              <i class="fa-solid fa-heart"></i>Remove item
            </button>
            <button class="cart-item-save">
              <i class="fa-solid fa-circle-xmark"></i>Save for Later
            </button>
          </div>
        </section>
      </div>
    );
  });
}
