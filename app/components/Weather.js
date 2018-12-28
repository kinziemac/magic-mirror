import React, { Component } from 'react';
import WeatherStore from '../api/apiWeather';
import styles from './styles/HomePage.scss';

type Props = {};

export default class HomePage extends Component<Props> {
    props: Props;

    render() {
        const { time } = this.state;
        WeatherStore.getWeather()
        .then(res => {
          console.log(res)
        })


        return (
          <div className={styles.container}>
            <FullDate currentTime={time} />
            <Clock currentTime={time} />
          </div>
        );
      }

}