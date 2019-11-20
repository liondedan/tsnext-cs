import Link from 'next/link';
import Href from './link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <Href>hello</Href>
    </Link>
    <Link href="/a">
      <a style={linkStyle}>A</a>
    </Link>
    <Link href="/b">
      <a style={linkStyle}>B</a>
    </Link>
    <Link href="/b">
      <a style={linkStyle}>C</a>
    </Link>
  </div>
);

export default Header;
