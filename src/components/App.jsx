import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }

    const percentage = (good * 100) / totalFeedback;
    return Math.trunc(percentage * 100) / 100;
  };

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };
  const handleBadFeedback = () => {
    setBad(bad + 1);
  };

  const handleLeaveFeedback = (event) => {
    if (event.target.id === "Good") {
      handleGoodFeedback();
    } else if (event.target.id === "Neutral") {
      handleNeutralFeedback();
    } else {
      handleBadFeedback();
    }
  };

  const options = ["Good", "Neutral", "Bad"];

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleLeaveFeedback}
      ></FeedbackOptions>
      {countTotalFeedback() !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </Section>
  );
};
