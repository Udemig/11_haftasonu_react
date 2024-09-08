const Error = ({ info }) => {
  return (
    <div className=" text-center flex flex-col gap-5 my-20">
      <h2>Üzgünüz, bir şeyler ters gitti</h2>
      <p>{info}</p>
    </div>
  );
};

export default Error;
