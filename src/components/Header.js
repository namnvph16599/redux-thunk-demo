import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localSorage";
import { getCategory } from "../features/CategorySlice";
import getProducts from "../features/ProductsSlice";
const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const category = useSelector((data) => data.category.value);
  const { user } = getLocalStorage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    navigate(`/searchPages/${data.contentSearch}`);
  };
  // dispatch(getCategory())
  console.log(category);
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <div className="relative bg-white bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div
          className="
    w-full
    flex
    items-center
  "
        >
          <div className="px-4 w-50 max-w-full">
            <a href="/" className="navbar-logo w-full block py-5">
              <img
                src="https://bizweb.sapocdn.net/100/438/408/themes/848101/assets/logo.svg?1649215124772"
                alt="logo"
                className="h-8 w-auto sm:h-10"
              />
            </a>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <nav
                id="navbarCollapse"
                className="
              absolute
              py-5
              lg:py-0 lg:px-4
              xl:px-6
              bg-white
              lg:bg-transparent
              shadow-lg
              rounded-lg
              max-w-[250px]
              w-full
              lg:max-w-full lg:w-full
              right-4
              top-full
              hidden
              lg:block lg:static lg:shadow-none
            "
              >
                <ul className="blcok lg:flex">
                  <li className="relative group">
                    <Link
                      to="/"
                      className="ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-[#fcaf17]
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative group">
                    <p
                      className="text-base text-dark
                  lg:text-dark-400
                  font-bold
                  lg:group-hover:opacity-70
                  lg:group-hover:text-[#fcaf17]
                  group-hover:text-primary
                  py-2
                  lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                  flex
                  mx-8
                  lg:mr-0 lg:ml-8
                  xl:ml-12
                  relative
                  after:absolute
                  after:w-2
                  after:h-2
                  after:border-b-2
                  after:border-r-2
                  after:border-current
                  after:rotate-45
                  lg:after:right-0
                  after:right-1
                  after:top-1/2
                  after:-translate-y-1/2
                  after:mt-[-2px]"
                    >
                      Catetory
                    </p>
                    <div className="box-category submenu relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
                      {category?.map((item) => {
                        return (
                          <Link
                            key={item._id}
                            to={`/category/${item._id}`}
                            className="block text-sm text-body-color font-semibold rounded hover:text-primary hover:text-[#fcaf17] py-[10px] px-4"
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </li>
                  <li className="relative group">
                    <Link
                      to="/products"
                      className="ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-[#fcaf17]
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      to="/products"
                      className="ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-[#fcaf17]
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0"
                    >
                      About
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      to="/products"
                      className="ud-menu-scroll
                    text-base text-dark
                    lg:text-dark-400
                    font-bold
                    lg:group-hover:opacity-70
                    lg:group-hover:text-[#fcaf17]
                    group-hover:text-primary
                    py-2
                    lg:py-6 lg:inline-flex lg:px-0
                    flex
                    mx-8
                    lg:mr-0"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <form
                method=""
                onSubmit={handleSubmit(onSubmit)}
                id="form-search"
              >
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <input
                    type="text"
                    {...register("contentSearch")}
                    id="contentSearch"
                    name="contentSearch"
                    className="py-2 text-sm text-white border border-solid  border-yellow-300 rounded-md pl-10 focus:outline-none focus:bg-white   focus:text-gray-900"
                    placeholder="Search..."
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button className="p-1 focus:outline-none focus:shadow-outline">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {user ? (
              <li
                className="relative group list-none
                            no-underline"
              >
                <span className="focus:outline-none  w-4 h-4 bg-cover bg-center rounded-md">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSm8vsp1sAvwrIdzz9MaqjVxA83f1eqYufrw&usqp=CAU"
                    alt="girl"
                    className="inline-block h-8 w-8 overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                  />
                </span>
                <p
                  className="text-base text-dark
                            
                  lg:text-dark-400
                  font-bold
                  lg:group-hover:opacity-70
                  lg:group-hover:text-[#fcaf17]
                  group-hover:text-primary
                  py-2
                  lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                  flex
                  mx-8
                  ml-4
                  lg:mr-0
                  relative
                  after:absolute
                  after:w-2
                  after:h-2
                  after:border-b-2
                  after:border-r-2
                  after:border-current
                  after:rotate-45
                  lg:after:right-0
                  after:right-1
                  after:top-1/2
                  after:-translate-y-1/2
                  after:mt-[-2px]"
                >
                  {user?.name}
                </p>
                <div className="box-category submenu relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
                  <Link
                    to={`/update-profile/${user.id}`}
                    className="block text-sm text-body-color font-semibold rounded hover:text-primary hover:text-[#fcaf17] py-[10px] px-4"
                  >
                    Update Profile
                  </Link>
                  <Link
                    to="#"
                    className="block text-sm text-body-color font-semibold rounded hover:text-primary hover:text-[#fcaf17] py-[10px] px-4"
                  >
                    Change password
                  </Link>
                  <Link
                    to="#"
                    className="block text-sm text-body-color font-semibold rounded hover:text-primary hover:text-[#fcaf17] py-[10px] px-4"
                  >
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
              <li className="box-acount relative group submenu-item list-none">
                <Link to="signin">
                  <a
                    href="/signin"
                    className="
        text-base
        font-medium
        text-dark-400
        hover:opacity-70
        py-3
        px-7
        loginBtn
      "
                  >
                    Sign In
                  </a>
                </Link>
                <Link to="signup">
                  <a
                    href="/signup"
                    className="
        text-base
        font-medium
        text-white
        bg-[#fcaf17]
        rounded-lg
        py-3
        px-6
        hover:bg-opacity-90 hover:text-dark
        signUpBtn
        duration-300
        ease-in-out
      "
                  >
                    Sign Up
                  </a>
                </Link>
              </li>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
