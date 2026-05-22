import dynamic from 'next/dynamic';

const ClientInitializer = dynamic(
  () => import('./components/ClientInitializer'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <div id="preloader" className="preloader">
        <div className="preloader__content">
          <p className="preloader__text font-mono"></p>
          <div className="preloader__bar-track">
            <div className="preloader__bar-fill"></div>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      {/* Navigation */}
      <nav className="nav" id="mainNav">
        <div className="nav__inner">
          <div className="nav__brand">
            <a href="#" className="nav__monogram">AJ</a>
            <span className="nav__name font-mono">Aman Jha</span>
          </div>
          <div className="nav__links" id="navLinks">
            <a href="#work" className="nav__link font-mono" data-magnetic="">Work</a>
            <a href="#about" className="nav__link font-mono" data-magnetic="">About</a>
            <a href="#credentials" className="nav__link font-mono" data-magnetic="">Signal</a>
            <a href="#contact" className="nav__link font-mono" data-magnetic="">Contact</a>
          </div>
          <button className="nav__hamburger" id="navHamburger" aria-label="Toggle menu">
            <span className="nav__hamburger-line"></span>
            <span className="nav__hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobileMenu">
        <a href="#work" className="mobile-menu__link">Work</a>
        <a href="#about" className="mobile-menu__link">About</a>
        <a href="#credentials" className="mobile-menu__link">Signal</a>
        <a href="#contact" className="mobile-menu__link">Contact</a>
      </div>

      {/* Global Background */}
      <canvas id="heroCanvas" className="global-canvas"></canvas>
      <div className="global-noise"></div>

      {/* Main Content */}
      <main id="mainContent">
        {/* HERO */}
        <section className="hero" id="hero">
          <div className="container hero__container">
            <div className="hero__content">
              <p className="hero__label font-mono">
                <span className="reveal-wrap"><span className="reveal-inner">AMAN JHA &nbsp;·&nbsp; SOFTWARE ENGINEER &nbsp;·&nbsp; MUMBAI</span></span>
              </p>
              <h1 className="hero__heading">
                <span className="hero__line"><span className="reveal-wrap"><span className="reveal-inner">BUILDING SYSTEMS.</span></span></span>
                <span className="hero__line"><span className="reveal-wrap"><span className="reveal-inner">SCALING LOGIC.</span></span></span>
              </h1>
              <p className="hero__sub font-mono">
                <span className="hero__sub-line">&gt; Full-stack engineer &amp; founder, Avenra.</span>
                <span className="hero__sub-line">&nbsp;&nbsp;Designing systems that handle real load.</span>
              </p>
              <div className="hero__cta">
                <a href="#work" className="btn btn--primary font-mono" data-magnetic="">
                  <span>VIEW MY WORK</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </a>
                <a href="https://avenra-flow.vercel.app" target="_blank" rel="noopener" className="btn btn--secondary font-mono" data-magnetic="">
                  <span>AVENRA FLOW</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </a>
              </div>
            </div>
            <div className="hero__scroll-indicator">
              <div className="hero__scroll-line"></div>
              <span className="font-mono">SCROLL</span>
            </div>
          </div>
        </section>

        {/* WORK / THE ARMORY */}
        <section className="work" id="work">
          <div className="container work__header">
            <span className="section-label font-mono">{'// 01. WORK'}</span>
            <h2 className="section-heading">The Armory.</h2>
            <p className="section-sub font-mono">Three systems. Built to handle real problems.</p>
          </div>
          <div className="work__pinned" id="workPinned">
            <div className="work__progress-track">
              <div className="work__progress-bar" id="workProgress"></div>
            </div>
            <div className="work__track" id="workTrack">
              {/* Card 1: Avenra Flow */}
              <article className="project-card project-card--flagship" data-accent="cyan" data-cursor-text="VIEW">
                <div className="project-card__visual">
                  <div className="project-card__mockup project-card__mockup--avenra">
                    <div className="mockup-dashboard">
                      <div className="mockup-dashboard__header">
                        <div className="mockup-dot mockup-dot--red"></div>
                        <div className="mockup-dot mockup-dot--yellow"></div>
                        <div className="mockup-dot mockup-dot--green"></div>
                        <span className="font-mono" style={{color:'var(--color-text-muted)',fontSize:'10px',marginLeft:'12px'}}>avenra-flow/dashboard</span>
                      </div>
                      <div className="mockup-dashboard__body">
                        <div className="mockup-sidebar">
                          <div className="mockup-sidebar__item active"></div>
                          <div className="mockup-sidebar__item"></div>
                          <div className="mockup-sidebar__item"></div>
                          <div className="mockup-sidebar__item"></div>
                        </div>
                        <div className="mockup-main">
                          <div className="mockup-stat-row">
                            <div className="mockup-stat"><span className="mockup-stat__val">2,847</span><span className="mockup-stat__label font-mono">Invoices</span></div>
                            <div className="mockup-stat"><span className="mockup-stat__val">₹14.2L</span><span className="mockup-stat__label font-mono">Processed</span></div>
                            <div className="mockup-stat"><span className="mockup-stat__val">99.2%</span><span className="mockup-stat__label font-mono">Accuracy</span></div>
                          </div>
                          <div className="mockup-table">
                            <div className="mockup-table__row mockup-table__row--header"><span>Invoice</span><span>Amount</span><span>Status</span></div>
                            <div className="mockup-table__row"><span>INV-2847</span><span>₹1,24,500</span><span className="status-pill status-pill--success">Extracted</span></div>
                            <div className="mockup-table__row"><span>INV-2846</span><span>₹89,200</span><span className="status-pill status-pill--success">Extracted</span></div>
                            <div className="mockup-table__row"><span>INV-2845</span><span>₹2,10,000</span><span className="status-pill status-pill--pending">Processing</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-card__info">
                  <div className="project-card__top-row">
                    <h3 className="project-card__title">AVENRA FLOW</h3>
                    <div className="project-card__links">
                      <a href="https://avenra-flow.vercel.app" target="_blank" rel="noopener" className="project-card__link font-mono">LIVE <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
                      <a href="https://github.com/infinix10552-ship-it/avenra-flow" target="_blank" rel="noopener" className="project-card__link font-mono">GITHUB <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
                    </div>
                  </div>
                  <p className="project-card__desc">Automated invoice &amp; expense extraction platform built on a microservices architecture.</p>
                  <p className="project-card__quote font-mono">&quot;Eliminates manual data-entry for finance workflows at scale. Zero human touchpoints in the extraction loop.&quot;</p>
                  <div className="project-card__tags">
                    <span className="tag font-mono">Spring Boot</span>
                    <span className="tag font-mono">React.js</span>
                    <span className="tag font-mono">Python</span>
                    <span className="tag font-mono">Microservices</span>
                  </div>
                </div>
              </article>

              {/* Card 2: Vision Parse */}
              <article className="project-card" data-accent="green" data-cursor-text="VIEW">
                <div className="project-card__visual">
                  <div className="project-card__mockup project-card__mockup--vision">
                    <div className="mockup-split">
                      <div className="mockup-split__left">
                        <div className="mockup-doc">
                          <div className="mockup-doc__line w80"></div>
                          <div className="mockup-doc__line w60"></div>
                          <div className="mockup-doc__line w90"></div>
                          <div className="mockup-doc__line w40"></div>
                          <div className="mockup-doc__line w70"></div>
                          <div className="mockup-doc__line w50"></div>
                          <div className="mockup-doc__line w85"></div>
                        </div>
                      </div>
                      <div className="mockup-split__divider"></div>
                      <div className="mockup-split__right">
                        <pre className="mockup-json font-mono"><span className="json-brace">{'{'}</span>{'\n'}  <span className="json-key">&quot;vendor&quot;</span>: <span className="json-string">&quot;Acme Corp&quot;</span>,{'\n'}  <span className="json-key">&quot;total&quot;</span>: <span className="json-number">24500.00</span>,{'\n'}  <span className="json-key">&quot;date&quot;</span>: <span className="json-string">&quot;2025-03-15&quot;</span>,{'\n'}  <span className="json-key">&quot;items&quot;</span>: [{'\n'}    {'{ '}<span className="json-key">&quot;desc&quot;</span>: <span className="json-string">&quot;Widget A&quot;</span>{' }'}{'\n'}  ]{'\n'}<span className="json-brace">{'}'}</span></pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-card__info">
                  <div className="project-card__top-row">
                    <h3 className="project-card__title">VISION PARSE</h3>
                    <div className="project-card__links">
                      <a href="https://vision-parse.vercel.app" target="_blank" rel="noopener" className="project-card__link font-mono">LIVE <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
                      <a href="https://github.com/infinix10552-ship-it/vision-parse" target="_blank" rel="noopener" className="project-card__link font-mono">GITHUB <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
                    </div>
                  </div>
                  <p className="project-card__desc">AI document parsing engine. Transforms unstructured visual inputs into structured, queryable data — zero manual mapping.</p>
                  <p className="project-card__quote font-mono">&quot;From raw document chaos to clean JSON in a single inference pass.&quot;</p>
                  <div className="project-card__tags">
                    <span className="tag font-mono">Python</span>
                    <span className="tag font-mono">Computer Vision</span>
                    <span className="tag font-mono">OCR</span>
                    <span className="tag font-mono">REST API</span>
                  </div>
                </div>
              </article>

              {/* Card 3: Complaint Management */}
              <article className="project-card" data-accent="amber" data-cursor-text="VIEW">
                <div className="project-card__visual">
                  <div className="project-card__mockup project-card__mockup--complaint">
                    <div className="mockup-dashboard">
                      <div className="mockup-dashboard__header">
                        <div className="mockup-dot mockup-dot--red"></div>
                        <div className="mockup-dot mockup-dot--yellow"></div>
                        <div className="mockup-dot mockup-dot--green"></div>
                        <span className="font-mono" style={{color:'var(--color-text-muted)',fontSize:'10px',marginLeft:'12px'}}>complaint-system/tickets</span>
                      </div>
                      <div className="mockup-dashboard__body" style={{flexDirection:'column',padding:'16px'}}>
                        <div className="mockup-ticket-row">
                          <span className="font-mono" style={{color:'var(--color-text-secondary)',fontSize:'11px'}}>#TKT-0091</span>
                          <span className="font-mono" style={{fontSize:'11px'}}>Billing Discrepancy</span>
                          <span className="status-pill status-pill--success font-mono">Resolved</span>
                        </div>
                        <div className="mockup-ticket-row">
                          <span className="font-mono" style={{color:'var(--color-text-secondary)',fontSize:'11px'}}>#TKT-0092</span>
                          <span className="font-mono" style={{fontSize:'11px'}}>Service Outage Report</span>
                          <span className="status-pill status-pill--pending font-mono">Pending</span>
                        </div>
                        <div className="mockup-ticket-row">
                          <span className="font-mono" style={{color:'var(--color-text-secondary)',fontSize:'11px'}}>#TKT-0093</span>
                          <span className="font-mono" style={{fontSize:'11px'}}>Access Request</span>
                          <span className="status-pill status-pill--open font-mono">Open</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-card__info">
                  <div className="project-card__top-row">
                    <h3 className="project-card__title">COMPLAINT MGMT SYSTEM</h3>
                    <div className="project-card__links">
                      <a href="https://complaint-management-system-ashen.vercel.app" target="_blank" rel="noopener" className="project-card__link font-mono">LIVE <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
                      <a href="https://github.com/infinix10552-ship-it/complaint-management-system" target="_blank" rel="noopener" className="project-card__link font-mono">GH <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
                    </div>
                  </div>
                  <p className="project-card__desc">End-to-end complaint lifecycle management platform. Deployed on Vercel + Render.</p>
                  <p className="project-card__quote font-mono">&quot;Full lifecycle: submission → assignment → resolution. Accessible from any device.&quot;</p>
                  <div className="project-card__tags">
                    <span className="tag font-mono">Spring Boot</span>
                    <span className="tag font-mono">React.js</span>
                    <span className="tag font-mono">Ticketing</span>
                    <span className="tag font-mono">Render</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ABOUT / THE SIGNAL */}
        <section className="about" id="about">
          <div className="container about__grid">
            <div className="about__left">
              <span className="section-label font-mono">{'// 02. ABOUT'}</span>
              <h2 className="section-heading">The Signal.</h2>
              <div className="about__json-block">
                <pre className="about__json font-mono"><span className="json-brace">{'{'}</span>{'\n'}  <span className="json-key">&quot;name&quot;</span>: <span className="json-string">&quot;Aman Jha&quot;</span>,{'\n'}  <span className="json-key">&quot;age&quot;</span>: <span className="json-number">20</span>,{'\n'}  <span className="json-key">&quot;location&quot;</span>: <span className="json-string">&quot;Mumbai, Maharashtra, IN&quot;</span>,{'\n'}  <span className="json-key">&quot;role&quot;</span>: <span className="json-string">&quot;Software Engineer · Founder&quot;</span>,{'\n'}  <span className="json-key">&quot;education&quot;</span>: <span className="json-brace">{'{'}</span>{'\n'}    <span className="json-key">&quot;degree&quot;</span>: <span className="json-string">&quot;B.E. Electronics &amp; Telecomm&quot;</span>,{'\n'}    <span className="json-key">&quot;institution&quot;</span>: <span className="json-string">&quot;TCET Mumbai&quot;</span>,{'\n'}    <span className="json-key">&quot;honors&quot;</span>: <span className="json-string">&quot;B.TECH AI/ML&quot;</span>,{'\n'}    <span className="json-key">&quot;semester&quot;</span>: <span className="json-number">4</span>{'\n'}  <span className="json-brace">{'}'}</span>,{'\n'}  <span className="json-key">&quot;company&quot;</span>: <span className="json-string">&quot;Avenra&quot;</span>,{'\n'}  <span className="json-key">&quot;flagship_product&quot;</span>: <span className="json-string">&quot;Avenra Flow&quot;</span>,{'\n'}  <span className="json-key">&quot;stack&quot;</span>: [<span className="json-string">&quot;Java&quot;</span>, <span className="json-string">&quot;Spring Boot&quot;</span>, <span className="json-string">&quot;React.js&quot;</span>, <span className="json-string">&quot;Microservices&quot;</span>],{'\n'}  <span className="json-key">&quot;philosophy&quot;</span>: <span className="json-string">&quot;Technical depth over surface-level execution.&quot;</span>{'\n'}<span className="json-brace">{'}'}</span></pre>
              </div>
              <div className="about__philosophy" id="aboutPhilosophy">
                <p className="about__philosophy-line">I don&apos;t build features. I build systems.</p>
                <p className="about__philosophy-line">Every project I ship is architected for real load, real users, and real edge cases — not portfolio demos.</p>
                <p className="about__philosophy-line">Avenra Flow isn&apos;t a side project; it&apos;s infrastructure.</p>
                <p className="about__philosophy-line">From Mumbai. Building globally.</p>
              </div>
            </div>
            <div className="about__right">
              <div className="about__terminal">
                <div className="terminal-chrome">
                  <div className="mockup-dot mockup-dot--red"></div>
                  <div className="mockup-dot mockup-dot--yellow"></div>
                  <div className="mockup-dot mockup-dot--green"></div>
                  <span className="font-mono" style={{color:'var(--color-text-muted)',fontSize:'10px',marginLeft:'12px'}}>aman.terminal</span>
                </div>
                <div className="terminal-body font-mono" id="terminalBody">
                  <div className="terminal-line" data-delay="0"><span className="terminal-prompt">&gt;</span> aman --status</div>
                  <div className="terminal-line terminal-response" data-delay="400"><span className="terminal-dot-green">●</span> Active</div>
                  <div className="terminal-line" data-delay="900"><span className="terminal-prompt">&gt;</span> aman --building</div>
                  <div className="terminal-line terminal-response" data-delay="1300">Avenra Flow &nbsp;···&nbsp; Invoice Extraction Engine</div>
                  <div className="terminal-line" data-delay="1800"><span className="terminal-prompt">&gt;</span> aman --next</div>
                  <div className="terminal-line terminal-response" data-delay="2200">Avenra IntelliZence &nbsp;·&nbsp; Anomaly &amp; Fraud Detection</div>
                  <div className="terminal-line" data-delay="2700"><span className="terminal-prompt">&gt;</span> <span className="terminal-cursor">_</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CREDENTIALS / THE SIGNAL LINE */}
        <section className="credentials" id="credentials">
          <div className="credentials__ticker">
            <div className="credentials__ticker-track">
              <span className="credentials__ticker-text font-mono">TCET MUMBAI &nbsp;·&nbsp; B.E. EXTC &nbsp;·&nbsp; AI/ML HONORS &nbsp;·&nbsp; IEEE WORKING COMMITTEE &nbsp;·&nbsp; AVENRA &nbsp;·&nbsp; AMAN JHA DECODES &nbsp;·&nbsp; SPRING BOOT &nbsp;·&nbsp; REACT.JS &nbsp;·&nbsp;</span>
              <span className="credentials__ticker-text font-mono">TCET MUMBAI &nbsp;·&nbsp; B.E. EXTC &nbsp;·&nbsp; AI/ML HONORS &nbsp;·&nbsp; IEEE WORKING COMMITTEE &nbsp;·&nbsp; AVENRA &nbsp;·&nbsp; AMAN JHA DECODES &nbsp;·&nbsp; SPRING BOOT &nbsp;·&nbsp; REACT.JS &nbsp;·&nbsp;</span>
            </div>
          </div>
          <div className="container credentials__stats">
            <div className="stat" data-count="3">
              <span className="stat__number">0</span>
              <span className="stat__label font-mono">Systems Shipped</span>
              <span className="stat__desc font-mono">Production-grade projects deployed</span>
            </div>
            <div className="stat" data-count="1">
              <span className="stat__number">0</span>
              <span className="stat__label font-mono">Company Founded</span>
              <span className="stat__desc font-mono">Avenra — Invoice &amp; Expense Automation</span>
            </div>
            <div className="stat" data-count="2">
              <span className="stat__number">0</span>
              <span className="stat__label font-mono">Content Channels</span>
              <span className="stat__desc font-mono">YouTube + Instagram via Aman Jha Decodes</span>
            </div>
            <div className="stat" data-count="1">
              <span className="stat__number">0</span>
              <span className="stat__label font-mono">AVENRA</span>
              <span className="stat__desc font-mono">Scale to the Sphere</span>
            </div>
          </div>
        </section>

        {/* CONTACT / THE TERMINAL */}
        <section className="contact" id="contact">
          <div className="container contact__container">
            <span className="section-label font-mono">{'// 03. CONTACT'}</span>
            <h2 className="section-heading contact__heading">Let&apos;s build something<br />that doesn&apos;t break.</h2>
            <div className="contact__terminal">
              <div className="terminal-chrome">
                <div className="mockup-dot mockup-dot--red"></div>
                <div className="mockup-dot mockup-dot--yellow"></div>
                <div className="mockup-dot mockup-dot--green"></div>
                <span className="font-mono" style={{color:'var(--color-text-muted)',fontSize:'10px',marginLeft:'12px'}}>aman.jha/contact</span>
              </div>
              <div className="terminal-body font-mono">
                <p className="terminal-line"><span className="terminal-prompt">&gt;</span> Welcome. State your intent.</p>
                <form id="contactForm" className="contact__form">
                  <div className="contact__field">
                    <label className="terminal-prompt">~/contact &gt; send --from</label>
                    <input type="email" name="email" id="contactEmail" placeholder="your@email.com" required autoComplete="email" />
                  </div>
                  <div className="contact__field">
                    <label className="terminal-prompt">~/contact &gt; --subject</label>
                    <input type="text" name="subject" id="contactSubject" placeholder="Your subject" required />
                  </div>
                  <div className="contact__field">
                    <label className="terminal-prompt">~/contact &gt; --message</label>
                    <textarea name="message" id="contactMessage" placeholder="Your message" rows={3} required></textarea>
                  </div>
                  <div className="contact__field">
                    <label className="terminal-prompt">~/contact &gt; run</label>
                    <button type="submit" className="btn btn--primary font-mono contact__submit">
                      <span>EXECUTE ↵</span>
                    </button>
                  </div>
                </form>
                <div className="contact__success" id="contactSuccess" style={{display:'none'}}>
                  <p className="terminal-line"><span className="terminal-prompt">&gt;</span> <span className="contact__success-text"></span></p>
                </div>
              </div>
            </div>
            <div className="contact__socials">
              <a href="https://github.com/infinix10552-ship-it" target="_blank" rel="noopener" className="contact__social font-mono" data-magnetic="">GITHUB <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
              <a href="https://linkedin.com/in/aman-jha-0091b2285" target="_blank" rel="noopener" className="contact__social font-mono" data-magnetic="">LINKEDIN <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
              <a href="https://youtube.com/@amanjhadecodes" target="_blank" rel="noopener" className="contact__social font-mono" data-magnetic="">YOUTUBE <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
              <a href="https://instagram.com/amanjhadecodes" target="_blank" rel="noopener" className="contact__social font-mono" data-magnetic="">INSTAGRAM <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__monogram">AJ</span>
          <span className="footer__info font-mono">Aman Jha &nbsp;·&nbsp; Mumbai, IN &nbsp;·&nbsp; Built with precision.</span>
          <span className="footer__copy font-mono">© 2025</span>
        </div>
      </footer>

      <ClientInitializer />
    </>
  );
}
