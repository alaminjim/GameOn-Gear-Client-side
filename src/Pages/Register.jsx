import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Link, Outlet } from "react-router-dom";

const Register = () => {
  const handelRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-250px)] max-w-6xl mx-auto">
        <Outlet></Outlet>

        <section>
          <div className="hero bg-sky-100 min-h-full my-16">
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
              <div className="card-body">
                <p className="text-center underline text-2xl font-semibold">
                  REGISTER NOW!
                </p>
                <form onSubmit={handelRegister} className="fieldset">
                  <label className="fieldset-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    placeholder="Name"
                  />
                  <label className="fieldset-label">PhotoURL</label>
                  <input
                    type="text"
                    name="photo"
                    className="input w-full"
                    placeholder="PhotoURL"
                  />
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email"
                  />
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn bg-[#B5BE2D] text-white mt-4">
                    Register
                  </button>
                  <p className="text-center pt-3">
                    Al Ready Have An Account?
                    <span className="text-blue-600 underline">
                      <Link to="/login">Log in</Link>
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
