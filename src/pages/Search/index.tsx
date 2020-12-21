import React from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import InputSearch from '../../components/InputSearch';
import logo from '../../assets/logo.png';
import {Container, SeachInput} from './styles';
import {Title3} from '../../global';

const Seach: React.FC = () => {
  const navigation = useNavigation();

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
            <View>
              <Title3>PROCURAR UM ROLÊ</Title3>
            </View>

            <RectButton
              onPress={() => {
                navigation.navigate('MatcherParty');
              }}>
              <Image
                source={logo}
                style={{
                  width: 300,
                  height: 300,
                }}
              />
            </RectButton>

            <SeachInput>
              <InputSearch name="search" icon="search" placeholder="Search" />
            </SeachInput>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Seach;
