import React, { Component } from 'react';
import styles from './styles/Clock.scss';

type Props = {};

export default class Clock extends Component<Props> {
  props: Props;

//   state = {
//       currentTime: new Date()
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.setState({ time: new Date() }), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

  render() {
    const { currentTime } = this.props;
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    if (hours > 12) {
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    const time = `${hours}:${minutes}`


    return (
        <div className={styles.container}>
            <p className={styles.hours}>{time}</p>
            <p className={styles.seconds}>{seconds}</p>
        </div>
    )
  }



}