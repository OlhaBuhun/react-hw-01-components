import PropTypes from 'prop-types';
import data from '../../data.json';
import { CardStatsStyled, StatisticsStyled, StatsStyled, TitleStatististicsStyled } from './Statistics.styled';

// console.log(data);

const TitleStatististics = ({text}) => {
  const title = true;
  return (
    <TitleStatististicsStyled >{title && text}</TitleStatististicsStyled>
  )
}

const CardStats = ({label, percentage}) => {
  return (
    <CardStatsStyled >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </CardStatsStyled>
  )
}

const Stats =({event}) => {
  return (
    <StatsStyled >
      {event.map(({id, label, percentage}) => (
        <CardStats 
        key={id}
        label={label}
        percentage={percentage}
        />
      ))}
    </StatsStyled>
  )

}


export const Statistics = ({text, event}) => {
  return (   
  <StatisticsStyled >
  <TitleStatististics text='Upload stats' />
  <Stats event={data}/>
  </StatisticsStyled>
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