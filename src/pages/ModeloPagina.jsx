const ModeloPagina = ({ children, id }) => {
  return (
    <section className="pageSection" id={id}>
      {children}
    </section>
  );
};

export default ModeloPagina;
