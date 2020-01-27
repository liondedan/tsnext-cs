import Header from './header';
import Head from './head';
import Footer from './footer';
import { MetaProps } from '../types';

const withLayout = (Page: any, meta: MetaProps) => {
  return () => (
    <main>
      <Head {...meta} />
      <Header />
      <Page />
      <Footer />
    </main>
  );
};

export default withLayout;
