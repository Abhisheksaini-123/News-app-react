import React from 'react'

export default function Navbar() {
  return (
    <div>
   <nav classname="navbar navbar-expand-lg navbar-light bg-light">
  <div classname="container-fluid">
    <a classname="navbar-brand" href="#">Navbar</a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarNav">
      <ul classname="navbar-nav">
        <li classname="nav-item">
          <a classname="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">Features</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">Pricing</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
