import React, { memo } from 'react';
import { ImageURISource } from 'react-native';
import { Container, AlignContent, TextName } from './styles';
import OptionButton from './OptionButton';

interface IDrinkOption {
  name: string;
  link: ImageURISource;
}

interface IRecommendationsListProps {
  fieldName: string;
  recommendations: Array<IDrinkOption>;
}

const RecommendationsList: React.FC<IRecommendationsListProps> = ({
  fieldName,
  recommendations,
}) => (
  <Container>
    {recommendations.map((recommendation) => (
      <AlignContent key={recommendation.name}>
        <OptionButton
          link={recommendation.link}
          fieldName={`${fieldName}.${recommendation.name}`}
        />
        <TextName>{recommendation.name}</TextName>
      </AlignContent>
    ))}
  </Container>
);

export default memo(RecommendationsList);
