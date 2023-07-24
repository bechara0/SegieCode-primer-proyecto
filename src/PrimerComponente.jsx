import Proptypes from "prop-types";

export const PrimerComponente = ({ titulo, subtit }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <h2>{1 + subtit}</h2>
    </>
  );
};

PrimerComponente.Proptypes = {
  titulo: Proptypes.string.isRequired,
  subtit: Proptypes.number.isRequired,
};

PrimerComponente.defaultProps = {
  titulo: "Poronga",
  subtit: 4,
};
