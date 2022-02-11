import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { checkUserSession } from './redux/user/user.action';
import { useDispatch } from 'react-redux';

import './default.scss';

//hoc
// import WithAuth from './hoc/WithAuth';

//pages
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Account from './pages/Account/Account';
import Recovery from './pages/Recovery/Recovery';
import Dashboard from './pages/Dashboard/Dashboard';

//layouts
import MainLayout from './layouts/MainLayout';

const App = (props) => {
  const { setCurrentUser, currentUser } = props;


  useEffect(() => {


    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {

      authListener();

    }

  }, [])

  
    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Homepage />
              </MainLayout>
            ) : (
              <MainLayout>
                <Registration />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    );
  }


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default App;
