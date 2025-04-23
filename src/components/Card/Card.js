import React from 'react';
import { StyledCard, StyledCardImg, StyledCardBody, StyledCardTitle, StyledCardText  } from './Card.styled';

const Card = ({ children, width }) => {
  return <StyledCard width={width}>{children}</StyledCard>
};

const CardImg = ({ src, alt }) => {
  return <StyledCardImg src={src} alt={alt} />
};

const CardBody = ({ children }) => {
  return <StyledCardBody>{ children }</StyledCardBody>
}

const CardTitle = ({ children }) => {
  return <StyledCardTitle>{ children }</StyledCardTitle>
}

const CardText = ({ children }) => {
  return <StyledCardText>{children}</StyledCardText>;
};

Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;