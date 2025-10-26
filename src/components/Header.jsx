import React from 'react'
import logo from "../assets/logo.png";



export default function Header() {
return (
<header className="site-header">
<div className="container header-inner">
<div className="brand">
<img src={logo} alt="Cafe Italian logo" className="logo" />
<div className="brand-text">
<h1 className="brand-title">Cafe Italian</h1>
<p className="brand-sub">Authentic Italian Flavors</p>
</div>
</div>
<nav className="nav">
<button className="nav-btn">Menu</button>
<button className="nav-btn nav-primary">Reserve</button>
</nav>
</div>
</header>
)
}