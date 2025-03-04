import React from 'react';
import '@/styles/minimalink.css';
import { ArrowRight, Bell, Briefcase, FolderOpen, Home, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';

export default function page() {
  return (
    <>
      <div className="minimalink pattern-lines rounded-lg border-[.5px] border-black">
        <div className="container">
          {/* <!-- Header --> */}
          <header>
            <nav>
              <a href="#" className="btn2 btn-round">
                <Home />
              </a>
              <a href="#" className="btn2 btn-icon">
                <Bell />
                Subscribe
              </a>
            </nav>
          </header>
          {/* <!-- Content --> */}
          <main className="content">
            {/* <!-- Profile --> */}
            <section className="profile">
              <div className="profile__avatar">
                {/* <!-- Profile Image/Avatar --> */}
                <img
                  src="/images/brooke-cagle-pPtLSKseW78-unsplash.jpg"
                  alt="Profile avatar"
                  width="250px"
                />
              </div>
              {/* <!-- Your Name --> */}
              <h1 className="profile__name">Jono Santoso</h1>
              {/* <!-- About you --> */}
              <p className="profile__desc">
                Hi call me Jono. Im a digital creator that constantly exploring
                new frontiers in the digital landscape.
              </p>
              {/* <!-- Social Links -->
        <!-- All icons are from FontAwesome.com -->
        <!-- You can get the icons as you need from here https://fontawesome.com/icons--> */}
              <div className="profile__social">
                <div className="links">
                  <a href="#" title="Say Hi" className="link-icon">
                    <Mail />
                  </a>
                  <a href="#" title="LinkedIn" className="link-icon">
                    <Linkedin />
                  </a>
                  <a href="#" title="X" className="link-icon">
                    <Twitter />
                  </a>
                  <a href="#" title="YouTube" className="link-icon">
                    <Youtube />
                  </a>
                </div>
              </div>
            </section>
            {/* <!-- Other links --> */}
            <section className="links-wrapper">
              <div className="links">
                <div className="links-grid">
                  <div className="link-card pattern-wavy">
                    <div className="link-card__header">
                      <Briefcase />
                      <ArrowRight />
                    </div>
                    <h3>My Personal Website</h3>
                    <a href="#"></a>
                  </div>
                  <div className="link-card pattern-wavy">
                    <div className="link-card__header">
                      <FolderOpen />
                      <ArrowRight />
                    </div>
                    <h3>My Portfolio</h3>
                    <a href="#"></a>
                  </div>
                </div>
                <div className="links-list">
                  <div className="link-cta-block">
                    <div>
                      <h3>Get Them</h3>
                      <p>New e-book out!</p>
                    </div>
                    <a href="#" className="btn2 btn-sm btn-black">
                      Buy Now
                    </a>
                  </div>
                  <a href="#" className="link-btn">
                    Sign-up for my newsletter
                  </a>
                </div>
              </div>
              <div className="links">
                <h2 className="links-title">Support</h2>
                <div className="links-list">
                  <a href="#" className="link-btn">
                    Buy me a coffee ☕️
                  </a>
                </div>
              </div>
            </section>
            {/* <!-- END OF: CONTENT --> */}
          </main>
          <footer>
            {/* <!-- Change the name and your website URL --> */}
            <a href="https://nurulid.gumroad.com/l/minimalink" target="_blank">
              ⓒ 2024 <span className="underline">MinimaLink</span> Made with 💜
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
