import React from 'react';
import { 
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

import Input from '../../components/input';
import logo from '../../assets/logo.png';
import { 
  Container,
  Title,
  SeachInput,
  HeaderIcon,
} from './styles';
import IconUser from '../../components/iconUser';
import IconMenu from '../../components/iconMenu';


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
            <IconUser
                  onPress={() => console.log("Foi")}
                >
            </IconUser>

            <IconMenu
                  onPress={() => console.log("Foi")}
                >
            </IconMenu>
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
              <Input name="search" icon="search" placeholder="Search" />
            </SeachInput>
             
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

    </>
  )
};

export default Seach;
