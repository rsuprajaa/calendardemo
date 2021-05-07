import { Grid } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
import WeekDays from './weeklyview/Weekdays'

const HourlyView = ({today}) => {
      const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, '21', '22', 23]
      const currHour = today.format('HH')
      console.log(typeof currHour)
      const now = moment()
      let m = moment().weekday()
      const onClickHandler = (e) => {
            console.log(e.target.dataset.tag)
            const dayNum = e.target.dataset.tag
            console.log(dayNum)
            //to get date of given day number
            console.log( moment().isoWeekday(parseInt(dayNum)))
      }
      return (
      <>
                  {hours.map((h)=>(
                        <>
                        <div className = "row">
                        <div className="cell">{h}</div>
                        {moment.weekdays(true).map((item, i) => (
                                    <div onClick = {onClickHandler} item key={i.toString()} time={h} data-tag={i.toString()} className={`${m == i && "today"} cell`}>
                                          
                                    </div>
                              ))}
                        </div>
                        </>
                  ))}
                  </>
      )
}

export default HourlyView
