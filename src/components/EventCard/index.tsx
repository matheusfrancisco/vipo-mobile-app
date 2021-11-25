import React from 'react';

import IconLocation from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import IHistory from '@/domain/entities/IHistory';
import { TextMin } from '@/global';

import {
  Item,
  ContainerText,
  ContainerHistory,
  ImageItem,
  TitleImage,
} from './styles';

const EventCard: React.FC<IHistory> = ({
  title,
  image,
  date,
  location,
  value,
}: IHistory) => {
  return (
    <ContainerHistory>
      <ImageItem source={image} />
      <TitleImage>
        <TextMin>{title}</TextMin>
      </TitleImage>
      <Item>
        <IconLocation
          name="calendar"
          color="#000"
          size={28}
          style={{ marginLeft: 10 }}
        />
        <ContainerText>
          <TextMin>{date}</TextMin>
        </ContainerText>
      </Item>
      <Item>
        <IconLocation
          name="location"
          color="#000"
          size={20}
          style={{ marginLeft: -20 }}
        />
        <ContainerText>
          <TextMin>{location}</TextMin>
        </ContainerText>
      </Item>

      <Item>
        <Icon name="money" color="#000" size={20} style={{ marginLeft: 10 }} />
        <ContainerText>
          <TextMin>{value}</TextMin>
        </ContainerText>
      </Item>
    </ContainerHistory>
  );
};

export default EventCard;
