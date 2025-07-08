export const ShowIncrement = ({onIncrement }) => {
  return (
    console.log('Me volvi a generar'),
    <button className="btn btn-primary"onClick={() => {onIncrement(2); }}>Incrementar</button>
  );
};
