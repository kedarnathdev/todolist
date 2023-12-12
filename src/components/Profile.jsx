import React from 'react'
import Navigationbar from './Navigationbar'
import { Card, CardList, Section, SectionCard } from '@blueprintjs/core'

const Profile = () => {
  return (
    <>
    <Navigationbar />
    <div>
      <Section title="Profile">
        <SectionCard padded={true}>
          <CardList bordered={true}>
            <Card interactive={true} onClick={() => toast.error('Deleted')}>
              Learn JAVA
            </Card>
            <Card interactive={true} onClick={() => toast.error('Deleted')}>
              Learn React
            </Card>
          </CardList>
        </SectionCard>
      </Section>
    </div>
    </>
    
  )
}

export default Profile