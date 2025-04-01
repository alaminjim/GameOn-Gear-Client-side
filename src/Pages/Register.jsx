import { useContext } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, profileUser, setUser, createGoogleUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error("one uppercase,one lowerCase and 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Register successful");

        profileUser({ displayName: name, photoURL: photo })
          .then(() => {})
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handelGoogle = () => {
    createGoogleUser()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Log in successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
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
                  <button
                    onClick={handelGoogle}
                    className="btn bg-white hover:bg-[#B5BE2D] hover:text-white text-black border-[#e5e5e5]"
                  >
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
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
