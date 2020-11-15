import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import TestPage from './pages/Test/Test';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
        <div className="app-container page-background">
            <Route path="/" exact component={MainPage}/>
            <Route path="/map" exact component={TestPage}/>
            <Route path="/cesar" exact component={TestPage}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
