import { Component } from "react";
import PropTypes from "prop-types";

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}
