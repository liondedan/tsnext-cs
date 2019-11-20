import Header from './header';
import Head from './head';
import { MetaProps } from '../types';

const withLayout = (Page: any, meta: MetaProps) => {
  return () => (
    <main>
      <Head {...meta} />
      <Header />
      <Page />
      <h1>hello</h1>
    </main>
  );
};

export default withLayout;
