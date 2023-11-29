import PropTypes from 'prop-types';
import { CardStatsStyled, StatisticsStyled, StatsStyled, TitleStatististicsStyled } from './Statistics.styled';



export const Statistics = ({title, stats}) => {
  return (   
  <StatisticsStyled >
    {title && (<TitleStatististicsStyled >{title}</TitleStatististicsStyled>)}
    <StatsStyled >
      {stats.map(({id, label, percentage}) => (
         <CardStatsStyled key={id}>
         <span >{label}</span>
         <span >{percentage}%</span>
       </CardStatsStyled>
      ))}
    </StatsStyled>
  </StatisticsStyled>
  )
}



Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}