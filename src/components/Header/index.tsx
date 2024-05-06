import { FiPlusSquare } from 'react-icons/fi';

import { Container } from './styles';
// const logo = require("./logo.svg") as string;
// const { default: logo } = require('./logo.svg') as { default: string };
// import { ReactComponent as logo} from '../../assets/logo.svg';
import Logo from "../../assets/logo.svg";


function Header({openModal}: {openModal: () => void}) {
  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
};

export default Header;
