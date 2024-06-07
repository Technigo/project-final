import Footer from "../utilities/Footer";
import Menu from "../utilities/Menu";
import guideImage from "/images/guidelines.jpg";

export const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-light font-sans">
      <Menu />
      <header
        className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[30rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${guideImage})` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-light">
            <h1 className="text-4xl font-bold font-serif">Good Vibes Only</h1>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 lg:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif text-dark mb-8">
            Community Guidelines
          </h2>
          <p className="text-lg text-dark text-left mb-8">
            We strive to create a supportive and inclusive environment for all
            our members. Please adhere to the following guidelines to help us
            maintain a respectful and positive community.
          </p>

          <div className="text-left space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Respect & Kindness</h3>
              <p>
                Please treat all members with respect and kinsdness. We value
                diverse perspectives and expect everyone to engage in
                constructive and respectful discussions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Confidentiality</h3>
              <p>
                We may be an ADHD-focused community group, however, it is your
                choice whether you talk about your ADHD.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Age Requirement</h3>
              <p>
                The group is aimed at adults with suspected or diagnosed ADHD
                aged 18 and over. Unfortunately, we cannot accept attendees
                under the age of 18.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">No Medical Advice</h3>
              <p>
                Our community is here to provide support and share experiences.
                However, please refrain from giving medical advice. Always
                consult with a healthcare professional for medical issues.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Alcohol Consumption</h3>
              <p>
                Some of our events are held in bars, and we are happy for
                alcoholic beverages to be consumed. You are responsible for your
                own behavior, however, if it negatively affects any other
                attendees, an event host may speak to you and, if necessary, ask
                you to leave.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Inclusivity</h3>
              <p>
                Use inclusive language and avoid offensive or discriminatory
                remarks. This includes avoiding language that may be considered
                sexist, racist, homophobic, or otherwise insensitive.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Diversity and Respect</h3>
              <p>
                We welcome everyone regardless of their ethnicity, religion,
                age, culture, gender identity, sexual orientation, and
                disability. Please remember that other attendees may have views
                and beliefs that differ from your own - please try and respect
                these.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Reporting Issues</h3>
              <p>
                If you feel uncomfortable or upset by another attendee’s
                actions, please speak to the event host during the event, or
                send a message at{" "}
                <a
                  href="mailto:support@adhdcommunity.com"
                  className="text-primary underline"
                >
                  support@adhdcommunity.com
                </a>{" "}
                after the event has taken place.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Zero Tolerance for Discrimination
              </h3>
              <p>Any type of discrimination will not be tolerated.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
