import React from 'react';

// import { AppHeader } from '../components/AppHeader/AppHeader';
import { AppHeader } from '../components/AppHeader/AppHeader';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
