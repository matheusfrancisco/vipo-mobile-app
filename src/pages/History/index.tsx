import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  IconBorder,
  ContainerHistory,
  ImageItem,
  TitleImage,
  ContainerIcon,
  Item,
  ContainerText,
} from './styles';
import { Title3, TextMin } from '../../global';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import Footer from '../../components/Footer';

const History: React.FC = () => {
  const navigation = useNavigation();
  const undoPage = () => {
    navigation.goBack();
  };

  const items = [
    {
      id: '1',
      title: 'Bar do leo',
      image: require('../../assets/history/bar.jpg'),
      date: 'Seg à Dom - 18:00 à 22:00',
      location: 'Vila Madalena',
      value: 'Preço médio - R$ 60,00',
    },
    {
      id: '2',
      title: 'Bar do jao',
      image: require('../../assets/history/bar.jpg'),
      date: 'Seg à Dom - 18:00 à 22:00',
      location: 'Vila Madalena',
      value: 'Preço médio - R$ 60,00',
    },
    {
      id: '3',
      title: 'Bar do leo',
      image: require('../../assets/history/bar.jpg'),
      date: 'Seg à Dom - 18:00 à 22:00',
      location: 'Vila Madalena',
      value: 'Preço médio - R$ 60,00',
    },
  ];

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView style={{ flex: 1 }}>
          <Container>
            <IconBorder onPress={undoPage}>
              <Icon name="chevron-left" color="#fff" onPress={undoPage} />
            </IconBorder>
            <Title>
              <Title3>Meus últimos rolês</Title3>
            </Title>
            {items.map((item) => {
              return (
                <ContainerHistory>
                  <ImageItem source={item.image} />
                  <TitleImage>
                    <Title3>{item.title}</Title3>
                  </TitleImage>
                  <Item>
                    <IconLocation
                      name="calendar"
                      color="#000"
                      onPress={undoPage}
                      size={28}
                      style={{ marginLeft: 10 }}
                    />
                    <ContainerText>
                      <TextMin>{item.date}</TextMin>
                    </ContainerText>
                  </Item>

                  <Item>
                    <IconLocation
                      name="location"
                      color="#000"
                      onPress={undoPage}
                      size={20}
                      style={{ marginLeft: -20 }}
                    />
                    <ContainerText>
                      <TextMin>{item.location}</TextMin>
                    </ContainerText>
                  </Item>

                  <Item>
                    <Icon
                      name="money"
                      color="#000"
                      onPress={undoPage}
                      size={20}
                      style={{ marginLeft: 10 }}
                    />
                    <ContainerText>
                      <TextMin>{item.value}</TextMin>
                    </ContainerText>
                  </Item>
                </ContainerHistory>
              );
            })}
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default History;
