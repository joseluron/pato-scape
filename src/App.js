import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
        <div className="app-container page-background">
            <Route path="/" exact component={MainPage}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
