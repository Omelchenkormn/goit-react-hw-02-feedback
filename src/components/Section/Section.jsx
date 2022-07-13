import PropTypes from 'prop-types';
import { Title } from "components/Section/Section.styled";

const Section = ({ title, children }) => (
  <Title>
    <h2>{title}</h2>
    {children}
  </Title>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;