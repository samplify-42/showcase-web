import React, {useState, useEffect} from 'react';
import {Flex, Title, Image} from '@mantine/core';

const Container = ({imagePath}) => {
  return (
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
      <Image src={imagePath} alt="Random image" />
    </Flex>
  );
};

const Tutorial = () => {
  const [imageOnePath, setImageOnePath] = useState('');
  const [imageTwoPath, setImageTwoPath] = useState('');
  const [imageThreePath, setImageThreePath] = useState('');

  useEffect(() => {
    const fetchImageOne = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/files/first.png',
        );
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setImageOnePath(imageUrl);
        } else {
          console.error("Impossible de récupérer l'image.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'image :", error);
      }
    };

    const fetchImageTwo = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/files/second.png',
        );
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setImageTwoPath(imageUrl);
        } else {
          console.error("Impossible de récupérer l'image.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'image :", error);
      }
    };

    const fetchImageThree = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/files/third_t.png',
        );
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setImageThreePath(imageUrl);
        } else {
          console.error("Impossible de récupérer l'image.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'image :", error);
      }
    };

    fetchImageOne();
    fetchImageTwo();
    fetchImageThree();
  }, []);

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
        <Container imagePath={imageOnePath} />
        <Container imagePath={imageTwoPath} />
        <Container imagePath={imageThreePath} />
      </Flex>
    </Flex>
  );
};

export default Tutorial;
