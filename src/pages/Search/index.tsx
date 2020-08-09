import React from 'react';
import { 
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

import InputSearch from '../../components/InputSearch';
import logo from '../../assets/logo.png';
import { 
  Container,
  Title,
  SeachInput,
  HeaderIcon,
  IconHelpButton,
} from './styles';
import IconUser from '../../components/IconUser';
import IconMenu from '../../components/IconMenu';
import IconHelp from '../../components/IconHelp';


const Seach: React.FC = () => { 
  
  return  (
    <>
      <KeyboardAvoidingView 
        style={{ flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding': undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
          <HeaderIcon>
            <IconUser />
            <IconMenu />
          </HeaderIcon>
        
          <Container>
            <View>
              <Title>PROCURAR UM ROLÊ</Title>
            </View>

            <Image source={logo} style={{
              width:150,
              height:150,
            }} />
            
            <SeachInput>
              <InputSearch name="search" icon="search" placeholder="Search" />
            </SeachInput>
             
          </Container>
          <IconHelpButton>
            <IconHelp />
          </IconHelpButton>
        </ScrollView>
      </KeyboardAvoidingView>

    </>
  )
};

export default Seach;
