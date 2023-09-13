import React, { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";

export class App extends Component {
  constructor() {
    super();
    this.handleLeaveFeedback = this.handleLeaveFeedback.bind(this);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    const good = this.state.good;

    const percentage = (good * 100) / totalFeedback;
    return Math.trunc(percentage * 100) / 100;
  }

  handleGoodFeedback() {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  }
  handleNeutralFeedback() {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  }
  handleBadFeedback() {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  }

  handleLeaveFeedback(event) {
    if (event.target.id === "Good") {
      this.handleGoodFeedback();
    } else if (event.target.id === "Neutral") {
      this.handleNeutralFeedback();
    } else {
      this.handleBadFeedback();
    }
  }

  render() {
    const options = ["Good", "Neutral", "Bad"];
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleLeaveFeedback}
        ></FeedbackOptions>
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    );
  }
}
