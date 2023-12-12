import React, { useState } from 'react';
import { toast } from 'sonner';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
const Navigationbar = () => {
  const promise = () => new Promise((resolve) => setTimeout(resolve, 1000));
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  console.log(user)
  return (
    <div>
      <Navbar className="bp5-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Todo List</Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Divider />
          <Link to="/profile">
          <Button className="bp5-dark" icon="mugshot" text={isAuthenticated ? user.email : "Profile"} />
          </Link>
          <Button
            className="bp5-dark"
            icon="log-out"
            text="Logout"
            onClick={() =>
              toast.promise(promise, {
                loading: 'Loading...',
                success: () => {
                  logout();
                  return `Logged out`;
                },
                error: 'Error',
              })
            }
          />
          <Button
            className="bp5-dark"
            icon="log-in"
            text="Login"
            onClick={() => loginWithRedirect()}
          />
        </Navbar.Group>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
