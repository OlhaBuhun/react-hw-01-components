import PropTypes from 'prop-types';
import { CardStatsStyled, StatisticsStyled, StatsStyled, TitleStatististicsStyled } from './Statistics.styled';


const TitleStatististics = ({title}) => {
  return (
    <>
    {title.length > 0 && (<TitleStatististicsStyled >{title}</TitleStatististicsStyled>)}
    </>
  )
}

const CardStats = ({label, percentage}) => {
  return (
    <CardStatsStyled >
      <span >{label}</span>
      <span >{percentage}%</span>
    </CardStatsStyled>
  )
}

const Stats =({stats}) => {
  return (
    <StatsStyled >
      {stats.map(({id, label, percentage}) => (
        <CardStats 
        key={id}
        label={label}
        percentage={percentage}
        />
      ))}
    </StatsStyled>
  )

}


export const Statistics = ({title, stats}) => {
  return (   
  <StatisticsStyled >
    <TitleStatististics title={title}/>
    <Stats stats={stats}/>
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
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}