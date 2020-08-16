import React from 'react';
import { KeyboardAvoidingView,
         ScrollView, 
         Platform, 
         Image 
        } from 'react-native';
import { Container, 
         TextLikeMusical,
         ContainerImage,
         ContainerContent as ContainerContent,
         TextContainerImage,
         ButtonIconHelp,
       } from './styles';
import IconHelp from '../../components/IconHelp';
import InputMatcher from '../../components/InputMatcher';
import logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import ButtonNext from '../../components/ButtonNext';

const LikeMusical: React.FC = () => {
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
           <Image source={logo} style={{
              width:80,
              height:80,
              marginLeft: 150,
            }} />
              <TextLikeMusical>Queremos conhecer seu estilo musical.</TextLikeMusical>
              <TextLikeMusical>O que você gosta de ouvir ?</TextLikeMusical>
          </Container>
          
              
          <ContainerImage>
            <ContainerContent>         
              <Image 
              source={require('../../assets/styleMusic/eletronica.jpeg')}  
              style={{width: 60, height: 60, borderRadius: 60/ 2}} 
              />
              <TextContainerImage> Eletronica</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/funk.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Funk</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/pagode.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Pagode</TextContainerImage>
            </ContainerContent> 

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/rock.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Rock</TextContainerImage>
            </ContainerContent>    

          </ContainerImage>
            
          <ContainerImage>
            <ContainerContent>         
              <Image 
              source={require('../../assets/styleMusic/forró.jpg')}  
              style={{width: 60, height: 60, borderRadius: 60/ 2}} 
              />
              <TextContainerImage>Forró</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/jazz.jpeg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Jazz</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/pop.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Pop</TextContainerImage>
            </ContainerContent> 

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/reggae.jpeg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Reggae</TextContainerImage>
            </ContainerContent>    

          </ContainerImage>

          <ContainerImage>
            <ContainerContent>         
              <Image 
              source={require('../../assets/styleMusic/samba.jpg')}  
              style={{width: 60, height: 60, borderRadius: 60/ 2}}  
              />
              <TextContainerImage> Samba</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/sertanejo.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Sertanejo</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/hiphop.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Hip Hop</TextContainerImage>
            </ContainerContent> 

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/mpb.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>MPB</TextContainerImage>
            </ContainerContent>    

          </ContainerImage>

          <ContainerImage>
            <ContainerContent>         
              <Image 
              source={require('../../assets/styleMusic/indie.jpg')}  
              style={{width: 60, height: 60, borderRadius: 60/ 2}}  
              />
              <TextContainerImage> Indie</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/reggaeton.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Reggaeton</TextContainerImage>
            </ContainerContent>

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/rap.jpg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Rap</TextContainerImage>
            </ContainerContent> 

            <ContainerContent>
              <Image 
                source={require('../../assets/styleMusic/rockalternativo.jpeg')}  
                style={{width: 60, height: 60, borderRadius: 60/ 2}}  
                />
              <TextContainerImage>Rock </TextContainerImage>
              <TextContainerImage> Alternativo</TextContainerImage>
            </ContainerContent>    

          </ContainerImage>

            <ButtonNext>Próximo</ButtonNext>
          <ButtonIconHelp>
            <IconHelp />
          </ButtonIconHelp>
         
        </ScrollView>
      </KeyboardAvoidingView>

    </>

  )
};

export default LikeMusical;
