import { Image } from "../../../../common/ReusableComponents/Image";
import "./DeliveryStatements.css";
import box from "/assets/icons/box.svg";
import delivery from "/assets/icons/delivery.svg";
import store from "/assets/icons/store.svg";

const deliverystatements = [
  {
    src: box,
    alt: "Free shipping-icon",
    className: "delivery",
    text: "Free shipping",
  },
  {
    src: delivery,
    alt: "Delivery icon",
    className: "delivery",
    text: "Fast delivery",
  },
  {
    src: store,
    alt: "Pick up in store-icon",
    className: "delivery",
    text: "Pick up in store",
  },
];
export const DeliveryStatements = () => {
  return (
    <div className="delivery-statements">
      {deliverystatements.map((deliverystatements, index) => (
        <div key={index} className="delivery-statement">
          <Image
            src={deliverystatements.src}
            alt={deliverystatements.alt}
            className={deliverystatements.className}
          />
          <p className="delivery-text">{deliverystatements.text}</p>
        </div>
      ))}
    </div>
  );
};
