function Error({ statusCode }) {
  return (
    <div
      className='text-white font-Cocon font-bold text-3xl flex flex-col justify-center
        items-center h-screen text-center'
    >
      <h2>
        {"Ooops c'è stato un errore"}
        <br></br>...
      </h2>
      <button
        className='text-black bg-white rounded-xl px-5 py-2 mt-10'
        type='button'
        onClick={() => {
          localStorage.clear();
          location.href = "/";
        }}
      >
        Riprova
      </button>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
