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
          <Flex
            direction={'column'}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          >
            <Text
              style={{
                color: '#284B63',
                fontWeight: 'bold',
                fontSize: '18px',
                textAlign: 'center',
              }}
            >
              Cryptage des données
            </Text>
            <Text
              style={{
                color: '#284B63',
                textAlign: 'center',
              }}
            >
              Priorité absolue à la sécurité de vos transactions et de vos
              données personnelles, en utilisant des protocoles avancés.
            </Text>
          </Flex>
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
          <Flex
            direction={'column'}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          >
            <Text
              style={{
                color: '#284B63',
                fontWeight: 'bold',
                fontSize: '18px',
                textAlign: 'center',
              }}
            >
              Authentification forte
            </Text>
            <Text
              style={{
                color: '#284B63',
                textAlign: 'center',
              }}
            >
              Mécanismes de sécurité avancés pour protéger vos informations
              sensibles et prévenir les accès non autorisés.
            </Text>
          </Flex>
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
          <Flex
            direction={'column'}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          >
            <Text
              style={{
                color: '#284B63',
                fontWeight: 'bold',
                fontSize: '18px',
                textAlign: 'center',
              }}
            >
              Surveillance et détection des menaces
            </Text>
            <Text
              style={{
                color: '#284B63',
                textAlign: 'center',
              }}
            >
              Surveillance constante des activités suspectes et des tentatives
              d'intrusion pour garantir la sécurité de votre compte.
            </Text>
          </Flex>
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
          <Flex
            direction={'column'}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          >
            <Text
              style={{
                color: '#284B63',
                fontWeight: 'bold',
                fontSize: '18px',
                textAlign: 'center',
              }}
            >
              Sécurité physique et sauvegardes
            </Text>
            <Text
              style={{
                color: '#284B63',
                textAlign: 'center',
              }}
            >
              Mesures de sécurité physiques et sauvegardes régulières pour
              protéger vos données en cas de défaillance du système.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Step;
