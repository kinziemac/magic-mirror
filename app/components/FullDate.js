import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './styles/FullDate.scss';
import WeatherStore from '../api/apiWeather';

type Props = {};

export default class FullDate extends Component<Props> {
  props: Props;

  // state = {
  //   currentTime: new Date()
  // }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.setState({ time: new Date() }), 1000);
  // }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    const { currentTime } = this.props;
    const date = currentTime;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", 
      "May", "June", "July", "August", 
      "September", "October", "November", "December"
    ];
    const currentDate = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

    return (
      <div className={styles.container} data-tid="container">
        <p>{currentDate}</p>
      </div>
    );
  }
}
