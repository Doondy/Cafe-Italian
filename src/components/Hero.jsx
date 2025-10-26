import React from 'react'


export default function Hero() {
return (
<section className="hero">
<div className="container hero-grid">
<div className="hero-copy">
<h2 className="eyebrow">Welcome to</h2>
<h1 className="hero-title">Cafe Italian</h1>
<p className="hero-desc">Handmade pasta, fresh herbs, and slow-simmered sauces. Taste the tradition.</p>
<div className="hero-actions">
<button className="btn btn-primary">View Menu</button>
<button className="btn">Order Online</button>
</div>
</div>
<div className="hero-media" role="img" aria-label="Delicious pasta bowl">
{/* Replace with exported hero image from Figma in public/placeholder-hero.jpg */}
<img src="/placeholder-hero.jpg" alt="Pasta" className="hero-image" />
</div>
</div>
</section>
)
}