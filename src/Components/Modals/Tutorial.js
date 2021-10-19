function Tutorial(props) {
  const { data, step, handleModal } = props;
  return (
    <div>
      <h1>{data[step]}</h1>
    </div>
  );
}

export default Tutorial;
