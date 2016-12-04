// @flow
import React, { Component, PropTypes } from 'react';

export default class Home extends Component {

  goTo(page: number) {
    return this.enabled && page;
  }

  render() {
    const { page } = this.props;

    return (
      <div>
        <a onClick={this.goTo(page + 1)}>
          <img role="presentation" src="http://i996.mangareader.net/assassination-classroom/180/assassination-classroom-7244821.jpg" />
        </a>
      </div>
    );
  }
}

Home.propTypes = {
  page: PropTypes.number
};
