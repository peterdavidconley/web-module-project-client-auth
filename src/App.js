import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Swtich} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Switch>
        <Route path="/login" />
        <Route path="/" />
      </Switch>
    </div>
  );
}
s
export default App;
