import React from 'react';
import { toast } from 'sonner';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { useAuth0 } from '@auth0/auth0-react';
const Navigationbar = () => {
  const promise = () => new Promise((resolve) => setTimeout(resolve, 1000));
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <Navbar className="bp5-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Todo List</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp5-minimal" icon="mugshot" text="Profile" />
          <Button
            className="bp5-minimal"
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
            className="bp5-minimal"
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
