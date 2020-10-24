import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useAuth} from '../../hooks/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ImageBanner, Title} from './styles';

const MatchParty: React.FC = () => {
  const yourMatchs = [
    {
      id: 1,
      name: 'SputNickBar',
      instagram: '@sputinick',
      uri: 'https://sputnikbar.com/img/sobre/30-11-2018.jpg',
      description:
        'UUUUUUUUUUUUUm bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!',
      ticket: 'As pessoas costuman gastar R$ 60,00 neste local',
      bonus: 'Indo pelo App você ganha um shot de boas-vindas quando chegar lá',
      openHour: '19:00',
      closeHour: '05:00',
    },
  ];

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <ImageBanner source={yourMatchs[0]}>
            <Title>
              {yourMatchs[0].name}
              <Icon.Button
                name="calendar"
                backgroundColor="#000"
                onPress={() => console.log('Foi')}
              />
            </Title>
          </ImageBanner>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default MatchParty;
