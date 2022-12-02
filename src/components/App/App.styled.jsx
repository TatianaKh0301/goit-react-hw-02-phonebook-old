import styled from '@emotion/styled';
import bgImage from 'image/bgImage.jpg';

export const Container = styled.div`
    height: 100vh;
    width: 90vw;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    color: black;
    padding: 50px;
    margin: 0 auto;
`;

export const TitleApplication = styled.h1`
    font-size: 50px;
    text-align: center;
    margin-bottom: 20px;
`;