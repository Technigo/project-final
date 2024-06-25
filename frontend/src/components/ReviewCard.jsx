//This ReviewCard is not implemented yet. It is here for future use.
import star from "/star-regular.svg";
import starFull from "/star-solid.svg";

export const ReviewCard = ({ data, langData }) => {
  //Not in use yet, for future implementations
  const reviewData = data;
  const langReviewData = langData;

  return (
    <div className="m-auto w-3/4  ">
      <div className="p-4 bg-button-light rounded-t-xl">
        <p className="font-body text-text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          tenetur quo ad a distinctio suscipit numquam mollitia amet totam iure!
        </p>
        <div className="flex justify-between my-2">
          <div className="stars flex">
            <img className="w-4" src={starFull} />
            <img className="w-4" src={starFull} />
            <img className="w-4" src={starFull} />
            <img className="w-4" src={starFull} />
            <img className="w-4" src={star} />
          </div>
          <p>Date example</p>
        </div>
      </div>
      <div className="bg-strong-red text-text-light p-4 border-2 border-t-0 border-dotted border-strong-green rounded-b-xl">
        <h2 className="text-text-light">Username</h2>
        <h3>Hairtype: Dry, curly</h3>
        <h3>Skintype: Combination</h3>
      </div>
    </div>
  );
};
