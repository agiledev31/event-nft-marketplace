import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { withCookies } from "react-cookie";
import { useUserContext } from "../../context/UserContext";
import config from "../../helper/config";

const Header = (props: any) => {
  const { cookies } = props;
  const { userInfo, setUserInfo } = useUserContext();
  const navigate = useNavigate();

  const handleSignout = () => {
    cookies.remove("userInfo");
    setUserInfo(null);
    navigate("/");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/">
            <img src="/img/logo.svg" alt="" />
          </Link>
        </div>

        <form action="#" className="header__search">
          <input
            type="text"
            placeholder="Search items, collections, and creators"
          />
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
            </svg>
          </button>
          <button type="button" className="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
            </svg>
          </button>
        </form>

        <div className="header__menu">
          <ul className="header__nav">
            <li className="header__nav-item">
              <Link to="/">
                <div id={"home"} className="header__nav-link">
                  Home
                </div>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/explorer">
                <div id={"explorer"} className="header__nav-link">
                  Explorer
                </div>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/blog">
                <div id={"blog"} className="header__nav-link">
                  News
                </div>
              </Link>
            </li>

            {userInfo && userInfo.user.user_type == "ADMIN" ? (
              <li className="header__nav-item">
                <Link to="/article/create">
                  <div id={"create"} className="header__nav-link">
                    Create Article
                  </div>
                </Link>
              </li>
            ) : (
              <></>
            )}
            {userInfo && userInfo.user.user_type == "ADMIN" ? (
              <li className="header__nav-item">
                <Link to="/event/eventcard/create">
                  <div id={"create"} className="header__nav-link">
                    Create Event
                  </div>
                </Link>
              </li>
            ) : (
              <></>
            )}
            {userInfo && userInfo.user.user_type == "ADMIN" ? (
              <li className="header__nav-item">
                <Link to="/message/create">
                  <div id={"create"} className="header__nav-link">
                    Create Email
                  </div>
                </Link>
              </li>
            ) : (
              <></>
            )}
            {userInfo && userInfo.user.user_type == "ADMIN" ? (
              <li className="header__nav-item">
                <Link to="/admin/users">
                  <div id={"create"} className="header__nav-link">
                    Users
                  </div>
                </Link>
              </li>
            ) : (
              <></>
            )}
            <></>

            {/* <li className="header__nav-item">
                            <a className="header__nav-link header__nav-link--menu" href="#" role="button"
                                id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"/>
                                </svg>
                            </a>

                            <ul className="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenu2">
                                <li>
                                    <Link to="/activity">Activity</Link>
                                </li>
                                <li>
                                    <Link to="/collection">Collection</Link>
                                </li>
                                <li>
                                    <Link to="/create">Create</Link>
                                </li>
                                <li>
                                    <Link to="/author">Author</Link>
                                </li>
                                <li>
                                    <Link to="/authors">Authors</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Contacts</Link>
                                </li>
                                <li>
                                    <Link to="/Signin">Sign in</Link>
                                </li>
                                <li>
                                    <Link to="/Signup">Sign up</Link>
                                </li>
                                <li>
                                    <Link to="/forget">Forgot password</Link>
                                </li>
                                <li>
                                    <Link to="/Error">404 Page</Link>
                                </li>
                                <li>
                                    <Link to="/privacy">Privacy policy</Link>
                                </li>
                            </ul>
                        </li> */}
          </ul>
        </div>

        <div className="header__actions">
          <div className="header__action header__action--search">
            <button className="header__action-btn" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
              </svg>
            </button>
          </div>

          <div className="header__action header__action--profile">
            {userInfo ? (
              <React.Fragment>
                <a
                  className="header__profile-btn header__profile-btn--verified"
                  href="#"
                  role="button"
                  id="dropdownMenuProfile"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {userInfo.user.avatar ? (
                    <img
                      src={`${config.API_BASE_URL}/api/upload/get_file?path=${userInfo.user.avatar}`}
                      alt=""
                    />
                  ) : (
                    <img src="img/avatars/avatar5.jpg" alt="" />
                  )}

                  <div>
                    <p>{userInfo.user.name}</p>
                    {userInfo.user.user_type == "ADMIN" ? (
                      <span>Admin User</span>
                    ) : (
                      <span>Normal User</span>
                    )}
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                  </svg>
                </a>

                <ul
                  className="dropdown-menu header__profile-menu"
                  aria-labelledby="dropdownMenuProfile"
                >
                  <li>
                    <Link to="/author">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" />
                      </svg>
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        userInfo && userInfo.user.user_type == "ADMIN"
                          ? "/admin/activity"
                          : "/activity"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
                      </svg>
                      <span>Activity</span>
                    </Link>
                  </li>
                  {/* <li><Link to="/create">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z"/>
                                        </svg>
                                        <span>Add Asset</span></Link></li> */}
                  <li>
                    <Link to="/author">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z" />
                      </svg>
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li>
                    <a onClick={handleSignout}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" />
                      </svg>
                      <span>Sign out</span>
                    </a>
                  </li>
                </ul>
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
        </div>

        <button className="header__btn" type="button">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default withCookies(Header);
