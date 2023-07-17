import React from 'react';
import {Text, Flex, Badge} from '@mantine/core';

function Step() {
  return (
    <Flex
      direction={'column'}
      style={{
        alignItems: 'center',
        width: '75%',
        height: '80%',
        backgroundColor: '#36566C',
      }}
    >
      <h1
        style={{
          color: 'white',
          marginBottom: '100px',
        }}
      >
        Votre Sécurité est notre priorité
      </h1>
      <Flex
        style={{
          justifyContent: 'space-between',
          width: '75%',
          marginBottom: '100px',
        }}
      >
        <Flex
          style={{
            borderRadius: '10px',
            backgroundColor: '#D9D9D9',
            height: '200px',
            width: '275px',
            position: 'relative',
          }}
        >
          <Badge
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-15px',
              color: '#FFB700',
              backgroundColor: '#284B63',
              width: '40px',
              height: '40px',
            }}
          >
            1
          </Badge>
        </Flex>
        <Flex
          style={{
            borderRadius: '10px',
            backgroundColor: '#D9D9D9',
            height: '200px',
            width: '275px',
            position: 'relative',
          }}
        >
          <Badge
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-15px',
              color: '#FFB700',
              backgroundColor: '#284B63',
              width: '40px',
              height: '40px',
            }}
          >
            2
          </Badge>
        </Flex>
      </Flex>

      <Flex
        style={{
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Flex
          style={{
            borderRadius: '10px',
            backgroundColor: '#D9D9D9',
            height: '200px',
            width: '275px',
            position: 'relative',
          }}
        >
          <Badge
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-15px',
              color: '#FFB700',
              backgroundColor: '#284B63',
              width: '40px',
              height: '40px',
            }}
          >
            3
          </Badge>
        </Flex>
        <Flex
          style={{
            borderRadius: '10px',
            backgroundColor: '#D9D9D9',
            height: '200px',
            width: '275px',
            position: 'relative',
          }}
        >
          <Badge
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-15px',
              color: '#FFB700',
              backgroundColor: '#284B63',
              width: '40px',
              height: '40px',
            }}
          >
            4
          </Badge>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Step;
