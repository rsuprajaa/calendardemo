import React from 'react'
import moment from 'moment'
import { Grid } from '@material-ui/core';

const WeekDays = (props) => {
	let m = moment().weekday();
	return (
            <>
            <div className = "row">
                  <div className = "cell">---</div>
                  {moment.weekdays(true).map((item, i) => (
				<div key={i.toString()} className={`${m == i && "today"} cell`}>
					{item}
				</div>
			))}
            </div>
            </>
	);
};
export default WeekDays
