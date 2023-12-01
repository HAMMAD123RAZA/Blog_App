import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './App.css';

const Header = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: 'include',
    }).then((res) =>
      res.json().then((userInfo) => {
        setName(userInfo.name);
      })
    );
  }, []);

  function logout() {
    fetch("http://localhost:3000/logout", {
      credentials: 'include',
      method: 'POST',
    }).then(() => {
      setName(null);
    });
  }

  return (
    <>
      <header>
        <Link to="/" className='logo'>
          MyBlog
        </Link>
        <nav>
          {name && (
            <>
              <Link to='/create'>Create new post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!name && (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
  