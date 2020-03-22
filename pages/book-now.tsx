import React from 'react';
import ContainerWrap from '../components/containerWrap';
import FeatureLogo from '../components/featuedLogo';
import Banner from '../components/banner';
import BookForm from './bookForm';
import withLayout from '../components/withLayout';

const index: React.SFC = () => {
  return (
    <>
      <Banner
        height={60}
        title="Get in touch"
        subtitle="Award Winning Campsite"
        body=""
        ctaText="Book Now"
        ctaLink="/contact-us"
        url="camping-pembrokeshire-header.jpg"
      />
      <FeatureLogo />
      <ContainerWrap>
        <BookForm />
      </ContainerWrap>
    </>
  );
};

const MetaData = {
  title: 'Get in touch',
};

export default withLayout(index, MetaData);
