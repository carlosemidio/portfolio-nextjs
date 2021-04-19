import styled, { css } from 'styled-components';

export const GalleryBox = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    li:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media (max-width: 767px) {
    li:nth-child(2n) {
      margin-right: 0;
    }
  }

  li {
    list-style: none;
    width: 24%;
    height: auto;

    @media (max-width: 767px) {
      width: 49.5%;
    }
    margin-right: 1%;
  }
`;
export const GalleryIMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  cursor: pointer;
`;
