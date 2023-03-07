import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./navbar.module.scss";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleActive = (event) => {
    if (event.target.className.includes("link")) {
      console.log(styles.link);
      event.target.classList.remove(styles.link);
    } else {
      event.target.classList.add(styles.link);
    }
    const allLinks = document.querySelectorAll(`.${styles.link}`);

    allLinks.forEach((e) => {
      return e !== event.target ? e.classList.remove(styles.link) : null;
    });
  };
  useEffect(() => {
    if (window.location.pathname === "/") {
      setActive(true);
    }
  }, []);

  return (
    <nav>
      <ul className="flex justify-end gap-3 mr-6">
        <li>
          <Link
            onClick={(e) => handleActive(e)}
            className={active ? styles.link : null}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/details/:id" onClick={(e) => handleActive(e)}>
            Review Details
          </Link>
        </li>
        <li>
          <Link to="/category/" onClick={(e) => handleActive(e)}>
            Category
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
