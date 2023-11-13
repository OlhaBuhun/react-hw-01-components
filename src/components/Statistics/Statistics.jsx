import PropTypes from 'prop-types';
import data from '../../data.json';

// console.log(data);

const TitleStatististics = ({text}) => {
  return (
    <h2 className="title">{text}</h2>
  )
}

const CardStats = ({id, label, percentage}) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  )
}

const Stats =({events}) => {
  return (
    <ul >
      {events.map(({id, label, percentage}) => (
        <CardStats 
        key={id}
        label={label}
        percentage={percentage}
        />
      ))}
    </ul>
  )

}


export const Statistics = ({title, stats}) => {
  return (   
  <section className="statistics">
  <TitleStatististics text ="Upload stats"/>
  <Stats events={data}/>
  </section>
  )
}

TitleStatististics.propTypes = {
  text: PropTypes.string,
};

CardStats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

Stats.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}