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
  Container,
  Header,
  TextMatcher,
  ContainerImage,
  ContainerContent,
  TextContainerImage,
  PriceRole,
  PriceRoleText,
  ImageItem,
  Title,
} from './styles';

import PickerItem from '../../components/PickerItem';
import ButtonViewRole from '../../components/ButtonViewRole';
import InputMatcher from '../../components/InputMatcher';
import {Title3} from '../../global';

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
            <Header>
              <Title>
                <Title3>
                  Responda essas três perguntas para encontrarmos o rolê certo
                  para você 🔥
                </Title3>
              </Title>
            </Header>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default MatcherParty;
