import React from 'react';
import {Flex, Text, Title} from '@mantine/core';

const Container = () => {
  return (
    <Flex
      style={{
        width: '300px',
        height: '400px',
        backgroundColor: 'white',
        boxShadow: '2px 5px 9px 0px #0000004F', //droite bas gauche haut - couleur,
        borderRadius: '15px',
      }}
    ></Flex>
  );
};

const Tutorial = () => {
  return (
    <Flex
      style={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#284B63',
      }}
    >
      <Flex
        style={{
          width: '100%',
          marginTop: '58px',
          marginLeft: '10%',
          position: 'absolute',
        }}
      >
        <Title
          style={{
            color: 'white',
          }}
        >
          Tutoriel
        </Title>
      </Flex>
      <Flex
        style={{
          flexDirection: 'row',
          width: '70%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Container />
        <Container />
        <Container />
      </Flex>
    </Flex>
  );
};

export default Tutorial;
