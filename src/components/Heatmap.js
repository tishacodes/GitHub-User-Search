import React, {useState, useEffect} from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import moment from "moment";
import ReactTooltip from "react-tooltip";


//import 'react-calendar-heatmap/dist/styles.css';

const today = new Date();

function Heatmap(props) {

    const [heatmapArr, setHeatmapArr] = useState([]);

    const randomValues = getRange(200).map(index => {
        return {
          date: shiftDate(today, -index),
          count: getRandomInt(1, 3),
        };
      });

      // Grabs the array of heatmaps based on user Id
    const getHeatmap = async () => {
        const data = await fetch(`https://github.com/users/${props.userName}/contributions`)
        setHeatmapArr(data);
        console.log("heatmap data", data);
     
    };

    useEffect(() => {
        getHeatmap();
        // eslint-disable-next-line
      }, []);

      //conditionally renders the tool tip message when hovering over a square
  const renderToolTip = value => {
    if (value.date === null || value.count === null) {
      return {
        'data-tip': `No contributions on this date`
      };
    } else if (value.count === 1) {
      return {
        'data-tip': `${value.count} contribution on ${moment(value.date).format(
          'MMM Do YYYY'
        )}`
      };
    } else {
      return {
        'data-tip': `${value.count} contributions on ${moment(
          value.date
        ).format('MMM Do YYYY')}`
      };
    }
  };
    

      return (
        <div className = "heatmap-div">   


      <h1 className="header">Activity</h1>
      <CalendarHeatmap
        startDate={shiftDate(today, -150)}
        endDate={today}
        values={heatmapArr}
        tooltipDataAttrs={value => {
          return renderToolTip(value);
        }}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          } else if (value.count > 5) {
            return `color-scale-high`;
          } else {
            return `color-scale-${value.count}`;
          }
        }}
        gutterSize={6}
      />
      <ReactTooltip />
    </div>
      );

            

}



function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  
  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export default Heatmap;