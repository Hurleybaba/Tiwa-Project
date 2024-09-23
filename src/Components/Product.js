import { useParams } from "react-router-dom";
import "../Styles/product.css";
import "../Styles/productmedia.css";
import { products } from "../Utilities/ProductsArr";
import { products2 } from "../Utilities/ProductsArr";
import { CartContext, CartListContext } from "../App";
import { useContext, useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { cartNo, setCartNo } = useContext(CartContext);
  const { cartList, setCartList } = useContext(CartListContext);

  const { productId } = useParams();

  // Find the product from either products or products2
  const confirmProduct =
    products.find((product) => product.id == productId) ||
    products2.find((product) => product.id == productId);

  // Ensure the product is found before proceeding
  if (!confirmProduct) {
    console.error("Product not found!");
    return null;
  }

  function handlePlus() {
    if (quantity < 5) {
      setQuantity((q) => q + 1);
    }
  }

  function handleMinus() {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  }

  function handleReset() {
    const existingProduct = cartList.find(
      (item) => item.id === confirmProduct.id
    );

    if (existingProduct) {
      const updatedCart = cartList.map((item) =>
        item.id === confirmProduct.id
          ? {
              ...item,
              qt: item.qt + quantity, // Increment the existing quantity
            }
          : item
      );
      setCartList(updatedCart); // Update the cart list with modified quantities
    } else {
      const updatedList = [
        ...cartList,
        {
          name: confirmProduct.name,
          qt: quantity,
          price: confirmProduct.newPrice,
          priceNGN: confirmProduct.newPriceNaira,
          id: confirmProduct.id,
          img: confirmProduct.img,
        },
      ];
      setCartNo((c) => c + 1);
      setCartList(updatedList); // Add new product to the cart list
    }

    // Update cart number (you can modify this logic as needed)

    // Reset the quantity input
    setQuantity(1);

    return (
      <div>
        <h1>{confirmProduct.name}</h1>
        <p>Price: {confirmProduct.newPrice}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={handleMinus}>-</button>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleReset}>Add to Cart</button>
      </div>
    );
  }
  return (
    <>
      <div class="breadcrumb">
        <a href="/home">
          <i class="fa-solid fa-house"></i>
        </a>
        <i class="fa-solid fa-angle-right"></i>
        <a href="#" class="breadcrumb-focus">
          Product
        </a>
      </div>
      <h1 class="breadh1">{confirmProduct.name}</h1>
      <div class="main-product-container">
        <div class="small-container1">
          <div class="product-image">
            <img src={confirmProduct.img} alt="" width="100%" />
          </div>

          <div class="product-details">
            <h2>{confirmProduct.name}</h2>
            <p class="product-details-paragraph product-details-paragraph1">
              Product Code: <span class="product-code-number">6385156</span>
            </p>
            <hr class="big-section-underline" />

            <div class="product-icon">
              <p class="product-price">₦{confirmProduct.newPrice}</p>
              <div class="product-icon-div">
                <i class="fa-solid fa-truck first-truck"></i>
                <p class="shipping">free shipping</p>
              </div>
            </div>

            <hr class="big-section-underline" />

            <div class="product-quantity">
              <p>Quantity:</p>
              <div class="product-quantity-buttons">
                <button onClick={handleMinus}>-</button>
                <p class="product-quantity-paragaph">{quantity}</p>
                <button onClick={handlePlus}>+</button>
              </div>
            </div>
            <hr class="big-section-underline" />

            <div class="product-add-to-cart">
              <div class="add-to-cart-button">
                <button onClick={handleReset}>Add To Cart</button>
              </div>
              <div class="product-save-for-later">
                <i class="fa-solid fa-heart"></i>
                <p>Save For Later</p>
              </div>
            </div>
            <hr class="big-section-underline" />
            <p class="product-delivery-time">
              <i class="fa-solid fa-calendar-days"></i>
              Delivery in 6Hrs - 12Hrs
            </p>
            <hr class="big-section-underline" />
            <div class="product-description-details">
              <div>
                <i class="fa-solid fa-circle"></i>
                <p class="pdd-title">Category:</p>
                <p>Tiwa Fashions</p>
              </div>
              <div>
                <i class="fa-solid fa-circle"></i>
                <p class="pdd-title">SUB:</p>
                <p>Men and Women Accessories</p>
              </div>
              <div>
                <i class="fa-solid fa-circle"></i>
                <p class="pdd-title">Stock:</p>
                <p>-1 Items Left</p>
              </div>
              <div>
                <i class="fa-solid fa-circle"></i>
                <p class="pdd-title">Tags:</p>
                <p>Bags, Handbags, Shoulder bags, Accessories</p>
              </div>
            </div>
          </div>
        </div>
        <div class="small-container2">
          <div class="product-merchant">Geleganza Gourmet</div>
          <p>
            An online grocery store that provides you quality and affordable
            confectionery and accessories
          </p>
          <hr class="big-section-underline" />
          <div class="product-contact-support">
            <i class="fa-solid fa-phone"></i>
            <p>Contact Support</p>
            <p class="product-cc-number">07071758191</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
