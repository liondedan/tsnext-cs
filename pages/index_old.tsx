import fetch from 'isomorphic-unfetch';

const Index = () => (
  <>
    <h1>Batman TV Shows</h1>
  </>
);

Index.getInitialProps = async function() {
  const port: any = process.env.PORT || 3000;
  const res = await fetch(`http://localhost:${port}/api/a`);
  const data = await res.json();
  console.log(data.a);
  console.log(`Show data fetched. Count: ${data}`);
  return { data };
};

export default Index;
