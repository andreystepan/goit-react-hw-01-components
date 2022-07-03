import PropTypes from 'prop-types';
import {
  SectionStatistics,
  StatTitle,
  StatList,
  StatListItem,
  PercentageSpan,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <SectionStatistics>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem key={id}>
              <span>{label}</span>
              <PercentageSpan>{percentage}%</PercentageSpan>
            </StatListItem>
          );
        })}
      </StatList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
