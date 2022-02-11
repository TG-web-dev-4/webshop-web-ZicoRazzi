import React from 'react';
//import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/user/user.action';
import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';
// import { auth } from './../../firebase/utils';

const mapState = ({ user }) => ({
  //ipv de onderste functie mapStateToProps
  currentUser: user.currentUser,
});

const Header = (props) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  //const { currentUser } = props
  const { currentUser } = useSelector(mapState); //ipv bovenste regel

  const signOut = () => {
    dispatch(signOutUserStart());
    // navigate('/');
  };
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link className="logo-link" to="/">
            Le Bonnet
          </Link>
        </div>
        <div className="nav_menu">
          {currentUser && (
            <ul>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Beanies
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Sweaters
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Le Grand Bonnet
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Gloves
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Scarves
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Gifts
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Limited
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Our World
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/dashboard">
                  My Account
                </Link>
              </li>
              <li>
                <span onClick={() => signOut()}>LogOut</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Beanies
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Sweaters
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Le Grand Bonnet
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Gloves
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Scarves
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Gifts
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Limited
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Our World
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/registration">
                  Registration
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/account">
                  Account
                </Link>
              </li>

              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Cart (0)
                </Link>
              </li>
            </ul>
          )}
        </div>
      </header>
    </div>
  );
};

Header.defaultProps = {
  currentUser: null,
};

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// })

//export default connect(mapStateToProps, null)(Header)
export default Header; // ipv bovenste regel met connect
