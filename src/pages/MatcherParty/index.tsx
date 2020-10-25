import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Text,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Title,
  Container,
  SearchRole,
  TextMatcher,
  ContainerImage,
  ContainerContent,
  TextContainerImage,
  PriceRole,
  PriceRoleText,
  ImageItem,
} from './styles';

import PickerItem from '../../components/PickerItem';
import ButtonViewRole from '../../components/ButtonViewRole';
import InputMatcher from '../../components/InputMatcher';

const MatcherParty: React.FC = () => {
  const navigation = useNavigation();
  const [selectedValue, setValue] = useState('1');

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <SearchRole>
              <Title>PROCURAR UM ROLÊ </Title>
            </SearchRole>
            <TextMatcher>
              <Text>Em quantas pessoas vocês estão?</Text>
            </TextMatcher>
            <PickerItem
              setSelectedValue={(item: any) => {
                setValue(item);
              }}
              selectedValue={selectedValue}
            />
            <TextMatcher>Quais os planos para hoje?</TextMatcher>
            <ContainerImage>
              <ContainerContent>
                <ImageItem source={require('../../assets/drink.jpg')} />
                <TextContainerImage> Beber</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <ImageItem source={require('../../assets/food.jpg')} />
                <TextContainerImage>Comer</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <ImageItem source={require('../../assets/dance.jpg')} />
                <TextContainerImage>Dançar</TextContainerImage>
              </ContainerContent>
            </ContainerImage>
            <ContainerImage>
              <ContainerContent>
                <ImageItem source={require('../../assets/talk.jpg')} />
                <TextContainerImage>Conversar</TextContainerImage>
              </ContainerContent>
              <ContainerContent>
                <ImageItem source={require('../../assets/meetpeople.jpg')} />
                <TextContainerImage>Conhecer</TextContainerImage>
                <TextContainerImage>pessoas</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <ImageItem
                  source={require('../../assets/romanticdinner.jpg')}
                />
                <TextContainerImage>Jantar </TextContainerImage>
                <TextContainerImage> romântico</TextContainerImage>
              </ContainerContent>
            </ContainerImage>
            <TextMatcher>Até quanto pretendem gastar?</TextMatcher>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <PriceRole>
                <PriceRoleText> Até:</PriceRoleText>
                <InputMatcher />
                <PriceRoleText> , 00</PriceRoleText>
              </PriceRole>
              <ButtonViewRole
                onPress={() => {
                  navigation.navigate('Match');
                }}>
                VER ROLÊS
              </ButtonViewRole>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default MatcherParty;
