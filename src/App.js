import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';

import './default.scss';

//pages
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Account from './pages/Account/Account';
import Recovery from './pages/Recovery/Recovery';

//layouts
import MainLayout from './layouts/MainLayout';

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
    });
  }
  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout currentUser={currentUser}>
                <Homepage />
              </MainLayout>
            }
          />
          <Route
            path="/registration"
            element={
              currentUser ? (
                <MainLayout currentUser={currentUser}>
                  <Homepage />
                </MainLayout>
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Registration />
                </MainLayout>
              )
            }
          />
          <Route
            path="/account"
            element={
              currentUser ? (
                <MainLayout currentUser={currentUser}>
                  <Homepage />
                </MainLayout>
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Account />
                </MainLayout>
              )
            }
          />
          <Route
            path="/recovery"
            element={
              <MainLayout currentUser={currentUser}>
                <Recovery />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
