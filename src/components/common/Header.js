import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Context from "../../context";

const Header = () => {
  const { user, setUser} = useContext(Context);

  const history = useHistory();

  const logout = async () => {
    const isLogout = window.confirm("Do you want to get logged out ?");
    if (isLogout) {
      removeAuthedInfo();
      history.push("/login");
    }
  };

  const removeAuthedInfo = () => {
    setUser(null);
    localStorage.removeItem("auth");
  };

  return (
    <div className="header">
      <div className="header__left">
        <span>Uber Clone</span>
        {user && (
          <div className="header__right">
            <img src={user.image} alt={user.email} />
            <span>Hello, {user.fullname}</span>
          </div>
        )}
      </div>
      <span className="header__logout" onClick={logout}>
        <span>Logout</span>
      </span>
    </div>
  );
};

export default Header;
