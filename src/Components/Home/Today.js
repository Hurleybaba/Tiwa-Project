import { products, discount } from "../../Utilities/ProductsArr";

export default function Today({ myTitle }) {
  return (
    <section className="today">
      <div className="top">
        <h2>{myTitle.title}</h2>
        <p className="see-more">{myTitle.more}</p>
      </div>
      <div className="items js-item2">
        {products.map((productItem) => {
          return (
            <div
              className="card-type1"
              onClick={() => (window.location.pathname = `${productItem.id}`)}
            >
              <div className="today-img">
                <img src={productItem.img} alt="" />
              </div>
              <div className="today-details">
                <p className="name">{productItem.name}</p>
                <div className="prices">
                  <p className="price">{productItem.newPrice}</p>
                  <p className="discounted-price">{productItem.price}</p>
                  <p className="discount">
                    {discount(
                      productItem.newPriceNaira,
                      productItem.priceNaira
                    )}
                    %
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
