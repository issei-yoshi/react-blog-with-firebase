import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      <Link to="/createpost">
      <FontAwesomeIcon icon={faFilePen} />
        Post
      </Link>
      <Link to="/login">
      <FontAwesomeIcon icon={faArrowRightToBracket} />
        Login
      </Link>
    </nav>
  )
}

export default Navbar