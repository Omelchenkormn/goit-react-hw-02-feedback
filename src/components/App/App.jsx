import React, {Component} from "react";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

import { Container } from "./App.styled";

const options = ['good', 'bad', 'neutral'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  countTotalFeedBack = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedBackPercentage = () => {
    let totalFeedBack = this.countTotalFeedBack();
    const { good } = this.state;
    return totalFeedBack ? Math.round((good / totalFeedBack) * 100) : 0;
  };
  
  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedBack();
    const procentFeedback = this.countPositiveFeedBackPercentage();
    
    return (
      <Container>
        <Section  title={"Please leave feedback"}>
          <FeedbackOptions 
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={procentFeedback}
          />
        </Section>
      </Container>
    );
  };
};
export default App;