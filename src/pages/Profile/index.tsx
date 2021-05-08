import React, { useEffect, useState } from 'react';
import IconLocation from 'react-native-vector-icons/Octicons';

import IconEmail from 'react-native-vector-icons/Fontisto';

import {
  IconBorder,
  Container,
  AlignText,
  Colunn,
  AlignIcon,
  FooterProfile,
  ColorText,
  ButtonEditLike,
  ColorTextButton,
  HeaderProfile,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  RefreshControl,
} from 'react-native';
import { Title2, TextH2, TextMin, TextH5 } from '../../global';

import Line from '../../components/Line';
import { useNavigation } from '@react-navigation/native';
import Client from '../../services/api';
import { useAuth } from '../../hooks/auth';

interface IProfile {
  user: {
    name: string;
    lastName: string;
    email: string;
    address?: string;
  };
}

const getProfile = async (signOut: () => void) => {
  try {
    const response = await Client.http.get<IProfile>('/profiles');
    return response.data;
  } catch (error) {
    console.log(error.response);
    signOut();
    return null;
  }
};

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { signOut, user } = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const profile = await getProfile(signOut);

      setProfile(profile);
      setLoading(false);
    })();
  }, [signOut, user]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={loading} colors={['#9283bf']} />
          }
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          {profile && (
            <>
              <Container>
                <HeaderProfile>
                  <IconBorder onPress={navigation.goBack}>
                    <Icon
                      name="chevron-left"
                      color="#fff"
                      onPress={navigation.goBack}
                    />
                  </IconBorder>
                </HeaderProfile>

                <AlignText>
                  <Title2>
                    Olá, {profile.user.name} {profile.user.lastName}!
                  </Title2>
                </AlignText>
                <Colunn>
                  <ColorText>
                    <TextH2>Minhas Informações</TextH2>
                  </ColorText>
                </Colunn>
                <Line />

                {profile.user.address && (
                  <AlignIcon>
                    <IconLocation name="location" size={20} color="#470A68" />
                    <TextMin> {profile.user.address}</TextMin>
                  </AlignIcon>
                )}

                <AlignIcon>
                  <IconEmail name="email" size={20} color="#470A68" />

                  <TextMin> {profile.user.email}</TextMin>
                </AlignIcon>
              </Container>

              <FooterProfile>
                <ButtonEditLike
                  onPress={() => {
                    navigation.navigate('EditProfile', {
                      user: {
                        name: profile.user.name,
                        lastName: profile.user.lastName,
                        address: profile.user.address,
                      },
                    });
                  }}>
                  <ColorTextButton>
                    <TextH5>Altere seu perfil</TextH5>
                  </ColorTextButton>
                </ButtonEditLike>

                <ButtonEditLike
                  onPress={() => {
                    navigation.navigate('ProfileDrink');
                  }}>
                  <ColorTextButton>
                    <TextH5>Altere seus gostos</TextH5>
                  </ColorTextButton>
                </ButtonEditLike>
              </FooterProfile>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
