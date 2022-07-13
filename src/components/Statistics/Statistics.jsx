import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

import { StatList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            {total ? (
            <StatList>
                <p>Good: <span>{good}</span></p>
                <p>Neutral: <span>{neutral}</span></p>
                <p>Bad: <span>{bad}</span></p>
                <p>Total: <span>{total}</span></p>
                <p>Positive feedback: <span>{positivePercentage}%</span></p>
            </StatList>
            ) : (<Notification message="No feedback given" />
            )}
        </>
    );
    };

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;