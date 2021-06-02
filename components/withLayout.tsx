import Header from './header';
import Head from './head';
import Footer from './footer';
import { MetaProps } from '../types';

const withLayout = (Page: any, meta: MetaProps, hideFooterContent = false) => {
  return () => (
    <main>
      <Head {...meta} />
      <Header />
      <Page />
      <Footer hideFooterContent={hideFooterContent} />
    </main>
  );
};

export default withLayout;
