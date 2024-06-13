import box from "/assets/icons/box.svg";
import delivery from "/assets/icons/delivery.svg";
import store from "/assets/icons/store.svg";

import { Image } from "../../../../common/ReusableComponents/Image/Image";

import "./DeliveryStatements.css";

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
export const DeliveryStatements = ({ variant }) => {
  return (
    <section className={`delivery-statements-container ${variant}`}>
      {deliverystatements.map((deliverystatement, index) => (
        <div key={index} className={`delivery-statement ${variant}`}>
          <Image
            src={deliverystatement.src}
            alt={deliverystatement.alt}
            className={deliverystatement.className}
          />
          <p className={`delivery-text ${variant}`}>
            {deliverystatement.text}
          </p>
        </div>
      ))}
    </section>
  );
};
