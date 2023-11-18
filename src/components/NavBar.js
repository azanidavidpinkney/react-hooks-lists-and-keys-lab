import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksDisplay = links.map((link) => {
    const href = `#${link}`;
    return (
      <a key={link} href={href}>{link}</a>
    )
  })


  return (
    <nav>
      {linksDisplay}
    </nav>
  )

}

export default NavBar;
