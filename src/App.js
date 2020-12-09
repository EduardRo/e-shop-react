import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

const HatsPage = () => {
  return <div>hats page</div>;
};
const JacketsPage = () => <div>Jackets Page</div>;
const SneakersPage = () => <div>Sneakers Page</div>;

const WomenPage = () => <div>Women Page</div>;
const MenPage = () => <div>Men Page</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/jackets' component={JacketsPage} />
        <Route exact path='/sneakers' component={SneakersPage} />
        <Route exact path='/women' component={WomenPage} />
        <Route exact path='/men' component={MenPage} />
      </Switch>
    </div>
  );
}

export default App;
