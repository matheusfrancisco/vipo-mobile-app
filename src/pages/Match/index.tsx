import React from "react";
import {
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  ScrollView,
} from "react-native";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Title,
  Insta,
  Line,
  Description,
  DescriptionInfo,
  ImageBanner,
  LikedIcons,
  PubInformations,
  PubTicket,
  Informations,
  Offert,
  Liked,
  INext,
  ILeft,
  Like,
  Dislike,
  Week,
  Share,
  Calendar,
  Wrapper,
  TextMatch,
} from "./styles";

const MatchParty: React.FC = () => {
  const yourMatchs = [
    {
      id: 1,
      name: "SputNickBar",
      instagram: "@sputinick",
      uri: "https://sputnikbar.com/img/sobre/30-11-2018.jpg",
      description:
        "UUUUUUUUUUUUUm bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!",
      ticket: "As pessoas costuman gastar R$ 60,00 neste local",
      bonus: "Indo pelo App você ganha um shot de boas-vindas quando chegar lá",
      openHour: "19:00",
      closeHour: "05:00",
    },
  ];

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
          <Wrapper>
            <ImageBanner source={yourMatchs[0]}>
              <Title>{yourMatchs[0].name}</Title>
              <Week> Agenda da semana </Week>
            </ImageBanner>
            <Container>
              <Insta>{yourMatchs[0].instagram}</Insta>
              <Line />
            </Container>
            <Informations>
              <Description>{yourMatchs[0].description}</Description>
              <DescriptionInfo>
                <PubInformations>
                  <TextMatch style={{ marginBottom: 8 }}>
                    {`${yourMatchs[0].openHour} - ${yourMatchs[0].closeHour}`}
                  </TextMatch>
                  <TextMatch>República +</TextMatch>
                </PubInformations>
                <PubTicket>{yourMatchs[0].ticket}</PubTicket>
              </DescriptionInfo>
              <Offert>
                <TextMatch style={{ textAlign: "center" }}>
                  {yourMatchs[0].bonus}
                </TextMatch>
              </Offert>
              <Liked>
                <LikedIcons>
                  <ILeft
                    name="chevron-left"
                    onPress={() => console.log("back")}
                  />
                  <Dislike
                    name="thumbs-o-down"
                    onPress={() => console.log("dislike")}
                  />
                  <Like
                    name="thumbs-o-up"
                    onPress={() => console.log("like")}
                  />
                  <INext
                    name="chevron-right"
                    onPress={() => console.log("next")}
                  />
                </LikedIcons>
                <Calendar name="calendar" />
                <Share name="share-square" />
              </Liked>
            </Informations>
          </Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default MatchParty;
