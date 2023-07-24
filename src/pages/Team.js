import React from 'react';
import Thomas from '../images/Thomas.png';
import Martin from '../images/Martin.png';
import Hugo from '../images/hugo.jpg';
import Heifara from '../images/heifara.jpg';
import Antoine from '../images/antoine.jpg';
import {Flex, Image, Text, Paper, Title} from '@mantine/core';

function Team() {
  return (
    <Flex
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#284B63',
      }}
    >
      <Flex
        style={{
          width: '100%',
          justifyContent: 'left',
          marginBottom: '50px',
          marginLeft: '10%',
          marginTop: '100px',
        }}
      >
        <Title
          style={{
            color: 'white',
          }}
        >
          Equipe
        </Title>
      </Flex>
      <Flex
        style={{
          marginBottom: '50px',
          justifyContent: 'space-evenly',
          width: '60%',
          height: '326px',
        }}
      >
        <Flex
          style={{
            width: '200px',
            marginRight: '10px',
            justifyContent: 'center',
            boxShadow: '2px 10px 9px black',
          }}
        >
          <Paper shadow="lg" radius="md" p="md" withBorder>
            <Image
              style={{width: '166px', marginBottom: '20px'}}
              alt="image_equipe_1"
              src={Thomas}
            />
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '16px',
                color: '#284B63',
              }}
            >
              Thomas Deschodt
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '12px',
                color: '#888888',
              }}
            >
              Développeur Full-Stack
            </Text>
          </Paper>
        </Flex>
        <Flex
          style={{
            width: '200px',
            marginRight: '10px',
            boxShadow: '2px 10px 9px black',
          }}
        >
          <Paper shadow="md" radius="md" p="md" withBorder>
            <Image
              style={{width: '100%', borderRadius: 15, marginBottom: '20px'}}
              alt="image_equipe_2"
              src={Martin}
            />
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '18px',
                color: '#284B63',
              }}
            >
              Martin Flament
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '12px',
                color: '#888888',
              }}
            >
              Développeur Full-Stack
            </Text>
          </Paper>
        </Flex>
        <Flex style={{width: '200px', boxShadow: '2px 10px 9px black'}}>
          <Paper shadow="md" radius="md" p="md" withBorder>
            <Image
              style={{width: '166px', borderRadius: 15, marginBottom: '20px'}}
              alt="image_equipe_3"
              src={Hugo}
            />
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '18px',
                color: '#284B63',
              }}
            >
              Bonnaric hugo
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '12px',
                color: '#888888',
              }}
            >
              Développeur Full-Stack
            </Text>
          </Paper>
        </Flex>
      </Flex>
      <Flex style={{justifyContent: 'space-evenly', width: '800px'}}>
        <Flex
          style={{
            width: '200px',
            marginRight: '10px',
            boxShadow: '2px 10px 9px black',
          }}
        >
          <Paper shadow="md" radius="md" p="md" withBorder>
            <Image
              style={{width: '100%', borderRadius: 15, marginBottom: '20px'}}
              alt="image_equipe_4"
              src={Heifara}
            />
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '18px',
                color: '#284B63',
              }}
            >
              Heifara Buval
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '12px',
                color: '#888888',
              }}
            >
              Tech-lead
            </Text>
          </Paper>
        </Flex>
        <Flex style={{width: '200px', boxShadow: '2px 10px 9px black'}}>
          <Paper shadow="md" radius="md" p="md" withBorder>
            <Image
              style={{width: '100%', borderRadius: 15, marginBottom: '20px'}}
              alt="image_equipe_5"
              src={Antoine}
            />
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '18px',
                color: '#284B63',
              }}
            >
              Antoine Baheux
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: '5px',
                fontSize: '12px',
                color: '#888888',
              }}
            >
              Développeur full-stack et manager
            </Text>
          </Paper>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Team;
