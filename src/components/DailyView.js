import React from 'react'
import moment from 'moment'

const DailyView = () => {
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
            <div>
                  DAILYVIEW
            </div>
      )
}

export default DailyView
