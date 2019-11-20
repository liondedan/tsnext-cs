import Button from '@material-ui/core/Button';
import { NextPage } from 'next';
import Link from 'next/link';

import withLayout from '../components/withLayout';

const a: NextPage = () => (
  <>
    <h1>cunt TV Shows</h1>
    <ul>
      <>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
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

const pageMeta = {
  title: 'Doggggggg',
  description: 'cat',
};

export default withLayout(a, pageMeta);
