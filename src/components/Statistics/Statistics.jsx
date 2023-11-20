import PropTypes from 'prop-types';
import data from '../../data.json';

// console.log(data);

const TitleStatististics = ({text}) => {
  const title = true;
  return (
    <h2 className="title">{title && text}</h2>
  )
}

const CardStats = ({label, percentage}) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  )
}

const Stats =({event}) => {
  return (
    <ul >
      {event.map(({id, label, percentage}) => (
        <CardStats 
        key={id}
        label={label}
        percentage={percentage}
        />
      ))}
    </ul>
  )

}


export const Statistics = ({text, event}) => {
  return (   
  <section className="statistics">
  <TitleStatististics text='Upload stats' />
  <Stats event={data}/>
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