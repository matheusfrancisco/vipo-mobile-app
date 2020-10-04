import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import {
  Container,
  ContainerImage,
  ContainerContent,
  HeaderText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextH3, TextMinAsker } from "../../global";
import  Header  from "../../components/Header"
import Footer from "../../components/footer";

const LikeMusic: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Header/>
            <HeaderText>
              <TextMinAsker>Nós ajude a indicar os lugars de acordo com</TextMinAsker>
              <TextH3>seus gostos musicais</TextH3>
            </HeaderText>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/eletronica.jpeg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker> Eletronica</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/funk.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Funk</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/pagode.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Pagode</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/rock.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Rock</TextMinAsker>
              </ContainerContent>
            </ContainerImage>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/forró.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Forró</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/jazz.jpeg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Jazz</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/pop.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Pop</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/reggae.jpeg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Reggae</TextMinAsker>
              </ContainerContent>
            </ContainerImage>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/samba.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker> Samba</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/sertanejo.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Sertanejo</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/hiphop.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Hip Hop</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/mpb.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>MPB</TextMinAsker>
              </ContainerContent>
            </ContainerImage>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/indie.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker> Indie</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/reggaeton.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Reggaeton</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/rap.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Rap</TextMinAsker>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/style-music/rockalternativo.jpeg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextMinAsker>Rock </TextMinAsker>
                <TextMinAsker> Alternativo</TextMinAsker>
              </ContainerContent>
            </ContainerImage>
          </Container>
          <Footer/>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default LikeMusic;
