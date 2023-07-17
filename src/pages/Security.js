import Step from '../components/Security/Step';
import React from 'react';
import {Flex} from '@mantine/core';

function Security() {
  return (
    <Flex
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#36566C',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Step />
    </Flex>
  );
}

export default Security;
