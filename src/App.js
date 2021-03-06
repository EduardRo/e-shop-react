import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

const HatsPage = () => {
  return <div>hats page</div>;
};
const JacketsPage = () => <div>Jackets Page</div>;
const SneakersPage = () => <div>Sneakers Page</div>;

const WomenPage = () => <div>Women Page</div>;
const MenPage = () => <div>Men Page</div>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          <Route exact path='/hats' component={HatsPage} />
          <Route exact path='/jackets' component={JacketsPage} />
          <Route exact path='/sneakers' component={SneakersPage} />
          <Route exact path='/women' component={WomenPage} />
          <Route exact path='/men' component={MenPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
