import { FC } from 'react';

import './Header.css';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return <h1 className="header">{title}</h1>;
};

export default Header;
