import Head from 'next/head';
import { MetaProps } from '../types';

import React from 'react';

const defaultSEO = {
  title: 'Coastal Stay - Pembrokeshire Camping',
  description:
    'Escape to a beautifully finished campsite small-holding located in a National Trust Conservation area with uninterrupted views of the north Pembrokeshire Coast National Park.',
  image:
    '//dax2lgcd0wbaz.cloudfront.net/assets/sofar-share-13e30a152beb75c98c298a8ade6a511fe8514405783b2c38a4bdc116c1bfa2c6.jpg',
  siteName: 'Coastal Stay',
  url: 'https://www.coastalstay.co.uk',
};

const Meta: React.SFC<MetaProps> = ({ title, description, image, url }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description || defaultSEO.description} />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={title} />
    <meta
      property="og:description"
      content={description || defaultSEO.description}
    />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content={url || defaultSEO.url} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_GB" />

    <meta name="twitter:title" content={title} />
    <meta
      name="twitter:description"
      content={description || defaultSEO.description}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={title} />

    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="//dax2lgcd0wbaz.cloudfront.net/assets/favicon-ef96c1978fef7b3c2b5c6a66bb7d75bc856702cfe7dd688fb6e4a6e609eca897.ico"
    />
  </Head>
);

export default Meta;
