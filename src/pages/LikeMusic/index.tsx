import React from 'react';
import { 
  KeyboardAvoidingView,
  ScrollView, 
  Platform, 
  Image, 
  Text
} from 'react-native';
import { 
  Container, 
  ContainerImage,
  ContainerContent,
  TextContainerImage,
  HeaderLikeMusic,
  HeaderText as HeaderText,
  ButtonIconHelp,
  Bn,
} from './styles';
import IconHelp from '../../components/IconHelp';
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import ButtonNext from '../../components/ButtonNext';

const LikeMusic: React.FC = () => {
  const navigation = useNavigation();

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
          
          <Container>
            <HeaderLikeMusic>
              <Image source={logo} style={{
                  width:80,
                  height:80,
                  marginLeft:90,
                }} />
              <HeaderText>Queremos conhecer seu estilo musical.</HeaderText>
              <HeaderText>O que você gosta de ouvir ?</HeaderText>
            </HeaderLikeMusic>
          
              
          <ContainerImage>
            <ContainerContent>         
              <Image 
              source={require('../../assets/style-music/eletronica.jpeg')}  
              style={{width: 60, height: 60, borderRadius: 60/ 2}} 
              />
              <TextContainerImage> Eletronica</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/funk.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Funk</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/pagode.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Pagode</TextContainerImage>
            </ContainerContent> 

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/rock.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Rock</TextContainerImage>
            </ContainerContent>    

          </ContainerImage>
            
          <ContainerImage>
            <ContainerContent>         
              <Image 
              source={require('../../assets/style-music/forró.jpg')}  
              style={{width: 60, height: 60, borderRadius: 60/ 2}} 
              />
              <TextContainerImage>Forró</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/jazz.jpeg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Jazz</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/pop.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Pop</TextContainerImage>
            </ContainerContent> 

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/reggae.jpeg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Reggae</TextContainerImage>
            </ContainerContent>    

          </ContainerImage>

          <ContainerImage>
            <ContainerContent>         
              <Image 
              source={require('../../assets/style-music/samba.jpg')}  
              style={{width: 60, height: 60, borderRadius: 60/ 2}}  
              />
              <TextContainerImage> Samba</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/sertanejo.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Sertanejo</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/hiphop.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Hip Hop</TextContainerImage>
            </ContainerContent> 

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/mpb.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>MPB</TextContainerImage>
            </ContainerContent>    

          </ContainerImage>

          <ContainerImage>
            <ContainerContent>         
              <Image 
              source={require('../../assets/style-music/indie.jpg')}  
              style={{width: 60, height: 60, borderRadius: 60/ 2}}  
              />
              <TextContainerImage> Indie</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/reggaeton.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Reggaeton</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/rap.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Rap</TextContainerImage>
            </ContainerContent> 

            <ContainerContent>
              <Image 
                source={require('../../assets/style-music/rockalternativo.jpeg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Rock </TextContainerImage>
              <TextContainerImage> Alternativo</TextContainerImage>
            </ContainerContent>    

          </ContainerImage>

          </Container>
          <Bn>
            <ButtonNext>Próximo</ButtonNext>
          </Bn>
          <ButtonIconHelp>
            <IconHelp />
          </ButtonIconHelp>
         
        </ScrollView>
      </KeyboardAvoidingView>

    </>

  )
};

export default LikeMusic;
