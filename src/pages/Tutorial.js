import React from 'react';
import {Flex, Title, Image, Text} from '@mantine/core';
import first from './../images/first.png';
import second from './../images/second.png';
import third from './../images/third_t.png';

const Container = ({imagePath, text}) => {
  return (
    <Flex
      direction={'column'}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex
        style={{
          marginBottom: '25px',
        }}
      >
        <Text size={25} color="white">
          {text}
        </Text>
      </Flex>
      <Flex
        style={{
          width: '300px',
          height: '400px',
          backgroundColor: 'white',
          boxShadow: '2px 5px 9px 0px #0000004F',
          borderRadius: '15px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <Image src={imagePath} alt="service description" />
      </Flex>
    </Flex>
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
          marginTop: '100px',
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
          marginTop: '5%',
        }}
      >
        <Container imagePath={first} text={'Ajouter vos samples !'} />
        <Container imagePath={second} text={'Vendez les !'} />
        <Container imagePath={third} text={"Obtenez de l'ethereum !"} />
      </Flex>
    </Flex>
  );
};

export default Tutorial;
