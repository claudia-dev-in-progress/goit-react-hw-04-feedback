import { Component } from "react";
import PropTypes from "prop-types";

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    const { message } = this.props;
    return <h1>{message}</h1>;
  }
}
