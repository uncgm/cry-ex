import React from 'react';
import AppContainer from './styles/App.styles';
import Widget from './components/UI/widget/Widget';
import GlobalStyle from './styles/GlobalStyle.styles';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Widget />
    </AppContainer>
  );
}

export default App;
