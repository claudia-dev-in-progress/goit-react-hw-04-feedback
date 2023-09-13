import { Component } from "react";
import PropTypes from "prop-types";

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map((option) => (
          <button onClick={onLeaveFeedback} id={option}>
            {option}
          </button>
        ))}
      </>
    );
  }
}
