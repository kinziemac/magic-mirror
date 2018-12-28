// @flow
import React, { Component } from 'react';
import FullDate from '../components/FullDate';
import Clock from '../components/Clock';
import styles from './styles/HomePage.scss'

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  state = {
    time: new Date()
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: new Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state
    return (
      <div className={styles.container}>
        <FullDate currentTime={time} />
        <Clock currentTime={time} />
      </div>
    );
  }
}
