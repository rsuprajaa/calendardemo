import React, { useCallback } from 'react'
import moment from 'moment'
import TopBar from './Weekdays';
import HourlyView from '../HourlyView';
import { Grid } from '@material-ui/core';
import WeekDays from './Weekdays';



const WeeklyView = () => {
      const today = moment();
      const monday = today.clone().weekday(1);
      const friday = today.clone().weekday(5);
      console.log(monday)
      console.log(friday)
      let formatted = monday.format('YYYY-MM-DD');
      let currTime = today.clone().format('HH');
      console.log(currTime)
      console.log(formatted)
      
      return (
            <div className="table-weekly">
                  <WeekDays></WeekDays>
                  <HourlyView today={today} />
            </div>
      )
}

export default WeeklyView
