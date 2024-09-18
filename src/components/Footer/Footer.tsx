import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/">
          <img src="src/assets/museum-logo-black.svg" alt="logo" />
        </Link>
        <Link to="https://www.modsen-software.com/">
          <img src="src/assets/logo-modsen.svg" alt="logo" />
        </Link>
      </div>
    </footer>
  );
};
