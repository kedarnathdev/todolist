import React from 'react';
import { toast } from 'sonner';
import { Card, CardList, Section, SectionCard, Alert } from '@blueprintjs/core';
const ListOfTodos = () => {
  return (
    <div>
      <Section title="List of Todos">
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
  );
};

export default ListOfTodos;
