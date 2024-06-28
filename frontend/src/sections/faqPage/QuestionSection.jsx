import "../../styling/sectionsStyling/faqPage/QuestionSection.css";

const QuestionSection = () => {
  return (
    <div className="questionContainer">
      <h2 className="questionTitle">Frequently asked Questions</h2>
      <div className="questionSectionWrapper">
        <img
          className="questionImage"
          src="/images/QuestionImage.svg"
          alt="Image of houses in Palma"
        />
        <div className="questionsWrapper">
          <h3 className="question">How does delivery work?</h3>
          <p className="answer">
            When you have made your order you will get an email where you
            confirm at which time the delivery of the rentals would be fitting
            for you
          </p>
          <h3 className="question">For how long can you rent something?</h3>
          <p className="answer">You can rent an item for up to two months.</p>
          <h3 className="question">
            How does it work if the item you are renting breaks?
          </h3>
          <p className="answer">
            If the item you are renting would break you should contact us as
            quick as possible on our email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
