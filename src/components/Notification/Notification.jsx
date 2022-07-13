import PropTypes from 'prop-types';
import { Notific } from './Notification.styled';

export default function Notification({ message }) {
  return <Notific>{message}</Notific>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};