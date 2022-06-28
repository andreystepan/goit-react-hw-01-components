import PropTypes from 'prop-types'
 import{SectionStatistics, StatTitle, StatList, StatListItem, PercentageSpan} from './Statistics.styled'

 const Statistic = ({ label, percentage }) => {
    return (
    <StatListItem>
                    <span>{label}</span>
                    <PercentageSpan>{percentage}%</PercentageSpan>
    </StatListItem>
    )
}

export const Statistics = ({ stats,title }) => {
    
    return (
        <SectionStatistics>
            {title && <StatTitle>{title}</StatTitle>}
        <StatList>
     
            {stats.map(stat => {
                return (
                         <Statistic
                        key={stat.id}
                        label={stat.label}
                        percentage={stat.percentage} />  )
            })}
  
      </StatList>
        </SectionStatistics>
        
    )
}

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
}