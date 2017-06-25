import React, { Component } from 'react';
import QuestionPage from '../containers/questionPage';
import ConfirmationPage from '../containers/confirmationPage';

class App extends Component {
  render() {
    return (
      <div>
        <QuestionPage />
        <ConfirmationPage />
      </div>
    );
  }
}

export default App;