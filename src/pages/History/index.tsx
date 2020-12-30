import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Title, IconBorder, ContainerHistory, ImageItem, TitleImage, ContainerIcon, Item, ContainerText} from './styles';
import {Title3, TextMin} from '../../global';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLocation from 'react-native-vector-icons/EvilIcons';

const History: React.FC = () => {
  const navigation = useNavigation();
  const undoPage = () => {
    navigation.goBack();
  };
  
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <IconBorder onPress={undoPage}>
              <Icon
                  name="chevron-left"
                  color="#fff"
                  onPress={undoPage}
                />
            </IconBorder>
            <Title>
              <Title3>Meus últimos rolês</Title3>
            </Title>
            <ContainerHistory>
              <ImageItem source={require('../../assets/history/bar.jpg')} />
              <TitleImage>
                <Title3>
                Bar do Leo
                </Title3>
              </TitleImage>
                <Item>
                  <IconLocation
                    name="calendar"
                    color="#000"
                    onPress={undoPage}
                    size={28}
                    style={{marginLeft: 10}}
                  />
                  <ContainerText>
                    <TextMin>Seg à Dom - 18:00 até 22:00</TextMin>
                  </ContainerText>
                </Item>
              
                <Item>
                  <IconLocation
                    name="location"
                    color="#000"
                    onPress={undoPage}
                    size={20}
                    style={{marginLeft: -20}}
                  />
                  <ContainerText>
                    <TextMin>Vila Madalena</TextMin>
                  </ContainerText>
                </Item>
                
                <Item>
                  <Icon
                    name="money"
                    color="#000"
                    onPress={undoPage}
                    size={20}
                    style={{marginLeft: 10}}
                  />
                  <ContainerText>
                    <TextMin>Preço médio - R$ 60,00</TextMin>
                  </ContainerText>
                </Item>
              
            </ContainerHistory>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default History;
