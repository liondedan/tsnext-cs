import Header from './header';

const layoutStyle = {};

const withLayout = (Page: any) => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  );
};

export default withLayout;
