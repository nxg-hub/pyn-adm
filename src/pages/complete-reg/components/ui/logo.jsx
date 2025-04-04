import logo from '../../../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="xl:py-10 py-10 flex justify-center">
      <Link href={'/'}>
        <img src={logo} alt="logo" className="w-60" />
      </Link>
    </div>
  );
};

export default Logo;
