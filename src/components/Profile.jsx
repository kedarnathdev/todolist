import React from 'react'
import Navigationbar from './Navigationbar'
import { FormGroup, InputGroup, Section, SectionCard } from '@blueprintjs/core'
import { useAuth0 } from '@auth0/auth0-react'
import { toast } from 'sonner';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const {user, isAuthenticated} = useAuth0();
  if (!isAuthenticated) {
    return (
      <>
      {toast.error("login first")}
      <Navigate to="/" />
      </>
    )
  }
  return (
    <>
      <Navigationbar />
      <div>
        <Section title="Profile">
          <SectionCard padded={true}>
            <img src={user.picture}></img>
          <FormGroup
            label="Email"
          >
            <InputGroup placeholder="email" value={user.email} disabled />
          </FormGroup>
          <FormGroup
            label="Email Verified"
          >
            <InputGroup placeholder="Email Verified" value={user.email_verified} disabled />
          </FormGroup>
          <FormGroup
            label="Family Name"
          >
            <InputGroup placeholder="family name" value={user.family_name} disabled />
          </FormGroup>
          <FormGroup
            label="Given Name"
          >
            <InputGroup placeholder="given name" value={user.given_name} disabled />
          </FormGroup>
          <FormGroup
            label="Locale"
          >
            <InputGroup placeholder="locale" value={user.locale} disabled />
          </FormGroup>
          <FormGroup
            label="Name"
          >
            <InputGroup placeholder="name" value={user.name} disabled />
          </FormGroup>
          <FormGroup
            label="Nickname"
          >
            <InputGroup placeholder="nickname" value={user.nickname} disabled />
          </FormGroup>
          </SectionCard>
        </Section>
      </div>
    </>

  )
}

export default Profile