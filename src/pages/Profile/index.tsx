import React, { useCallback, useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  RefreshControl,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEmail from 'react-native-vector-icons/Fontisto';
import IconLocation from 'react-native-vector-icons/Octicons';

import { IUserProfile } from '@/domain/entities/IUser';

import Line from '../../components/Line';
import { Title2, TextH2, TextMin, TextH5 } from '../../global';
import { useAuth } from '../../hooks/auth';
import { useGetProfileController } from './hooks';
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
  ButtonLogout,
} from './styles';

const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<IUserProfile | null>(null);
  const { signOut } = useAuth();

  const controller = useGetProfileController();

  const navigation = useNavigation();

  const getProfile = useCallback(async () => {
    const userProfile = await controller.getUserProfile();
    if (userProfile) {
      setUserProfile(userProfile);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //#TODO if we put controller dependency here this loading pading will have an infinity loop

  //useFoucusEffect cause infinity loop
  useEffect(() => {
    const renderProfileGoBack = navigation.addListener('focus', () => {
      getProfile();
    });
    return renderProfileGoBack;
  }, [getProfile, navigation]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={controller.loading}
              colors={['#9283bf']}
            />
          }
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          {userProfile && (
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

                  <ButtonLogout
                    onPress={() => {
                      signOut();
                    }}>
                    <ColorTextButton>
                      <TextH5>Logout</TextH5>
                    </ColorTextButton>
                  </ButtonLogout>
                </HeaderProfile>

                <AlignText>
                  <Title2>
                    Olá, {userProfile.name} {userProfile.lastName}!
                  </Title2>
                </AlignText>
                <Colunn>
                  <ColorText>
                    <TextH2>Minhas Informações</TextH2>
                  </ColorText>
                </Colunn>
                <Line />

                {userProfile.address && (
                  <AlignIcon>
                    <IconLocation name="location" size={20} color="#470A68" />
                    <TextMin> {userProfile.address}</TextMin>
                  </AlignIcon>
                )}

                <AlignIcon>
                  <IconEmail name="email" size={20} color="#470A68" />

                  <TextMin> {userProfile.email}</TextMin>
                </AlignIcon>
              </Container>

              <FooterProfile>
                <ButtonEditLike
                  onPress={() => {
                    navigation.navigate('EditProfile', {
                      user: {
                        name: userProfile.name,
                        lastName: userProfile.lastName,
                        address: userProfile.address,
                      },
                    });
                  }}>
                  <ColorTextButton>
                    <TextH5>Altere seu perfil</TextH5>
                  </ColorTextButton>
                </ButtonEditLike>

                <ButtonEditLike
                  onPress={() => {
                    navigation.navigate('ProfileDrink', {
                      profileInformations: userProfile.profile,
                    });
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
