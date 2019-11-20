import Header from './header';

const layoutStyle = {};

const Layout = (props: any) => (
  <main style={layoutStyle}>
    <Header />
    {props.children}
  </main>
);

export default Layout;
