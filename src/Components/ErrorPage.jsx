import error from "../assets/404.gif";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-[#B5BE2D] text-6xl text-center mt-6">
        <p>NOT FOUND</p>
      </div>
      <img className="lg:ml-64" src={error} alt="" />
    </div>
  );
};

export default ErrorPage;
