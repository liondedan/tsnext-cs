import Head from 'next/head';
import { MetaProps } from '../types';

import React from 'react';

const defaultSEO = {
  title: 'Pembrokeshire Camping: Coastal Stay',
  description:
    'Escape to a beautifully finished campsite small-holding located in a National Trust Conservation area with uninterrupted views of the north Pembrokeshire Coast National Park.',
  image:
    'https://www.coastalstay.co.uk/walking-cycling-pembrokeshire.png',
  siteName: 'Coastal Stay',
  url: 'https://www.coastalstay.co.uk',
};

const Meta: React.SFC<MetaProps> = ({ title, description, image, url }) => (
  <Head>
    <title>{title}</title>
    <meta property="keywords" content={title || defaultSEO.title} />
    <meta name="description" content={description || defaultSEO.description} />
    <meta property="og:title" content={title || defaultSEO.title} />
    <meta property="og:site_name" content="Coastal Stay" />
    <meta
      property="og:description"
      content={description || defaultSEO.description}
    />
    <meta property="og:image" content={image || defaultSEO.image} />
    <meta property="og:image:width" content="640" />
    <meta property="og:image:height" content="426" />
    <meta property="og:url" content={url || defaultSEO.url} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_GB" />

    <meta name="twitter:title" content={title || defaultSEO.title} />
    <meta name="twitter:site" content="@staycoastal"></meta>
    <meta
      name="twitter:description"
      content={description || defaultSEO.description}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={title || defaultSEO.title} />
    <meta name="twitter:image" content={image || defaultSEO.image} />

    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="/favicon.ico"
    />
  </Head>
);

export default Meta;
