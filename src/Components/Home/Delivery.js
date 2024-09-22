import { products2, discount } from "../../Utilities/Products";

export default function Delivery() {
  return (
    <section className="day-delivery">
      <div className="day-top">
        <p>Same Day Delivery (TiwaMart)</p>
        <p className="see-more">See All Items</p>
      </div>
      <div className="day-items js-day-delivery-items">
        {products2.map((productItem, index) => {
          return (
            <div class="card-item2">
              <div class="day-up">
                <img src={productItem.img} alt="" />
              </div>
              <div class="day-down">
                <p class="name">{productItem.name}</p>
                <div class="prices">
                  <p class="price">{productItem.price}</p>
                  <p class="discounted-price">₦{productItem.newPrice}</p>
                  <p class="discount">
                    {discount(
                      productItem.newPriceNaira,
                      productItem.priceNaira
                    )}
                    %
                  </p>
                </div>
                <p class="review">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
