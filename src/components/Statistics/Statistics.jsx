 import PropTypes from 'prop-types'

 const Statistic = ({ label, percentage }) => {
    return (
    <li>
                    <span>{label}</span>
                    <span>{percentage}%</span>
    </li>
    )
}

export const Statistics = ({ stats,title }) => {
    
    return (
        <section>
            <h2>{title}</h2>
        <ul>
     
            {stats.map(stat => {
                return (
                         <Statistic
                        key={stat.id}
                        label={stat.label}
                        percentage={stat.percentage} />  )
            })}
  
      </ul>
        </section>
        
    )
}

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
}