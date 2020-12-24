import { IconContext } from 'react-icons';

const Icons = ({ size, color, children }) => (
  <IconContext.Provider value={{ style: { fontSize: size, color } }}>
    <div>
      {children}
    </div>
  </IconContext.Provider>
);

Icons.defaultProps = {
  size: '20px',
  color: '#ffffff',
};

export default Icons;
