import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Login = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-250px)] max-w-6xl mx-auto">
        <Outlet></Outlet>

        <section className="my-14">
          <div className="hero bg-sky-50 rounded-md w-full min-h-screen">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-semibold text-center">LOGIN</h1>
                <p className="py-6 text-center">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account,{" "}
                  <br></br> and for other purposes described in our privacy
                  policy.
                </p>
              </div>
              <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body">
                  <form className="fieldset my-7">
                    <label className="fieldset-label">Email</label>
                    <input
                      type="email"
                      className="input w-full"
                      placeholder="Email"
                    />
                    <label className="fieldset-label">Password</label>
                    <input
                      type="password"
                      className="input w-full"
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn bg-[#B5BE2D] text-white mt-4">
                      Login
                    </button>
                    <p className="text-center pt-3">
                      Don't Have An Account?
                      <span className="text-blue-600 underline">
                        <Link to="/register">Register</Link>
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
