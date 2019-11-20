// import React from 'react'
// import styled from 'styled-components'

// const Title = styled.h1`
//   color: red;
//   font-size: 50px;
// `

// import Layout from '../components/layout';
import withLayout from '../components/withLayout';
import { NextPage } from 'next';
import Link from 'next/link';

const a: NextPage = () => (
  <>
    <h1>cunt TV Shows</h1>
    <ul>
      <>
        <Link href="/">
          <li>Cat</li>
        </Link>
        <Link href="/b">
          <li>Cat</li>
        </Link>
      </>
    </ul>
  </>
);

export default withLayout(a);
