import PropTypes from 'prop-types';

const Titulo = ({ title = "colocando valor directo desde la desestructuracion" }) => {
   console.log("renderizando Titulo con:", title);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
Titulo.propTypes = {
  title: PropTypes.string.isRequired
};

export default Titulo;
