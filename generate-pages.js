const fs = require('fs');

try {
  let indexHtml = fs.readFileSync('index.html', 'utf-8');

  // Extract header (everything up to </nav>)
  const headerEndIndex = indexHtml.indexOf('</nav>') + 6;
  const header = indexHtml.substring(0, headerEndIndex);

  // Extract footer (everything from <footer class="site-footer"> to the end)
  const footerStartIndex = indexHtml.indexOf('<footer class="site-footer">');
  const footer = indexHtml.substring(footerStartIndex);

  function createPage(filename, title, content, dir = '') {
    const targetDir = dir ? `${dir}/` : '';
    if (dir && !fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const fullPath = targetDir + filename;
    
    // Adjust links in header/footer to be root-relative for professional structure
    // This ensures links work regardless of which folder the page is in
    let pageHeader = header.replace('<title>Prelim.io | AI-Powered Pre-Employment Screening & Assessment</title>', '<title>' + title + ' | Prelim.io</title>');
    
    // Replace relative links with root-relative ones if they aren't already
    // This is a simple heuristic: if it doesn't start with / or http, prepend /
    // But since we are generating, let's just make sure the links in index.html are updated first.
    
    let html = pageHeader + '\n\n' + content + '\n\n' + footer;
    fs.writeFileSync(fullPath, html);
    console.log('Created ' + fullPath);
  }

  // Common Bottom CTA
  const bottomCTA = `
  <section class="bottom-cta-banner" style="background: linear-gradient(135deg, #0c1f3a 0%, #061121 100%); padding: 120px 20px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center; color: #fff;">
    <h2 style="font-size: 48px; margin-bottom: 24px; max-width: 900px; margin-left: auto; margin-right: auto; font-family: 'Plus Jakarta Sans', sans-serif;">Ready to transform your process?</h2>
    <p style="color: rgba(255,255,255,0.7); font-size: 22px; margin-bottom: 48px;">Join 2,000+ high-growth companies using Prelim.io to build exceptional teams.</p>
    <div style="display: flex; gap: 20px; justify-content: center;">
      <button class="btn-primary" style="padding: 18px 48px; font-size: 18px; border-radius: 100px;">Request a Demo</button>
      <button class="btn-outline-w" style="padding: 18px 48px; font-size: 18px; border-radius: 100px; background: transparent; border: 1px solid #fff; color: #fff;">Contact Sales</button>
    </div>
  </section>
  `;

  // --- UNIFIED PAGE CONFIGURATION ---
  const allPages = [
    { 
      file: 'technical-assessment.html', title: 'Technical Assessment', tag: 'SKILL VERIFICATION', dir: 'product',
      desc: 'Identify top developers with the most accurate skill-based assessments.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 60vh; padding: 160px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #0c1f3a 0%, #061121 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.4;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.3;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 900px;">
            <span class="pf-tag" style="color: var(--teal); margin-bottom: 24px; display: block; text-align: center;">PRODUCT OVERVIEW</span>
            <h1 style="font-size: clamp(40px, 6vw, 72px); margin-bottom: 32px;">Technical Assessment</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 800px; margin: 0 auto 48px; color: rgba(255,255,255,0.85); line-height: 1.6;">
              In today’s highly competitive and skill-driven business environment, organizations require accurate and reliable methods to evaluate technical capability. 
              Technical assessments provide a structured and objective approach to measuring a candidate’s or employee’s job-specific competencies.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="padding: 18px 48px; font-size: 18px;">Book a Demo</button><button class="btn-outline-w" style="padding: 18px 48px; font-size: 18px;">View Sample Tests</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
        <span class="pf-tag">DEFINITION</span>
        <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 32px;">Objective evidence of performance</h2>
        <p style="font-size: 20px; color: var(--muted); line-height: 1.8; max-width: 800px; margin: 0 auto;">
          Technical assessments are methodical evaluations used to measure an individual’s technical knowledge, practical abilities, and problem-solving skills in relation to specific job functions. Unlike traditional selection methods that rely on subjective judgment, technical assessments provide <strong>quantifiable and objective evidence</strong> of a candidate’s ability to perform job-related tasks effectively.
        </p>
      </div>
    </section>

    <section style="padding: 120px 32px; background: #f8fafc;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="pf-tag">WHY IT MATTERS</span>
          <h2 style="font-size: 42px; color: var(--navy);">Strategic Importance</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
          <div style="background: #fff; padding: 48px; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.04); transition: transform 0.3s ease; border: 1px solid rgba(0,0,0,0.05);" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 48px; height: 48px; background: rgba(10,171,197,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: var(--teal); font-weight: 700;">01</div>
            <h3 style="font-size: 22px; margin-bottom: 16px; color: var(--navy);">Validate Technical Proficiency</h3>
            <p style="color: var(--muted); line-height: 1.6;">Confirm candidate capabilities through practical evaluation rather than self-reported experience, ensuring a true match for the role.</p>
          </div>
          <div style="background: #fff; padding: 48px; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.04); transition: transform 0.3s ease; border: 1px solid rgba(0,0,0,0.05);" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 48px; height: 48px; background: rgba(10,171,197,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: var(--teal); font-weight: 700;">02</div>
            <h3 style="font-size: 22px; margin-bottom: 16px; color: var(--navy);">Enhance Hiring Accuracy</h3>
            <p style="color: var(--muted); line-height: 1.6;">Identify candidates whose skills and competencies align closely with job requirements, thereby improving decision-making quality.</p>
          </div>
          <div style="background: #fff; padding: 48px; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.04); transition: transform 0.3s ease; border: 1px solid rgba(0,0,0,0.05);" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 48px; height: 48px; background: rgba(10,171,197,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: var(--teal); font-weight: 700;">03</div>
            <h3 style="font-size: 22px; margin-bottom: 16px; color: var(--navy);">Reduce Hiring Risk</h3>
            <p style="color: var(--muted); line-height: 1.6;">Minimize the likelihood of mis-hires by relying on measurable performance data rather than subjective impressions.</p>
          </div>
          <div style="background: #fff; padding: 48px; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.04); transition: transform 0.3s ease; border: 1px solid rgba(0,0,0,0.05);" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 48px; height: 48px; background: rgba(10,171,197,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: var(--teal); font-weight: 700;">04</div>
            <h3 style="font-size: 22px; margin-bottom: 16px; color: var(--navy);">Improve Operational Efficiency</h3>
            <p style="color: var(--muted); line-height: 1.6;">Streamline high-volume recruitment processes by efficiently screening and shortlisting qualified candidates automatically.</p>
          </div>
          <div style="background: #fff; padding: 48px; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.04); transition: transform 0.3s ease; border: 1px solid rgba(0,0,0,0.05);" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 48px; height: 48px; background: rgba(10,171,197,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: var(--teal); font-weight: 700;">05</div>
            <h3 style="font-size: 22px; margin-bottom: 16px; color: var(--navy);">Drive Organizational Performance</h3>
            <p style="color: var(--muted); line-height: 1.6;">Support the hiring of high-performing talent, contributing to improved productivity and long-term business outcomes.</p>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 120px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="pf-tag">CAPABILITIES</span>
          <h2 style="font-size: 42px; color: var(--navy);">Our Service Offerings</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-bottom: 100px;">
          <div>
            <h3 style="font-size: 28px; margin-bottom: 20px; color: var(--navy);">Role-Specific Assessment Design</h3>
            <p style="font-size: 18px; color: var(--muted); line-height: 1.6;">We develop customized technical assessments aligned with the unique requirements of each role and industry. Our solutions are tailored to evaluate competencies that directly impact job performance.</p>
            <ul style="margin-top:24px; list-style:none; padding:0; color: var(--text);">
              <li style="margin-bottom:12px; display:flex; align-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:12px;"><polyline points="20 6 9 17 4 12"/></svg> Industry-aligned competencies</li>
              <li style="margin-bottom:12px; display:flex; align-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:12px;"><polyline points="20 6 9 17 4 12"/></svg> Role-based tailoring</li>
            </ul>
          </div>
          <div style="border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop" alt="Assessment Design" style="width: 100%; height: auto; display: block;"/>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-bottom: 100px;">
          <div style="order: 2;">
            <h3 style="font-size: 28px; margin-bottom: 20px; color: var(--navy);">Multi-Modal Evaluation Framework</h3>
            <p style="font-size: 18px; color: var(--muted); line-height: 1.6;">Our assessment solutions incorporate a variety of formats to ensure comprehensive evaluation:</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px;">
              <div style="background: #f1f5f9; padding: 16px; border-radius: 12px; font-weight: 600; font-size: 14px; text-align: center;">Coding Assessments</div>
              <div style="background: #f1f5f9; padding: 16px; border-radius: 12px; font-weight: 600; font-size: 14px; text-align: center;">Technical Aptitude</div>
              <div style="background: #f1f5f9; padding: 16px; border-radius: 12px; font-weight: 600; font-size: 14px; text-align: center;">Case Studies</div>
              <div style="background: #f1f5f9; padding: 16px; border-radius: 12px; font-weight: 600; font-size: 14px; text-align: center;">System Design</div>
            </div>
          </div>
          <div style="border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); order: 1;">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop" alt="Evaluation Framework" style="width: 100%; height: auto; display: block;"/>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px;">
           <div style="text-align:center;">
             <div style="font-size: 40px; margin-bottom: 16px;">🏢</div>
             <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Real-World Simulation</h4>
             <p style="font-size: 14px; color: var(--muted);">Replicate real workplace scenarios and solve actual problems.</p>
           </div>
           <div style="text-align:center;">
             <div style="font-size: 40px; margin-bottom: 16px;">📊</div>
             <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Advanced Analytics</h4>
             <p style="font-size: 14px; color: var(--muted);">Detailed reports with benchmark comparisons and insights.</p>
           </div>
           <div style="text-align:center;">
             <div style="font-size: 40px; margin-bottom: 16px;">🛡️</div>
             <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Scalable & Secure</h4>
             <p style="font-size: 14px; color: var(--muted);">Seamless delivery across geographies with enterprise security.</p>
           </div>
        </div>
      </div>
    </section>

    <section style="padding: 120px 32px; background: var(--navy); color: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="pf-tag" style="color: var(--teal);">THE PROCESS</span>
          <h2 style="font-size: 42px; color: #fff;">Our Methodology</h2>
        </div>
        <div style="display: flex; gap: 20px; position: relative;">
          <!-- Step 1 -->
          <div style="flex: 1; position: relative; z-index: 2;">
            <div style="width: 60px; height: 60px; background: var(--teal); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; margin-bottom: 24px;">1</div>
            <h4 style="font-size: 20px; margin-bottom: 12px;">Requirement Analysis</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 15px;">Identification of role-specific technical competencies.</p>
          </div>
          <!-- Step 2 -->
          <div style="flex: 1; position: relative; z-index: 2;">
            <div style="width: 60px; height: 60px; background: var(--teal); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; margin-bottom: 24px;">2</div>
            <h4 style="font-size: 20px; margin-bottom: 12px;">Design & Development</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 15px;">Creation of customized evaluation models.</p>
          </div>
          <!-- Step 3 -->
          <div style="flex: 1; position: relative; z-index: 2;">
            <div style="width: 60px; height: 60px; background: var(--teal); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; margin-bottom: 24px;">3</div>
            <h4 style="font-size: 20px; margin-bottom: 12px;">Administration</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 15px;">Secure and user-friendly assessment delivery.</p>
          </div>
          <!-- Step 4 -->
          <div style="flex: 1; position: relative; z-index: 2;">
            <div style="width: 60px; height: 60px; background: var(--teal); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; margin-bottom: 24px;">4</div>
            <h4 style="font-size: 20px; margin-bottom: 12px;">Evaluation</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 15px;">Data-driven analysis with comprehensive outputs.</p>
          </div>
          <!-- Step 5 -->
          <div style="flex: 1; position: relative; z-index: 2;">
            <div style="width: 60px; height: 60px; background: var(--teal); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; margin-bottom: 24px;">5</div>
            <h4 style="font-size: 20px; margin-bottom: 12px;">Improvement</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 15px;">Refinement based on performance and standards.</p>
          </div>
          <!-- Connector line -->
          <div style="position: absolute; top: 30px; left: 0; right: 0; height: 2px; background: rgba(255,255,255,0.1); z-index: 1;"></div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; gap: 80px; align-items: center;">
        <div style="flex: 1;">
          <span class="pf-tag">INDUSTRIES</span>
          <h2 style="font-size: 36px; color: var(--navy); margin-bottom: 32px;">Applicable across sectors</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 12px;">
            <span style="background: #f1f5f9; padding: 10px 20px; border-radius: 100px; font-size: 14px; color: var(--navy); font-weight: 600;">Software Development</span>
            <span style="background: #f1f5f9; padding: 10px 20px; border-radius: 100px; font-size: 14px; color: var(--navy); font-weight: 600;">Manufacturing</span>
            <span style="background: #f1f5f9; padding: 10px 20px; border-radius: 100px; font-size: 14px; color: var(--navy); font-weight: 600;">Financial Services</span>
            <span style="background: #f1f5f9; padding: 10px 20px; border-radius: 100px; font-size: 14px; color: var(--navy); font-weight: 600;">Data Science</span>
            <span style="background: #f1f5f9; padding: 10px 20px; border-radius: 100px; font-size: 14px; color: var(--navy); font-weight: 600;">Healthcare</span>
            <span style="background: #f1f5f9; padding: 10px 20px; border-radius: 100px; font-size: 14px; color: var(--navy); font-weight: 600;">Telecommunications</span>
          </div>
        </div>
        <div style="flex: 1; background: #f8fafc; padding: 60px; border-radius: 32px; border: 1px solid rgba(0,0,0,0.05);">
          <span class="pf-tag">WHY CHOOSE PRELIM</span>
          <ul style="margin-top:24px; list-style:none; padding:0; color: var(--navy);">
            <li style="margin-bottom:20px; display:flex; align-items:flex-start;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:16px; margin-top:2px;"><polyline points="20 6 9 17 4 12"/></svg> <span><strong>Domain Expertise:</strong> Deep understanding of industry-specific requirements.</span></li>
            <li style="margin-bottom:20px; display:flex; align-items:flex-start;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:16px; margin-top:2px;"><polyline points="20 6 9 17 4 12"/></svg> <span><strong>Standardized Methodologies:</strong> Scientifically designed evaluation frameworks.</span></li>
            <li style="margin-bottom:20px; display:flex; align-items:flex-start;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:16px; margin-top:2px;"><polyline points="20 6 9 17 4 12"/></svg> <span><strong>Customization:</strong> Tailored solutions aligned with organizational needs.</span></li>
            <li style="margin-bottom:0; display:flex; align-items:flex-start;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:16px; margin-top:2px;"><polyline points="20 6 9 17 4 12"/></svg> <span><strong>Scalability:</strong> Capability to support enterprise-level hiring requirements.</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: var(--light-bg); text-align: center;">
      <div style="max-width: 800px; margin: 0 auto;">
        <h2 style="font-size: 32px; color: var(--navy); margin-bottom: 24px;">Conclusion</h2>
        <p style="font-size: 18px; color: var(--muted); line-height: 1.6; margin-bottom: 40px;">
          Technical assessments have become an indispensable component of modern talent acquisition strategies. At Prelim, we are committed to delivering solutions that combine rigor, reliability, and relevance—ensuring your organization identifies and retains the right talent for long-term success.
        </p>
        <button class="btn-primary" style="padding: 18px 60px; font-size: 18px; border-radius: 100px;">Get Started with Prelim</button>
      </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'attitude-assessment.html', title: 'Attitude Assessment', tag: 'LEADERSHIP MINDSET', dir: 'product',
      desc: 'Measure the mindset and behavioral tendencies of your future leaders.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 60vh; padding: 160px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #4f46e5 0%, #061121 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.3;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.2;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 900px;">
            <span class="pf-tag" style="color: #fff; opacity: 0.8; margin-bottom: 24px; display: block; text-align: center;">LEADERSHIP EXCELLENCE</span>
            <h1 style="font-size: clamp(40px, 6vw, 72px); margin-bottom: 32px;">Attitude Assessment</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 800px; margin: 0 auto 48px; color: rgba(255,255,255,0.9); line-height: 1.6;">
              Build leaders who drive results—not just manage teams. Measure mindset, emotional resilience, and adaptability for high-stakes leadership roles.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="background: #fff; color: #4f46e5; padding: 18px 48px; font-size: 18px;">Get Started</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
        <div>
          <span class="pf-tag">OVERVIEW</span>
          <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 32px;">What is a Leadership Attitude Assessment?</h2>
          <p style="font-size: 18px; color: var(--muted); line-height: 1.8; margin-bottom: 32px;">
            A specialized evaluation that measures a leader's mindset and outlook toward challenges, approach to decision-making, and emotional resilience. 
            Unlike traditional personality assessments, attitude assessments focus on current perspectives and behavioral tendencies that influence real-world leadership performance.
          </p>
          <ul style="list-style:none; padding:0; color: var(--navy);">
            <li style="margin-bottom:12px; display:flex; align-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:12px;"><polyline points="20 6 9 17 4 12"/></svg> Approach to decision-making & accountability</li>
            <li style="margin-bottom:12px; display:flex; align-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:12px;"><polyline points="20 6 9 17 4 12"/></svg> Emotional resilience and adaptability</li>
            <li style="margin-bottom:12px; display:flex; align-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:12px;"><polyline points="20 6 9 17 4 12"/></svg> Alignment with organizational values</li>
          </ul>
        </div>
        <div style="background: #f8fafc; padding: 48px; border-radius: 32px; border: 1px solid rgba(0,0,0,0.05);">
          <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 24px;">IT Leadership Excellence</h3>
          <p style="color: var(--muted); line-height: 1.6; margin-bottom: 24px;">In the fast-paced digital landscape, success is driven by mindset and adaptability toward change.</p>
          <div style="display: grid; gap: 16px;">
            <div style="background: #fff; padding: 16px; border-radius: 12px; border-left: 4px solid var(--teal); font-weight: 600;">Digital Transformation Mindset</div>
            <div style="background: #fff; padding: 16px; border-radius: 12px; border-left: 4px solid var(--teal); font-weight: 600;">Agile Team Collaboration</div>
            <div style="background: #fff; padding: 16px; border-radius: 12px; border-left: 4px solid var(--teal); font-weight: 600;">Innovation-led Problem Solving</div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 120px 32px; background: #0f172a; color: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="pf-tag" style="color: var(--teal);">CORE DIMENSIONS</span>
          <h2 style="font-size: 42px; color: #fff;">Key Areas We Assess</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
          <div style="background: rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="font-size: 32px; margin-bottom: 24px;">🌱</div>
            <h3 style="font-size: 20px; margin-bottom: 16px;">Growth Mindset</h3>
            <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">Openness to feedback, willingness to adapt, and continuous improvement orientation.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="font-size: 32px; margin-bottom: 24px;">⚖️</div>
            <h3 style="font-size: 20px; margin-bottom: 16px;">Accountability</h3>
            <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">Responsibility for decisions, ethical choices, and reliability under pressure.</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="font-size: 32px; margin-bottom: 24px;">🧠</div>
            <h3 style="font-size: 20px; margin-bottom: 16px;">Resilience</h3>
            <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">Emotional intelligence, reaction to stress, and effective conflict management.</p>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <span class="pf-tag">BENEFITS</span>
        <h2 style="font-size: 42px; color: var(--navy); margin-bottom: 60px;">Impact for Organizations & Leaders</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; text-align: left;">
          <div style="background: #f1f5f9; padding: 48px; border-radius: 32px;">
            <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 24px;">For Organizations</h3>
            <ul style="list-style:none; padding:0; color: var(--muted); line-height: 2;">
              <li>• Identify high-potential leaders</li>
              <li>• Reduce promotion risks</li>
              <li>• Strengthen succession planning</li>
              <li>• Align behavior with strategy</li>
            </ul>
          </div>
          <div style="background: #e0f2fe; padding: 48px; border-radius: 32px;">
            <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 24px;">For Leaders</h3>
            <ul style="list-style:none; padding:0; color: var(--muted); line-height: 2;">
              <li>• Enhance self-awareness</li>
              <li>• Identify blind spots</li>
              <li>• Improve decision-making</li>
              <li>• Accelerate professional growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'behavioral-assessment.html', title: 'Behavioral Assessment', tag: 'CULTURE FIT', dir: 'product',
      desc: 'Understand how candidates act and react in real-world scenarios.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 60vh; padding: 160px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #0d9488 0%, #061121 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.4;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.3;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 900px;">
            <span class="pf-tag" style="color: #fff; opacity: 0.8; margin-bottom: 24px; display: block; text-align: center;">BEHAVIORAL INSIGHTS</span>
            <h1 style="font-size: clamp(40px, 6vw, 72px); margin-bottom: 32px;">Behavioral Assessment</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 800px; margin: 0 auto 48px; color: rgba(255,255,255,0.9); line-height: 1.6;">
              Go beyond resumes. Observe, measure, and analyze how individuals behave in specific situations to build more effective teams.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="background: #fff; color: #0d9488; padding: 18px 48px; font-size: 18px;">Learn More</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
        <span class="pf-tag">CORE CONCEPT</span>
        <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 32px;">Structured, evidence-based process</h2>
        <p style="font-size: 20px; color: var(--muted); line-height: 1.8; max-width: 800px; margin: 0 auto;">
          Behavioral assessment focuses on understanding what people do, why they do it, and how their environment influences their actions. 
          By combining multiple data sources—observations, interviews, and questionnaires—it provides an objective picture of behavior patterns.
        </p>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #f8fafc;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
           <div style="background: #fff; padding: 60px; border-radius: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.05);">
             <h3 style="font-size: 28px; color: var(--navy); margin-bottom: 32px;">Key Objectives</h3>
             <div style="display: grid; gap: 24px;">
               <div style="display: flex; gap: 20px;">
                 <div style="flex-shrink:0; width: 32px; height: 32px; background: #0d9488; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">1</div>
                 <div>
                   <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 4px;">Identify Specific Behaviors</h4>
                   <p style="color: var(--muted); font-size: 14px;">Defining observable actions clearly (frequency and context).</p>
                 </div>
               </div>
               <div style="display: flex; gap: 20px;">
                 <div style="flex-shrink:0; width: 32px; height: 32px; background: #0d9488; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">2</div>
                 <div>
                   <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 4px;">Understand Triggers (ABC Model)</h4>
                   <p style="color: var(--muted); font-size: 14px;">Analyzing Antecedents, Behaviors, and Consequences.</p>
                 </div>
               </div>
               <div style="display: flex; gap: 20px;">
                 <div style="flex-shrink:0; width: 32px; height: 32px; background: #0d9488; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">3</div>
                 <div>
                   <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 4px;">Guide Interventions</h4>
                   <p style="color: var(--muted); font-size: 14px;">Helping design targeted solutions for workplace management.</p>
                 </div>
               </div>
             </div>
           </div>
           <div>
             <span class="pf-tag">APPLICATIONS</span>
             <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 32px;">Versatile across every domain</h2>
             <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="background: #f1f5f9; padding: 24px; border-radius: 20px;">
                  <h4 style="font-size: 16px; margin-bottom: 8px;">Clinical</h4>
                  <p style="font-size: 13px; color: var(--muted);">Treatment plans & interventions.</p>
                </div>
                <div style="background: #f1f5f9; padding: 24px; border-radius: 20px;">
                  <h4 style="font-size: 16px; margin-bottom: 8px;">Education</h4>
                  <p style="font-size: 13px; color: var(--muted);">Individualized student development.</p>
                </div>
                <div style="background: #f1f5f9; padding: 24px; border-radius: 20px;">
                  <h4 style="font-size: 16px; margin-bottom: 8px;">Workplace</h4>
                  <p style="font-size: 13px; color: var(--muted);">Talent selection & team building.</p>
                </div>
                <div style="background: #f1f5f9; padding: 24px; border-radius: 20px;">
                  <h4 style="font-size: 16px; margin-bottom: 8px;">Personal</h4>
                  <p style="font-size: 13px; color: var(--muted);">Self-awareness & growth areas.</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'psychometric-assessment.html', title: 'Psychometric Assessment', tag: 'HUMAN POTENTIAL', dir: 'product',
      desc: 'Unlock potential with scientifically validated psychological testing.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 60vh; padding: 160px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #1e40af 0%, #061121 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.3;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.2;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 900px;">
            <span class="pf-tag" style="color: #fff; opacity: 0.8; margin-bottom: 24px; display: block; text-align: center;">SCIENTIFIC RIGOR</span>
            <h1 style="font-size: clamp(40px, 6vw, 72px); margin-bottom: 32px;">Psychometric Assessment</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 800px; margin: 0 auto 48px; color: rgba(255,255,255,0.9); line-height: 1.6;">
              Make smarter decisions with data-driven insights into personality, skills, and behavior. Objective, scientific, and accurate.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="background: #fff; color: #1e40af; padding: 18px 48px; font-size: 18px;">Take Assessment</button><button class="btn-outline-w" style="padding: 18px 48px; font-size: 18px;">Book Consultation</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; gap: 80px; align-items: center;">
        <div style="flex: 1;">
          <span class="pf-tag">THE SCIENCE</span>
          <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 32px;">Objective Decision-Making</h2>
          <p style="font-size: 18px; color: var(--muted); line-height: 1.8; margin-bottom: 32px;">
            Psychometric assessment is a scientific method used to measure mental abilities and personality traits. 
            It provides data-driven insights that help individuals and organizations make informed decisions beyond resumes and interviews.
          </p>
          <div style="display: grid; gap: 20px;">
             <div style="display: flex; gap: 16px; align-items: center;">
               <div style="width: 24px; height: 24px; background: #1e40af; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px;">✓</div>
               <span style="font-weight: 600; color: var(--navy);">Removes bias using scientific measurement</span>
             </div>
             <div style="display: flex; gap: 16px; align-items: center;">
               <div style="width: 24px; height: 24px; background: #1e40af; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px;">✓</div>
               <span style="font-weight: 600; color: var(--navy);">Predicts performance and potential</span>
             </div>
             <div style="display: flex; gap: 16px; align-items: center;">
               <div style="width: 24px; height: 24px; background: #1e40af; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px;">✓</div>
               <span style="font-weight: 600; color: var(--navy);">Uncovers hidden strengths & development areas</span>
             </div>
          </div>
        </div>
        <div style="flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
           <div style="background: #f1f5f9; padding: 32px; border-radius: 24px;">
             <h4 style="margin-bottom:12px; color: var(--navy);">Aptitude Tests</h4>
             <p style="font-size: 13px; color: var(--muted);">Reasoning, problem-solving & cognitive ability.</p>
           </div>
           <div style="background: #f1f5f9; padding: 32px; border-radius: 24px;">
             <h4 style="margin-bottom:12px; color: var(--navy);">Personality</h4>
             <p style="font-size: 13px; color: var(--muted);">Big Five, DISC, and work style profiling.</p>
           </div>
           <div style="background: #f1f5f9; padding: 32px; border-radius: 24px;">
             <h4 style="margin-bottom:12px; color: var(--navy);">Situational</h4>
             <p style="font-size: 13px; color: var(--muted);">Decision-making in real-life scenarios.</p>
           </div>
           <div style="background: #f1f5f9; padding: 32px; border-radius: 24px;">
             <h4 style="margin-bottom:12px; color: var(--navy);">Emotional IQ</h4>
             <p style="font-size: 13px; color: var(--muted);">Self-awareness, empathy & interpersonal skills.</p>
           </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #f8fafc;">
      <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <span class="pf-tag">WORKFLOW</span>
        <h2 style="font-size: 42px; color: var(--navy); margin-bottom: 60px;">How It Works</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px;">
          <div style="background: #fff; padding: 48px; border-radius: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
            <div style="font-size: 24px; font-weight: 800; color: #1e40af; margin-bottom: 24px;">01</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 16px;">Selection</h4>
            <p style="color: var(--muted); font-size: 15px;">Choose from customized tests based on your goal.</p>
          </div>
          <div style="background: #fff; padding: 48px; border-radius: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
            <div style="font-size: 24px; font-weight: 800; color: #1e40af; margin-bottom: 24px;">02</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 16px;">Testing</h4>
            <p style="color: var(--muted); font-size: 15px;">Complete the assessment securely from anywhere online.</p>
          </div>
          <div style="background: #fff; padding: 48px; border-radius: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
            <div style="font-size: 24px; font-weight: 800; color: #1e40af; margin-bottom: 24px;">03</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 16px;">Report</h4>
            <p style="color: var(--muted); font-size: 15px;">Receive deep insights on skills, personality, and potential.</p>
          </div>
        </div>
      </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'communication-assessment.html', title: 'Communication Assessment', tag: 'VERBAL & WRITTEN', dir: 'product',
      desc: 'Evaluate and improve professional communication skills across the board.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 60vh; padding: 160px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #7c3aed 0%, #061121 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.3;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.2;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 900px;">
            <span class="pf-tag" style="color: #fff; opacity: 0.8; margin-bottom: 24px; display: block; text-align: center;">EFFECTIVE INTERACTION</span>
            <h1 style="font-size: clamp(40px, 6vw, 72px); margin-bottom: 32px;">Communication Assessment</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 800px; margin: 0 auto 48px; color: rgba(255,255,255,0.9); line-height: 1.6;">
              Evaluate. Understand. Improve. Measure how clearly, confidently, and effectively your team communicates in every situation.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="background: #fff; color: #7c3aed; padding: 18px 48px; font-size: 18px;">Start Assessment</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center;">
        <div>
           <span class="pf-tag">WHY IT MATTERS</span>
           <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 32px;">The foundation of success</h2>
           <p style="font-size: 18px; color: var(--muted); line-height: 1.8; margin-bottom: 32px;">
             Effective communication is the cornerstone of career success. A structured evaluation helps measure how well an individual conveys and receives information across multiple channels.
           </p>
           <div style="display: grid; gap: 20px;">
              <div style="background: #f8fafc; padding: 24px; border-radius: 16px; border-left: 4px solid #7c3aed;">
                <h4 style="color: var(--navy); margin-bottom: 4px;">Identify Strengths</h4>
                <p style="font-size: 14px; color: var(--muted);">Pinpoint exactly where your communication shines.</p>
              </div>
              <div style="background: #f8fafc; padding: 24px; border-radius: 16px; border-left: 4px solid #7c3aed;">
                <h4 style="color: var(--navy); margin-bottom: 4px;">Build Confidence</h4>
                <p style="font-size: 14px; color: var(--muted);">Improve professional interactions with data-backed feedback.</p>
              </div>
           </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
           <div style="background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center;">
             <div style="font-size: 32px; margin-bottom: 16px;">🗣️</div>
             <h4 style="color: var(--navy);">Verbal</h4>
             <p style="font-size: 12px; color: var(--muted); margin-top: 8px;">Fluency, clarity & articulation.</p>
           </div>
           <div style="background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center;">
             <div style="font-size: 32px; margin-bottom: 16px;">✍️</div>
             <h4 style="color: var(--navy);">Written</h4>
             <p style="font-size: 12px; color: var(--muted); margin-top: 8px;">Grammar, tone & structure.</p>
           </div>
           <div style="background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center;">
             <div style="font-size: 32px; margin-bottom: 16px;">👂</div>
             <h4 style="color: var(--navy);">Listening</h4>
             <p style="font-size: 12px; color: var(--muted); margin-top: 8px;">Comprehension & response accuracy.</p>
           </div>
           <div style="background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center;">
             <div style="font-size: 32px; margin-bottom: 16px;">🤝</div>
             <h4 style="color: var(--navy);">Interpersonal</h4>
             <p style="font-size: 12px; color: var(--muted); margin-top: 8px;">Empathy & active collaboration.</p>
           </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #7c3aed; color: #fff;">
      <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
        <h2 style="font-size: 42px; margin-bottom: 32px;">Actionable Insights</h2>
        <p style="font-size: 20px; opacity: 0.8; line-height: 1.6; margin-bottom: 48px;">
          Standardized testing ensures fair and unbiased assessment of communication skills, improving workplace productivity and customer experience.
        </p>
        <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;">
           <div style="text-align: center;">
             <div style="font-size: 24px; font-weight: 800;">360°</div>
             <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">View of Skills</div>
           </div>
           <div style="text-align: center;">
             <div style="font-size: 24px; font-weight: 800;">AI</div>
             <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">Powered Analysis</div>
           </div>
           <div style="text-align: center;">
             <div style="font-size: 24px; font-weight: 800;">15m</div>
             <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">Avg. Test Duration</div>
           </div>
        </div>
      </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'campus-hiring.html', title: 'Campus Hiring', tag: 'SCALE', dir: 'solutions',
      desc: 'Engage, screen, and hire the best graduate talent from thousands of universities seamlessly.',
      featureTitle: 'Send bulk assessments effortlessly',
      featureDesc: 'Send tests to thousands of graduates simultaneously with one click, saving countless hours for your recruitment team.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'enterprise-support.html', title: 'Enterprise Support', tag: 'ENTERPRISE', dir: 'company',
      desc: 'Dedicated account management, custom onboarding, and enterprise-grade security for global hiring operations.',
      featureTitle: 'Scale with confidence',
      featureDesc: 'Our enterprise-grade platform is built to support thousands of users and millions of assessments with 99.99% uptime.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'careers.html', title: 'Join the Team', tag: 'CAREERS', dir: 'company',
      desc: 'Help shape the way the world builds software. Join our mission to make hiring fairer and faster.',
      featureTitle: 'Build the future of HR tech',
      featureDesc: 'Work with a world-class team of engineers, designers, and psychologists to solve complex talent problems.',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'domain-it.html', title: 'IT & Software Assessments', tag: 'DOMAIN', dir: 'solutions',
      desc: 'Specialized testing for IT support, networking, and system administration roles.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 70vh; padding: 180px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.2;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.1;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 1100px;">
            <span class="pf-tag" style="color: var(--teal); margin-bottom: 24px; display: block; text-align: center;">VALDIATING JOB-READY SKILLS</span>
            <h1 style="font-size: clamp(32px, 5vw, 64px); margin-bottom: 32px; line-height: 1.1;">Technical Assessments for IT & Software Development</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 900px; margin: 0 auto 48px; color: rgba(255,255,255,0.8); line-height: 1.6;">
              Objectively evaluate and validate competencies across Information Technology and Software Development functions with a data-driven framework designed for the digital economy.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="padding: 20px 54px; font-size: 18px; border-radius: 100px;">Get Started</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="pf-tag">STRATEGIC IMPORTANCE</span>
          <h2 style="font-size: 42px; color: var(--navy); margin-top: 16px;">Value across the talent lifecycle</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px;">
          <div style="padding: 32px; background: #f8fafc; border-radius: 24px; border: 1px solid rgba(0,0,0,0.03);">
            <div style="font-size: 32px; margin-bottom: 20px;">🎯</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">Skill Validation</h4>
            <p style="color: var(--muted); font-size: 15px; line-height: 1.6;">Confirms candidates’ ability to execute role-specific technical tasks in real-world scenarios.</p>
          </div>
          <div style="padding: 32px; background: #f8fafc; border-radius: 24px; border: 1px solid rgba(0,0,0,0.03);">
            <div style="font-size: 32px; margin-bottom: 20px;">⚖️</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">Objective Decisions</h4>
            <p style="color: var(--muted); font-size: 15px; line-height: 1.6;">Reduces hiring bias through standardized, performance-based evaluation methods.</p>
          </div>
          <div style="padding: 32px; background: #f8fafc; border-radius: 24px; border: 1px solid rgba(0,0,0,0.03);">
            <div style="font-size: 32px; margin-bottom: 20px;">🔗</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">Role Alignment</h4>
            <p style="color: var(--muted); font-size: 15px; line-height: 1.6;">Ensures technical capabilities align with organizational requirements and project needs.</p>
          </div>
          <div style="padding: 32px; background: #f8fafc; border-radius: 24px; border: 1px solid rgba(0,0,0,0.03);">
            <div style="font-size: 32px; margin-bottom: 20px;">⚡</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">Efficiency</h4>
            <p style="color: var(--muted); font-size: 15px; line-height: 1.6;">Enhances team productivity by onboarding candidates with proven readiness.</p>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #f1f5f9;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="pf-tag">CORE COMPETENCY AREAS</span>
          <h2 style="font-size: 42px; color: var(--navy); margin-top: 16px;">Comprehensive Skill Mapping</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 40px;">
          <div style="display: grid; gap: 24px;">
            <div style="background: #fff; padding: 32px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 12px;">
                <span style="width: 28px; height: 28px; background: #e0f2fe; color: #0369a1; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800;">1</span>
                Programming & Development
              </h4>
              <p style="color: var(--muted); font-size: 14px; margin-left: 40px;">Assessment of coding expertise focusing on quality, efficiency, maintainability, and language-specific best practices.</p>
            </div>
            <div style="background: #fff; padding: 32px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 12px;">
                <span style="width: 28px; height: 28px; background: #e0f2fe; color: #0369a1; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800;">2</span>
                Data Structures & Algorithms
              </h4>
              <p style="color: var(--muted); font-size: 14px; margin-left: 40px;">Evaluation of foundational knowledge, optimization, complexity analysis, and computational efficiency.</p>
            </div>
            <div style="background: #fff; padding: 32px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 12px;">
                <span style="width: 28px; height: 28px; background: #e0f2fe; color: #0369a1; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800;">3</span>
                Analytical Problem-Solving
              </h4>
              <p style="color: var(--muted); font-size: 14px; margin-left: 40px;">Measurement of the ability to analyse complex scenarios, apply structured approaches, and optimize solutions.</p>
            </div>
            <div style="background: #fff; padding: 32px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 12px;">
                <span style="width: 28px; height: 28px; background: #e0f2fe; color: #0369a1; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800;">4</span>
                System Design & Architecture
              </h4>
              <p style="color: var(--muted); font-size: 14px; margin-left: 40px;">Evaluating architectural frameworks, design patterns, and trade-offs related to performance and scalability.</p>
            </div>
          </div>
          <div style="display: grid; gap: 24px;">
            <div style="background: #fff; padding: 32px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 12px;">
                <span style="width: 28px; height: 28px; background: #e0f2fe; color: #0369a1; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800;">5</span>
                Database & Backend Engineering
              </h4>
              <p style="color: var(--muted); font-size: 14px; margin-left: 40px;">Assessment of data handling, query optimization, API development, and server-side application logic.</p>
            </div>
            <div style="background: #fff; padding: 32px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 12px;">
                <span style="width: 28px; height: 28px; background: #e0f2fe; color: #0369a1; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800;">6</span>
                Code Quality & Debugging
              </h4>
              <p style="color: var(--muted); font-size: 14px; margin-left: 40px;">Evaluating the ability to identify inefficiencies, resolve bugs, and adhere to clean coding standards.</p>
            </div>
            <div style="background: #fff; padding: 32px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 12px;">
                <span style="width: 28px; height: 28px; background: #e0f2fe; color: #0369a1; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800;">7</span>
                Tech Stack & Tools Proficiency
              </h4>
              <p style="color: var(--muted); font-size: 14px; margin-left: 40px;">Validation of familiarity with modern ecosystems: Git, Cloud platforms, and DevOps frameworks.</p>
            </div>
            <div style="background: #fff; padding: 32px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 12px;">
                <span style="width: 28px; height: 28px; background: #e0f2fe; color: #0369a1; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800;">8</span>
                Professional & Collaborative Skills
              </h4>
              <p style="color: var(--muted); font-size: 14px; margin-left: 40px;">Assessment of technical communication, team adaptability, and articulating solutions to stakeholders.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
          <div style="background: #0f172a; padding: 60px; border-radius: 32px; color: #fff;">
            <span class="pf-tag" style="color: var(--teal);">METHODOLOGY</span>
            <h2 style="font-size: 32px; color: #fff; margin: 16px 0 32px;">Holistic Evaluation Framework</h2>
            <div style="display: grid; gap: 20px;">
              <div style="padding: 24px; background: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                <h5 style="margin-bottom: 8px; color: var(--teal);">Coding Assessments</h5>
                <p style="font-size: 13px; opacity: 0.7;">Language-specific and complex problem-solving challenges.</p>
              </div>
              <div style="padding: 24px; background: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                <h5 style="margin-bottom: 8px; color: var(--teal);">Project-Based Evaluations</h5>
                <p style="font-size: 13px; opacity: 0.7;">Real-world task simulations aligned to specific job roles.</p>
              </div>
              <div style="padding: 24px; background: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                <h5 style="margin-bottom: 8px; color: var(--teal);">Live Technical Interviews</h5>
                <p style="font-size: 13px; opacity: 0.7;">Interactive sessions to assess applied knowledge and communication.</p>
              </div>
              <div style="padding: 24px; background: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                <h5 style="margin-bottom: 8px; color: var(--teal);">System Design & Code Review</h5>
                <p style="font-size: 13px; opacity: 0.7;">Evaluation of architectural thinking and adherence to standards.</p>
              </div>
            </div>
          </div>
          <div>
            <span class="pf-tag">OUTCOMES & INSIGHTS</span>
            <h2 style="font-size: 36px; color: var(--navy); margin: 16px 0 32px;">Actionable Performance Intelligence</h2>
            <p style="font-size: 18px; color: var(--muted); line-height: 1.8; margin-bottom: 40px;">
              Our platform delivers actionable insights across key performance indicators, providing a clear readiness view for role-specific responsibilities.
            </p>
            <div style="display: grid; gap: 24px;">
              <div style="display:flex; align-items:center; gap:16px;">
                <div style="width:40px; height:40px; background:#f1f5f9; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; color:var(--navy);">📊</div>
                <div style="color:var(--navy); font-weight:600;">Technical proficiency and coding accuracy</div>
              </div>
              <div style="display:flex; align-items:center; gap:16px;">
                <div style="width:40px; height:40px; background:#f1f5f9; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; color:var(--navy);">💡</div>
                <div style="color:var(--navy); font-weight:600;">Problem-solving efficiency and logical reasoning</div>
              </div>
              <div style="display:flex; align-items:center; gap:16px;">
                <div style="width:40px; height:40px; background:#f1f5f9; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; color:var(--navy);">🛠️</div>
                <div style="color:var(--navy); font-weight:600;">Practical application of modern technologies</div>
              </div>
              <div style="display:flex; align-items:center; gap:16px;">
                <div style="width:40px; height:40px; background:#f1f5f9; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; color:var(--navy);">🔄</div>
                <div style="color:var(--navy); font-weight:600;">Adaptability to evolving technical requirements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 120px 32px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #fff; text-align: center;">
      <div style="max-width: 1000px; margin: 0 auto;">
        <span class="pf-tag" style="color: var(--teal);">BUSINESS IMPACT</span>
        <h2 style="font-size: 42px; color: #fff; margin-top: 16px; margin-bottom: 60px;">Why Enterprises Choose Prelim IT Assessments</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px;">
          <div>
            <div style="font-size: 48px; font-weight: 800; color: var(--teal); margin-bottom: 8px;">2.5x</div>
            <div style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Faster Hiring Cycles</div>
            <p style="font-size: 14px; opacity: 0.6; line-height: 1.6;">Accelerate screening through highly efficient automated validation.</p>
          </div>
          <div>
            <div style="font-size: 48px; font-weight: 800; color: var(--teal); margin-bottom: 8px;">40%</div>
            <div style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Lower Hiring Risk</div>
            <p style="font-size: 14px; opacity: 0.6; line-height: 1.6;">Reduce associated costs and turnover with validated skill alignment.</p>
          </div>
          <div>
            <div style="font-size: 48px; font-weight: 800; color: var(--teal); margin-bottom: 8px;">95%</div>
            <div style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Role Fit Accuracy</div>
            <p style="font-size: 14px; opacity: 0.6; line-height: 1.6;">Enhance workforce capability and project delivery outcomes reliably.</p>
          </div>
        </div>
      </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'domain-engineering.html', title: 'Engineering & Manufacturing', tag: 'DOMAIN', dir: 'solutions',
      desc: 'Evaluate mechanical, electrical, and civil engineering talent with precision.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 70vh; padding: 180px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #1e3a8a 0%, #172554 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.3;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.2;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 1100px;">
            <span class="pf-tag" style="color: #fff; opacity: 0.8; margin-bottom: 24px; display: block; text-align: center;">ENABLING OPERATIONAL EXCELLENCE</span>
            <h1 style="font-size: clamp(32px, 5vw, 64px); margin-bottom: 32px; line-height: 1.1;">Engineering & Manufacturing Assessments</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 900px; margin: 0 auto 48px; color: rgba(255,255,255,0.9); line-height: 1.6;">
              Data-driven evaluation of industrial operations—helping you understand current-state performance, identify gaps, and unlock measurable improvement opportunities.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="background: #fff; color: #1e3a8a; padding: 20px 54px; font-size: 18px; border-radius: 100px;">Request Assessment</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center;">
          <div>
            <span class="pf-tag">OVERVIEW</span>
            <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 32px;">Visibility across complex industrial ecosystems</h2>
            <p style="font-size: 18px; color: var(--muted); line-height: 1.8; margin-bottom: 32px;">
              Enterprise organizations operate across multi-site plants, global supply chains, and digital systems. Without structured assessments, inefficiencies and risks often remain hidden.
            </p>
            <div style="display: grid; gap: 20px;">
               <div style="display:flex; align-items:center; gap:12px; font-weight:600; color:var(--navy);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Establish operational performance baselines</div>
               <div style="display:flex; align-items:center; gap:12px; font-weight:600; color:var(--navy);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Identify process inefficiencies & cost drivers</div>
               <div style="display:flex; align-items:center; gap:12px; font-weight:600; color:var(--navy);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Align operations with strategic objectives</div>
               <div style="display:flex; align-items:center; gap:12px; font-weight:600; color:var(--navy);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Roadmap for digital transformation (Industry 4.0)</div>
               <div style="display:flex; align-items:center; gap:12px; font-weight:600; color:var(--navy);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Prioritize investment & decision-making</div>
            </div>
          </div>
          <div style="background: #f8fafc; padding: 50px; border-radius: 32px; border: 1px solid rgba(0,0,0,0.05);">
            <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 40px;">Our Five-Phase Approach</h3>
            <div style="display: grid; gap: 32px;">
              <div style="display: flex; gap: 20px;">
                <div style="flex-shrink:0; width: 44px; height: 44px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #1e3a8a; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">01</div>
                <div>
                  <h4 style="font-size: 17px; margin-bottom: 6px;">Discovery & Diagnostic</h4>
                  <p style="font-size: 13px; color: var(--muted);">Comprehensive review of workflows, plant performance, and engineering practices.</p>
                </div>
              </div>
              <div style="display: flex; gap: 20px;">
                <div style="flex-shrink:0; width: 44px; height: 44px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #1e3a8a; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">02</div>
                <div>
                  <h4 style="font-size: 17px; margin-bottom: 6px;">Capability & Maturity</h4>
                  <p style="font-size: 13px; color: var(--muted);">Maturity evaluation across digital manufacturing, quality, and leadership alignment.</p>
                </div>
              </div>
              <div style="display: flex; gap: 20px;">
                <div style="flex-shrink:0; width: 44px; height: 44px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #1e3a8a; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">03</div>
                <div>
                  <h4 style="font-size: 17px; margin-bottom: 6px;">Performance Benchmarking</h4>
                  <p style="font-size: 13px; color: var(--muted);">Comparative analysis against industry best practices and global KPIs (OEE, Yield).</p>
                </div>
              </div>
              <div style="display: flex; gap: 20px;">
                <div style="flex-shrink:0; width: 44px; height: 44px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #1e3a8a; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">04</div>
                <div>
                  <h4 style="font-size: 17px; margin-bottom: 6px;">Gap & Risk Identification</h4>
                  <p style="font-size: 13px; color: var(--muted);">Identifying supply chain vulnerabilities, capacity constraints, and tech limitations.</p>
                </div>
              </div>
              <div style="display: flex; gap: 20px;">
                <div style="flex-shrink:0; width: 44px; height: 44px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #1e3a8a; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">05</div>
                <div>
                  <h4 style="font-size: 17px; margin-bottom: 6px;">Transformation Roadmap</h4>
                  <p style="font-size: 13px; color: var(--muted);">Prioritized investment plans, implementation timelines, and risk mitigation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #0f172a; color: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="pf-tag" style="color: var(--teal);">KEY ASSESSMENT DOMAINS</span>
          <h2 style="font-size: 42px; color: #fff; margin-top: 16px;">Holistic Enterprise View</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
          <div style="padding: 40px; background: rgba(255,255,255,0.03); border-radius: 24px; border: 1px solid rgba(255,255,255,0.08);">
            <h4 style="font-size: 20px; color: var(--teal); margin-bottom: 16px;">Operational Excellence</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6;">Continuous improvement practices, process standardization, and enterprise performance metrics.</p>
          </div>
          <div style="padding: 40px; background: rgba(255,255,255,0.03); border-radius: 24px; border: 1px solid rgba(255,255,255,0.08);">
            <h4 style="font-size: 20px; color: var(--teal); margin-bottom: 16px;">Engineering & R&D</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6;">Design efficiency, configuration management, and innovation lifecycle effectiveness.</p>
          </div>
          <div style="padding: 40px; background: rgba(255,255,255,0.03); border-radius: 24px; border: 1px solid rgba(255,255,255,0.08);">
            <h4 style="font-size: 20px; color: var(--teal); margin-bottom: 16px;">Manufacturing Operations</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6;">Production throughput, Overall Equipment Effectiveness (OEE), and Lean manufacturing maturity.</p>
          </div>
          <div style="padding: 40px; background: rgba(255,255,255,0.03); border-radius: 24px; border: 1px solid rgba(255,255,255,0.08);">
            <h4 style="font-size: 20px; color: var(--teal); margin-bottom: 16px;">Supply Chain & Logistics</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6;">Supplier risk exposure, inventory optimization, and distribution efficiency diagnostics.</p>
          </div>
          <div style="padding: 40px; background: rgba(255,255,255,0.03); border-radius: 24px; border: 1px solid rgba(255,255,255,0.08);">
            <h4 style="font-size: 20px; color: var(--teal); margin-bottom: 16px;">Digital & Industry 4.0</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6;">Automation adoption, IoT integration, and Digital Twin readiness across smart manufacturing landscapes.</p>
          </div>
          <div style="padding: 40px; background: rgba(255,255,255,0.03); border-radius: 24px; border: 1px solid rgba(255,255,255,0.08);">
            <h4 style="font-size: 20px; color: var(--teal); margin-bottom: 16px;">Workforce & Culture</h4>
            <p style="color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6;">Skills mapping, organizational structure effectiveness, and leadership alignment for industrial scale.</p>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <span class="pf-tag">BUSINESS OUTCOMES</span>
        <h2 style="font-size: 36px; color: var(--navy); margin-top: 16px; margin-bottom: 60px;">Measurable Industrial Impact</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px;">
          <div><h3 style="font-size: 24px; color: #1e3a8a; margin-bottom: 12px;">Cost Reduction</h3><p style="font-size:14px; color:var(--muted);">Through optimized close-loop process control.</p></div>
          <div><h3 style="font-size: 24px; color: #1e3a8a; margin-bottom: 12px;">Throughput</h3><p style="font-size:14px; color:var(--muted);">Enhanced production volume and asset utilization.</p></div>
          <div><h3 style="font-size: 24px; color: #1e3a8a; margin-bottom: 12px;">Quality</h3><p style="font-size:14px; color:var(--muted);">Reduced defect rates and improved consistency.</p></div>
          <div><h3 style="font-size: 24px; color: #1e3a8a; margin-bottom: 12px;">Agility</h3><p style="font-size:14px; color:var(--muted);">Increased market responsiveness and digital speed.</p></div>
        </div>
      </div>
    </section>

    <section style="padding: 80px 32px; background: #f8fafc; border-top: 1px solid rgba(0,0,0,0.05);">
       <div style="max-width: 1000px; margin: 0 auto; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 40px; opacity: 0.6;">
          <h4 style="font-size: 14px; color: var(--muted); text-transform: uppercase; letter-spacing: 2px;">Aligning with Global Standards</h4>
          <div style="font-weight: 800; color: var(--navy); font-size: 20px;">ISO 9001</div>
          <div style="font-weight: 800; color: var(--navy); font-size: 20px;">Six Sigma</div>
          <div style="font-weight: 800; color: var(--navy); font-size: 20px;">Industry 4.0</div>
          <div style="font-weight: 800; color: var(--navy); font-size: 20px;">Lean Mfg</div>
       </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'domain-finance.html', title: 'Finance & Accounting', tag: 'DOMAIN', dir: 'solutions',
      desc: 'Audit-ready evaluations across compliance, controls, and core finance processes.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 70vh; padding: 180px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.2;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.1;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 1100px;">
            <span class="pf-tag" style="color: var(--teal); margin-bottom: 24px; display: block; text-align: center;">REGULATED ENVIRONMENTS</span>
            <h1 style="font-size: clamp(32px, 5vw, 64px); margin-bottom: 32px; line-height: 1.1;">Financial Services and Accounting</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 900px; margin: 0 auto 48px; color: rgba(255,255,255,0.8); line-height: 1.6;">
              Standardize assessments. Accelerate readiness. Prove control. An audit-ready platform for regulated finance and enterprise accounting teams.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="padding: 20px 54px; font-size: 18px; border-radius: 100px;">Request a Demo</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: center;">
          <div>
            <span class="pf-tag">CORE PLATFORM</span>
            <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 32px;">Consistent, audit-ready evaluations</h2>
            <p style="font-size: 18px; color: var(--muted); line-height: 1.8; margin-bottom: 40px;">
              Prelim software provides a centralized engine for running evaluations across compliance, controls, and core processes—with built-in evidence, approvals, and executive reporting.
            </p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
               <div style="padding: 32px; background: #f8fafc; border-radius: 24px; border: 1px solid rgba(0,0,0,0.03);">
                 <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Financial Services</h4>
                 <p style="font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 16px;">Assess KYC/AML controls and payment security readiness with defensible reporting.</p>
                 <a href="#fs" style="font-size: 13px; font-weight: 700; color: var(--teal);">Explore Solution →</a>
               </div>
               <div style="padding: 32px; background: #f8fafc; border-radius: 24px; border: 1px solid rgba(0,0,0,0.03);">
                 <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Accounting</h4>
                 <p style="font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 16px;">Accelerate close assessments and strengthen ICFR discipline with evidence-driven execution.</p>
                 <a href="#acc" style="font-size: 13px; font-weight: 700; color: var(--teal);">Explore Solution →</a>
               </div>
            </div>
          </div>
          <div style="background: #0f172a; padding: 50px; border-radius: 32px; color: #fff;">
            <h3 style="font-size: 22px; color: #fff; margin-bottom: 32px;">Platform Value</h3>
            <div style="display: grid; gap: 20px;">
              <div style="padding: 24px; background: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                <h5 style="margin-bottom: 8px; color: var(--teal);">Standardized Templates</h5>
                <p style="font-size: 13px; opacity: 0.7;">Repeatable programs with consistent scoring and framework mapping.</p>
              </div>
              <div style="padding: 24px; background: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                <h5 style="margin-bottom: 8px; color: var(--teal);">Workflow Automation</h5>
                <p style="font-size: 13px; opacity: 0.7;">Owner assignments, multi-level reviews, and structural sign-offs.</p>
              </div>
              <div style="padding: 24px; background: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                <h5 style="margin-bottom: 8px; color: var(--teal);">Evidence Lifecycle</h5>
                <p style="font-size: 13px; opacity: 0.7;">Centralized artifact management linked directly to controls and findings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="fs" style="padding: 100px 32px; background: #f1f5f9;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="pf-tag">FINANCIAL SERVICES</span>
          <h2 style="font-size: 42px; color: var(--navy); margin-top: 16px;">Compliance & Control Assessments</h2>
          <p style="font-size: 18px; color: var(--muted); max-width: 800px; margin: 24px auto 0;">Run defensible evaluations across layered obligations including KYC/AML, PCI-DSS, and SOX-style traceability.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
          <div style="background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
            <div style="font-size: 24px; margin-bottom: 20px;">👤</div>
            <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">KYC/AML Controls</h4>
            <p style="font-size: 14px; color: var(--muted); line-height: 1.6;">Validate onboarding governance, risk scoring, monitoring oversight, and documentation readiness.</p>
          </div>
          <div style="background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
            <div style="font-size: 24px; margin-bottom: 20px;">💳</div>
            <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Payments & PCI-DSS</h4>
            <p style="font-size: 14px; color: var(--muted); line-height: 1.6;">Assess data handling scope and security readiness to support rigorous compliance programs.</p>
          </div>
          <div style="background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
            <div style="font-size: 24px; margin-bottom: 20px;">🏛️</div>
            <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">SOX/ICFR Alignment</h4>
            <p style="font-size: 14px; color: var(--muted); line-height: 1.6;">Support assessment structure and evidence discipline for internal control expectations.</p>
          </div>
          <div style="background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
            <div style="font-size: 24px; margin-bottom: 20px;">⚖️</div>
            <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Operational Risk</h4>
            <p style="font-size: 14px; color: var(--muted); line-height: 1.6;">Evaluate reconciliations, settlements, exception handling, and process-level approval steps.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="acc" style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
          <div style="order: 2;">
            <span class="pf-tag">ACCOUNTING</span>
            <h2 style="font-size: 42px; color: var(--navy); margin-top: 16px;">Accelerate Close & Reporting</h2>
            <p style="font-size: 18px; color: var(--muted); line-height: 1.8; margin: 24px 0 40px;">
              Turn accounting assessments into a repeatable program. Identify bottlenecks, improve accuracy, and strengthen ICFR discipline without increasing audit risk.
            </p>
            <div style="display: grid; gap: 24px;">
               <div style="padding: 24px; border-left: 4px solid var(--teal); background: #f8fafc;">
                 <h4 style="font-size: 17px; margin-bottom: 4px;">Financial Close Diagnostics</h4>
                 <p style="font-size: 13px; color: var(--muted);">Identify handoff delays, rework drivers, and controls friction.</p>
               </div>
               <div style="padding: 24px; border-left: 4px solid var(--teal); background: #f8fafc;">
                 <h4 style="font-size: 17px; margin-bottom: 4px;">Accounting Policy & Audit Readiness</h4>
                 <p style="font-size: 13px; color: var(--muted);">Structure policy reviews for GST, Ind AS, US GAAP, and disclosure readiness.</p>
               </div>
               <div style="padding: 24px; border-left: 4px solid var(--teal); background: #f8fafc;">
                 <h4 style="font-size: 17px; margin-bottom: 4px;">Consolidation & Group Reporting</h4>
                 <p style="font-size: 13px; color: var(--muted);">Evaluate pack quality, intercompany controls, and reconciliation cadence.</p>
               </div>
            </div>
          </div>
          <div style="order: 1;">
            <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 60px; border-radius: 32px; color: #fff;">
               <h3 style="font-size: 28px; color: #fff; margin-bottom: 40px;">Outputs Teams Use</h3>
               <div style="display: grid; gap: 32px;">
                  <div>
                    <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8; margin-bottom: 8px;">Maturity Scorecard</div>
                    <div style="font-size: 18px; font-weight: 700;">Process diagnostics and readiness benchmarks.</div>
                  </div>
                  <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1);">
                  <div>
                    <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8; margin-bottom: 8px;">Remediation Plan</div>
                    <div style="font-size: 18px; font-weight: 700;">Prioritized control gaps aligned to ICFR discipline.</div>
                  </div>
                  <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1);">
                  <div>
                    <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8; margin-bottom: 8px;">Audit-Ready Report</div>
                    <div style="font-size: 18px; font-weight: 700;">Structured assessment with direct evidence references.</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'domain-data-science.html', title: 'Data Science & Analytics', tag: 'DOMAIN', dir: 'solutions',
      desc: 'Assess AI, machine learning, and advanced analytics capabilities.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 70vh; padding: 180px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.3;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.2;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 1100px;">
            <span class="pf-tag" style="color: #fff; opacity: 0.8; margin-bottom: 24px; display: block; text-align: center;">ANALYTICS AMBITION</span>
            <h1 style="font-size: clamp(32px, 5vw, 64px); margin-bottom: 32px; line-height: 1.1;">Data Science and Analytics Assessments</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 900px; margin: 0 auto 48px; color: rgba(255,255,255,0.9); line-height: 1.6;">
              Identify gaps, reduce risk, and accelerate outcomes across data, AI/ML, and analytics—without disrupting delivery.
            </p>
            <div class="hero-btns" style="justify-content: center;">
              <button class="btn-primary" style="background: #fff; color: #4f46e5; padding: 20px 54px; font-size: 18px; border-radius: 100px;">Request an Assessment</button>
              <button class="btn-secondary" style="border-color: rgba(255,255,255,0.3); color: #fff; padding: 20px 54px; font-size: 18px; border-radius: 100px;">Talk to an Expert</button>
            </div>
            <p style="text-align:center; color: rgba(255,255,255,0.7); font-size: 14px; margin-top: 24px;">Get a clear baseline, prioritized recommendations, and a pragmatic plan aligned to your goals.</p>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
          <div>
            <span class="pf-tag">WHAT WE ASSESS</span>
            <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 32px;">Objective, evidence-based maturity diagnostics</h2>
            <p style="font-size: 18px; color: var(--muted); line-height: 1.8; margin-bottom: 40px;">
              Prelim assessments provide an objective view of your current state across data platforms, analytics, AI/ML lifecycle, and operating models. We focus on impact, feasibility, and time-to-value—so your teams can execute with confidence.
            </p>
            <div style="background: #f8fafc; padding: 40px; border-radius: 32px; border: 1px solid rgba(0,0,0,0.05);">
              <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 32px;">How It Works</h3>
              <div style="display: grid; gap: 24px;">
                <div style="display:flex; gap:16px;">
                  <div style="width:28px; height:28px; background:#4f46e5; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; flex-shrink:0;">1</div>
                  <div><h5 style="margin-bottom:4px; font-size:16px;">Discover</h5><p style="font-size:13px; color:var(--muted);">Align on goals, constraints, stakeholders, and success metrics.</p></div>
                </div>
                <div style="display:flex; gap:16px;">
                  <div style="width:28px; height:28px; background:#4f46e5; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; flex-shrink:0;">2</div>
                  <div><h5 style="margin-bottom:4px; font-size:16px;">Assess</h5><p style="font-size:13px; color:var(--muted);">Review data systems, workflows, governance, and delivery practices.</p></div>
                </div>
                <div style="display:flex; gap:16px;">
                  <div style="width:28px; height:28px; background:#4f46e5; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; flex-shrink:0;">3</div>
                  <div><h5 style="margin-bottom:4px; font-size:16px;">Recommend</h5><p style="font-size:13px; color:var(--muted);">Provide prioritized improvements and architecture guidance.</p></div>
                </div>
                <div style="display:flex; gap:16px;">
                  <div style="width:28px; height:28px; background:#4f46e5; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; flex-shrink:0;">4</div>
                  <div><h5 style="margin-bottom:4px; font-size:16px;">Enable</h5><p style="font-size:13px; color:var(--muted);">Deploy roadmaps, backlogs, and adoption plans for outcomes.</p></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
              <div style="padding: 24px; background: #fff; border-radius: 20px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                <div style="font-size: 24px; margin-bottom: 16px;">📂</div>
                <h4 style="font-size: 16px; margin-bottom: 8px;">Data Readiness</h4>
                <p style="font-size: 12px; color: var(--muted);">Architecture, integration, scalability, and cost.</p>
              </div>
              <div style="padding: 24px; background: #fff; border-radius: 20px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                <div style="font-size: 24px; margin-bottom: 16px;">🛡️</div>
                <h4 style="font-size: 16px; margin-bottom: 8px;">Data Governance</h4>
                <p style="font-size: 12px; color: var(--muted);">Lineage, stewardship, and access controls.</p>
              </div>
              <div style="padding: 24px; background: #fff; border-radius: 20px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                <div style="font-size: 24px; margin-bottom: 16px;">📊</div>
                <h4 style="font-size: 16px; margin-bottom: 8px;">BI Effectiveness</h4>
                <p style="font-size: 12px; color: var(--muted);">Reporting consistency and decision enablement.</p>
              </div>
              <div style="padding: 24px; background: #fff; border-radius: 20px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                <div style="font-size: 24px; margin-bottom: 16px;">🤖</div>
                <h4 style="font-size: 16px; margin-bottom: 8px;">MLOps Maturity</h4>
                <p style="font-size: 12px; color: var(--muted);">Model lifecycle, CI/CD, monitoring, and drift.</p>
              </div>
              <div style="padding: 24px; background: #fff; border-radius: 20px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                <div style="font-size: 24px; margin-bottom: 16px;">✨</div>
                <h4 style="font-size: 16px; margin-bottom: 8px;">GenAI Readiness</h4>
                <p style="font-size: 12px; color: var(--muted);">Use cases, security, and evaluation guardrails.</p>
              </div>
              <div style="padding: 24px; background: #fff; border-radius: 20px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                <div style="font-size: 24px; margin-bottom: 16px;">🔒</div>
                <h4 style="font-size: 16px; margin-bottom: 8px;">Risk & Security</h4>
                <p style="font-size: 12px; color: var(--muted);">Privacy controls, auditability, and model risk.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #0f172a; color: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
          <div style="background: rgba(255,255,255,0.05); padding: 60px; border-radius: 32px; border: 1px solid rgba(255,255,255,0.1);">
             <h3 style="font-size: 28px; margin-bottom: 40px; color: #fff;">Deliverables That Matter</h3>
             <div style="display: grid; gap: 24px;">
               <div style="display:flex; gap:16px;">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                 <div><h5 style="margin-bottom:4px;">Executive Summary</h5><p style="font-size:13px; opacity:0.6;">Key findings, risks, and strategic opportunities.</p></div>
               </div>
               <div style="display:flex; gap:16px;">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                 <div><h5 style="margin-bottom:4px;">Maturity Scorecard</h5><p style="font-size:13px; opacity:0.6;">Current vs target state across critical dimensions.</p></div>
               </div>
               <div style="display:flex; gap:16px;">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                 <div><h5 style="margin-bottom:4px;">Prioritized Backlog</h5><p style="font-size:13px; opacity:0.6;">Quick wins + strategic initiatives (impact/effort view).</p></div>
               </div>
               <div style="display:flex; gap:16px;">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                 <div><h5 style="margin-bottom:4px;">30/60/90-Day Roadmap</h5><p style="font-size:13px; opacity:0.6;">Pragmatic actions your teams can implement immediately.</p></div>
               </div>
             </div>
          </div>
          <div>
            <span class="pf-tag" style="color: var(--teal);">WHY ENTERPRISES CHOOSE PRELIM</span>
            <h2 style="font-size: 36px; color: #fff; margin: 20px 0 40px;">Practical execution over slideware</h2>
            <div style="display: grid; gap: 32px;">
              <div>
                <h4 style="font-size: 18px; color: var(--teal); margin-bottom: 8px;">Business-First</h4>
                <p style="font-size: 14px; opacity: 0.6; line-height: 1.6;">We tie every technical recommendation to measurable business outcomes and time-to-value.</p>
              </div>
              <div>
                <h4 style="font-size: 18px; color: var(--teal); margin-bottom: 8px;">Secure by Design</h4>
                <p style="font-size: 14px; opacity: 0.6; line-height: 1.6;">Governance and controls are embedded from day one, ensuring compliance with enterprise requirements.</p>
              </div>
              <div>
                <h4 style="font-size: 18px; color: var(--teal); margin-bottom: 8px;">Vendor-Neutral</h4>
                <p style="font-size: 14px; opacity: 0.6; line-height: 1.6;">Our guidance fits your existing ecosystem and long-term cloud strategy without vendor lock-in.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
       <div style="max-width: 900px; margin: 0 auto;">
          <h2 style="text-align: center; margin-bottom: 60px;">Common Questions</h2>
          <div style="display: grid; gap: 32px;">
             <div style="padding: 32px; background: #f8fafc; border-radius: 20px;">
                <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">How long does an assessment take?</h4>
                <p style="color: var(--muted); line-height: 1.6;">Typically delivered in phases so value starts early and disruption stays low. Full diagnostics usually take 2-4 weeks.</p>
             </div>
             <div style="padding: 32px; background: #f8fafc; border-radius: 20px;">
                <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Do you provide a roadmap even if we don’t buy implementation?</h4>
                <p style="color: var(--muted); line-height: 1.6;">Yes—deliverables are structured to be actionable independently. We provide the blueprint for your internal teams to execute.</p>
             </div>
          </div>
       </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'domain-healthcare.html', title: 'Health & Life Sciences', tag: 'DOMAIN', dir: 'solutions',
      desc: 'Regulatory, clinical, and operational excellence diagnostics for healthcare organizations.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 70vh; padding: 180px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #065f46 0%, #064e3b 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.3;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.2;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 1100px;">
            <span class="pf-tag" style="color: #fff; opacity: 0.8; margin-bottom: 24px; display: block; text-align: center;">CLINICAL &amp; REGULATORY EXCELLENCE</span>
            <h1 style="font-size: clamp(32px, 5vw, 64px); margin-bottom: 32px; line-height: 1.1;">Health &amp; Life Sciences Assessments</h1>
            <p class="hero-p" style="text-align:center; font-size: 22px; max-width: 900px; margin: 0 auto 48px; color: rgba(255,255,255,0.9); line-height: 1.6;">
              Drive informed decisions with data-driven, enterprise-grade assessments tailored for regulatory, clinical, and operational excellence.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="background: #fff; color: #065f46; padding: 20px 54px; font-size: 18px; border-radius: 100px;">Request an Assessment</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="pf-tag">ASSESSMENT OFFERINGS</span>
          <h2 style="font-size: 42px; color: var(--navy); margin-top: 16px;">Evaluating readiness across the ecosystem</h2>
          <p style="font-size: 18px; color: var(--muted); max-width: 800px; margin: 20px auto 0;">Prelim assessment services help organizations evaluate capabilities, identify gaps, and define transformation roadmaps aligned with regulatory, clinical, and operational excellence.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
          <div style="padding: 40px; background: #f0fdf4; border-radius: 24px; border: 1px solid rgba(6,95,70,0.08);">
            <div style="font-size: 32px; margin-bottom: 20px;">&#127760;</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">Digital Maturity Assessment</h4>
            <p style="color: var(--muted); font-size: 14px; line-height: 1.6;">Evaluate readiness across digital platforms, data ecosystems, and emerging technologies to accelerate transformation.</p>
          </div>
          <div style="padding: 40px; background: #f0fdf4; border-radius: 24px; border: 1px solid rgba(6,95,70,0.08);">
            <div style="font-size: 32px; margin-bottom: 20px;">&#9878;&#65039;</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">Regulatory &amp; Compliance</h4>
            <p style="color: var(--muted); font-size: 14px; line-height: 1.6;">Ensure alignment with global standards (FDA, HIPAA, GxP) through a structured review of processes, controls, and documentation.</p>
          </div>
          <div style="padding: 40px; background: #f0fdf4; border-radius: 24px; border: 1px solid rgba(6,95,70,0.08);">
            <div style="font-size: 32px; margin-bottom: 20px;">&#128202;</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">Data &amp; Analytics Assessment</h4>
            <p style="color: var(--muted); font-size: 14px; line-height: 1.6;">Assess data integrity, governance, interoperability, and advanced analytics to unlock actionable insights.</p>
          </div>
          <div style="padding: 40px; background: #f0fdf4; border-radius: 24px; border: 1px solid rgba(6,95,70,0.08);">
            <div style="font-size: 32px; margin-bottom: 20px;">&#129514;</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">Clinical &amp; R&amp;D Process</h4>
            <p style="color: var(--muted); font-size: 14px; line-height: 1.6;">Optimize clinical operations and research workflows to improve efficiency, patient outcomes, and innovation velocity.</p>
          </div>
          <div style="padding: 40px; background: #f0fdf4; border-radius: 24px; border: 1px solid rgba(6,95,70,0.08);">
            <div style="font-size: 32px; margin-bottom: 20px;">&#127959;&#65039;</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">IT &amp; Infrastructure</h4>
            <p style="color: var(--muted); font-size: 14px; line-height: 1.6;">Review enterprise architecture, cybersecurity posture, and cloud adoption to support modern healthcare demands.</p>
          </div>
          <div style="padding: 40px; background: #f0fdf4; border-radius: 24px; border: 1px solid rgba(6,95,70,0.08);">
            <div style="font-size: 32px; margin-bottom: 20px;">&#128241;</div>
            <h4 style="font-size: 20px; color: var(--navy); margin-bottom: 12px;">Product &amp; Platform</h4>
            <p style="color: var(--muted); font-size: 14px; line-height: 1.6;">Evaluate existing healthcare products and platforms for performance, usability, compliance, and market readiness.</p>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #f1f5f9;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
          <div style="background: #fff; padding: 60px; border-radius: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
             <span class="pf-tag">OUR APPROACH</span>
             <h2 style="font-size: 32px; color: var(--navy); margin: 20px 0 32px;">Structured, expert-led evaluation</h2>
             <div style="display: grid; gap: 24px;">
               <div style="display:flex; gap:16px;">
                 <div style="width:24px; height:24px; min-width:24px; background:#059669; border-radius:50%; display:flex; align-items:center; justify-content:center;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg></div>
                 <div><h5 style="margin-bottom:4px;">Structured Frameworks</h5><p style="font-size:13px; color:var(--muted);">Industry-aligned methodologies tailored to healthcare ecosystems.</p></div>
               </div>
               <div style="display:flex; gap:16px;">
                 <div style="width:24px; height:24px; min-width:24px; background:#059669; border-radius:50%; display:flex; align-items:center; justify-content:center;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg></div>
                 <div><h5 style="margin-bottom:4px;">Expert-Led Evaluation</h5><p style="font-size:13px; color:var(--muted);">Deep domain expertise across pharma, biotech, medtech, and providers.</p></div>
               </div>
               <div style="display:flex; gap:16px;">
                 <div style="width:24px; height:24px; min-width:24px; background:#059669; border-radius:50%; display:flex; align-items:center; justify-content:center;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg></div>
                 <div><h5 style="margin-bottom:4px;">Benchmarking</h5><p style="font-size:13px; color:var(--muted);">Comparative insights against industry standards and global best practices.</p></div>
               </div>
               <div style="display:flex; gap:16px;">
                 <div style="width:24px; height:24px; min-width:24px; background:#059669; border-radius:50%; display:flex; align-items:center; justify-content:center;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg></div>
                 <div><h5 style="margin-bottom:4px;">Actionable Insights</h5><p style="font-size:13px; color:var(--muted);">Clear recommendations with prioritized, outcome-driven roadmaps.</p></div>
               </div>
             </div>
          </div>
          <div>
            <span class="pf-tag">BUSINESS OUTCOMES</span>
            <h2 style="font-size: 36px; color: var(--navy); margin: 20px 0 40px;">Measurable health ecosystem impact</h2>
            <div style="display: grid; gap: 20px;">
               <div style="padding: 24px; background: #fff; border-radius: 16px; font-weight: 600; color: var(--navy); display: flex; align-items: center; gap: 16px; border: 1px solid rgba(0,0,0,0.05);">
                 <span style="font-size: 20px;">&#128200;</span> Improved regulatory compliance and risk mitigation
               </div>
               <div style="padding: 24px; background: #fff; border-radius: 16px; font-weight: 600; color: var(--navy); display: flex; align-items: center; gap: 16px; border: 1px solid rgba(0,0,0,0.05);">
                 <span style="font-size: 20px;">&#9881;&#65039;</span> Enhanced operational efficiency and cost optimization
               </div>
               <div style="padding: 24px; background: #fff; border-radius: 16px; font-weight: 600; color: var(--navy); display: flex; align-items: center; gap: 16px; border: 1px solid rgba(0,0,0,0.05);">
                 <span style="font-size: 20px;">&#128640;</span> Accelerated digital transformation initiatives
               </div>
               <div style="padding: 24px; background: #fff; border-radius: 16px; font-weight: 600; color: var(--navy); display: flex; align-items: center; gap: 16px; border: 1px solid rgba(0,0,0,0.05);">
                 <span style="font-size: 20px;">&#128161;</span> Strengthened data-driven decision-making
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff; text-align: center;">
      <div style="max-width: 1000px; margin: 0 auto;">
        <span class="pf-tag">WHY CHOOSE US</span>
        <h2 style="font-size: 42px; color: var(--navy); margin-top: 16px; margin-bottom: 60px;">Deep healthcare domain expertise</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px;">
          <div><h3 style="font-size: 20px; margin-bottom: 12px; color: #065f46;">Proven Delivery</h3><p style="font-size:14px; color:var(--muted);">Enterprise delivery capabilities across global regions.</p></div>
          <div><h3 style="font-size: 20px; margin-bottom: 12px; color: #065f46;">Domain Experts</h3><p style="font-size:14px; color:var(--muted);">Deep healthcare and life sciences expertise across the board.</p></div>
          <div><h3 style="font-size: 20px; margin-bottom: 12px; color: #065f46;">Scalable Models</h3><p style="font-size:14px; color:var(--muted);">Scalable and customizable assessment models tailored to your stage.</p></div>
          <div><h3 style="font-size: 20px; margin-bottom: 12px; color: #065f46;">Business Impact</h3><p style="font-size:14px; color:var(--muted);">Focus on measurable impact and long-term enterprise value.</p></div>
        </div>
      </div>
    </section>
    ` + bottomCTA
    },
    {
        file: 'domain-telecom.html', title: 'Telecom Assessments', tag: 'DOMAIN', dir: 'solutions',
      desc: 'Modernizing network and OSS/BSS landscapes for telecom operators.',
      customHtml: `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 60vh; padding: 160px 0 100px; position: relative; overflow: hidden; background: linear-gradient(135deg, #db2777 0%, #831843 100%);">
        <div class="hero-blob hb-teal" style="width:600px;height:600px;top:-150px;left:-150px;opacity:0.3;"></div>
        <div class="hero-blob hb-cyan" style="width:400px;height:400px;bottom:-100px;right:5%;animation-delay: 2s;opacity:0.2;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content" style="max-width: 1000px;">
            <span class="pf-tag" style="color: #fff; opacity: 0.8; margin-bottom: 24px; display: block; text-align: center;">NETWORK TRANSFORMATION</span>
            <h1 style="font-size: clamp(32px, 5vw, 60px); margin-bottom: 32px; line-height: 1.1;">Telecommunications</h1>
            <p class="hero-p" style="text-align:center; font-size: 20px; max-width: 850px; margin: 0 auto 48px; color: rgba(255,255,255,0.9); line-height: 1.6;">
              De-risk modernization with structured, outcome-driven assessments across networks, 5G, OSS/BSS, and security.
            </p>
            <div class="hero-btns" style="justify-content: center;"><button class="btn-primary" style="background: #fff; color: #db2777; padding: 18px 48px; font-size: 18px; border-radius: 100px;">Request Assessment</button></div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #fff;">
      <div style="max-width: 1200px; margin: 0 auto;">
         <div style="text-align: center; margin-bottom: 80px;">
            <span class="pf-tag">WHAT WE ASSESS</span>
            <h2 style="font-size: 36px; color: var(--navy);">Modernize with clarity and confidence</h2>
         </div>
         <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
            <div style="background: #fdf2f8; padding: 40px; border-radius: 24px;">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Network Readiness</h4>
              <p style="color: var(--muted); font-size: 14px;">Validate performance and scalability across core, transport, and access.</p>
            </div>
            <div style="background: #fdf2f8; padding: 40px; border-radius: 24px;">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">5G / Private 5G</h4>
              <p style="color: var(--muted); font-size: 14px;">Assess architecture, integration dependencies, and deployment roadmap.</p>
            </div>
            <div style="background: #fdf2f8; padding: 40px; border-radius: 24px;">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">OSS/BSS Capability</h4>
              <p style="color: var(--muted); font-size: 14px;">Modernization pathways for service velocity and orchestration.</p>
            </div>
            <div style="background: #fdf2f8; padding: 40px; border-radius: 24px;">
              <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px;">Telecom Security</h4>
              <p style="color: var(--muted); font-size: 14px;">Identify risk exposures across 5G architecture and cloud infrastructure.</p>
            </div>
         </div>
      </div>
    </section>

    <section style="padding: 100px 32px; background: #0f172a; color: #fff;">
      <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
        <span class="pf-tag" style="color: var(--teal);">ENGAGEMENT OPTIONS</span>
        <h2 style="font-size: 42px; color: #fff; margin: 20px 0 60px;">Scalable Delivery</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; text-align: left;">
           <div style="padding: 32px; background: rgba(255,255,255,0.03); border-radius: 20px; border: 1px solid rgba(255,255,255,0.08);">
             <h4 style="color: var(--teal); margin-bottom: 12px;">Rapid Assessment</h4>
             <p style="font-size: 13px; opacity: 0.7;">2–4 weeks focused discovery and prioritized roadmap.</p>
           </div>
           <div style="padding: 32px; background: rgba(255,255,255,0.03); border-radius: 20px; border: 1px solid rgba(255,255,255,0.08);">
             <h4 style="color: var(--teal); margin-bottom: 12px;">Deep-Dive</h4>
             <p style="font-size: 13px; opacity: 0.7;">Detailed domain assessment with target-state blueprint.</p>
           </div>
           <div style="padding: 32px; background: rgba(255,255,255,0.03); border-radius: 20px; border: 1px solid rgba(255,255,255,0.08);">
             <h4 style="color: var(--teal); margin-bottom: 12px;">Continuous</h4>
             <p style="font-size: 13px; opacity: 0.7;">Quarterly health checks and optimization recommendations.</p>
           </div>
        </div>
      </div>
    </section>
    ` + bottomCTA
    },
    { 
      file: 'intern-hiring.html', title: 'Intern Hiring', tag: 'INTERNS', dir: 'solutions',
      desc: 'Identify high-potential interns with structured, fair assessments.',
      featureTitle: 'Screen at scale for university programs',
      featureDesc: 'Manage high volumes of early-career talent with automated screening and objective coding challenges.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'remote-hiring.html', title: 'Remote Hiring', tag: 'REMOTE', dir: 'solutions',
      desc: 'Screen remote candidates effectively with async code and video tools.',
      featureTitle: 'Built for distributed teams',
      featureDesc: 'Our async assessment tools and integrated video interviewing platform help you hire across timezones.',
      img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'technology-hiring.html', title: 'Technology Hiring', tag: 'TECH', dir: 'solutions',
      desc: 'Deep-dive into technical skills with role-specific coding challenges.',
      featureTitle: 'Verify every line of code',
      featureDesc: 'Advanced IDE support and automated testing suites provide deep signal on every candidate\'s technical depth.',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'non-tech-hiring.html', title: 'Non-Tech Hiring', tag: 'NON-TECH', dir: 'solutions',
      desc: 'Assess soft skills, aptitude, and behavioral fit for non-technical roles.',
      featureTitle: 'Assess the whole person',
      featureDesc: 'Go beyond the resume with psychometric testing and situational judgement tests for business roles.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'tech-hiring-managers.html', title: 'Tech Hiring for Managers', tag: 'MANAGEMENT', dir: 'solutions',
      desc: 'Empower hiring managers with deep technical signals and clear reports.',
      featureTitle: 'Data-driven decision making',
      featureDesc: 'Unified reporting dashboards give managers the insights they need to make confident, bias-free hiring choices.',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'communication-assessment.html', title: 'Communication Assessment', tag: 'SKILLS', dir: 'solutions',
      desc: 'Evaluate verbal and written communication skills with automated tests.',
      featureTitle: 'Clear and concise signals',
      featureDesc: 'Analyze writing quality and spoken proficiency with AI-driven communication scoring.',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c295944c?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'personality-behavioral.html', title: 'Personality & Behavioral', tag: 'CULTURE', dir: 'solutions',
      desc: 'Understand candidate traits and work styles with Big-5 and DISC.',
      featureTitle: 'Scientific behavioral insights',
      featureDesc: 'Leverage peer-reviewed frameworks to understand how candidates collaborate and solve problems.',
      img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'analytical-critical-thinking.html', title: 'Analytical Thinking', tag: 'LOGIC', dir: 'solutions',
      desc: 'Test logic, reasoning, and data interpretation capabilities.',
      featureTitle: 'Measure cognitive depth',
      featureDesc: 'Complex logic puzzles and data-interpretation tasks designed for high-impact analytical roles.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'situational-judgement.html', title: 'Situational Judgement', tag: 'JUDGEMENT', dir: 'solutions',
      desc: 'Predict job performance with real-world workplace scenarios.',
      featureTitle: 'Real-world simulations',
      featureDesc: 'Interactive scenarios that put candidates in the driver\'s seat of actual workplace challenges.',
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'people-leadership.html', title: 'People Leadership', tag: 'LEADERSHIP', dir: 'solutions',
      desc: 'Identify leaders who can build, inspire, and grow teams.',
      featureTitle: 'Identify true potential',
      featureDesc: 'Assess high-level coaching, delegation, and strategic alignment skills for management talent.',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'team-development.html', title: 'Team Development', tag: 'GROWTH', dir: 'solutions',
      desc: 'Assess coaching, growth mindset, and team-building skills.',
      featureTitle: 'Build cohesive units',
      featureDesc: 'Tools to help you understand team dynamics and identify gaps in your leadership pipeline.',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'decision-under-pressure.html', title: 'Decision Under Pressure', tag: 'PRESSURE', dir: 'solutions',
      desc: 'Evaluate high-stakes judgement in stressful situations.',
      featureTitle: 'Performance in the moment',
      featureDesc: 'High-fidelity simulations designed to test composure and decision speed in critical moments.',
      img: 'https://images.unsplash.com/photo-1454165833762-0102a2aa7d16?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'critical-thinking-leadership.html', title: 'Critical Thinking (Leadership)', tag: 'STRATEGY', dir: 'solutions',
      desc: 'Strategic analysis and reasoning for senior executive roles.',
      featureTitle: 'Executive-level analysis',
      featureDesc: 'Deep-dive into strategic planning and complex problem-solving capabilities.',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'business-risk.html', title: 'Business Risk', tag: 'RISK', dir: 'solutions',
      desc: 'Assess risk awareness, mitigation skills, and business ethics.',
      featureTitle: 'Safeguard your operations',
      featureDesc: 'Identify candidates with strong ethical foundations and sharp risk-mitigation instincts.',
      img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'solutions-all.html', title: 'All Solutions', tag: 'SOLUTIONS', dir: 'solutions',
      desc: 'Explore our full suite of hiring and assessment solutions.',
      featureTitle: 'A unified hiring platform',
      featureDesc: 'From sourcing to final offer, Prelim.io provides the tools you need at every stage.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'job-descriptions.html', title: 'Job Descriptions', tag: 'RESOURCES', dir: 'resources',
      desc: 'Browse our library of optimized, ready-to-use JD templates.',
      featureTitle: 'Optimize your sourcing',
      featureDesc: 'Data-driven templates that attract more qualified candidates and improve SEO.',
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'sample-tests.html', title: 'Sample Tests', tag: 'PREVIEW', dir: 'resources',
      desc: 'Preview real assessment questions across dozens of job roles.',
      featureTitle: 'Quality you can see',
      featureDesc: 'Explore the depth and variety of our assessment content library.',
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'demo.html', title: 'Product Demo', tag: 'DEMO', dir: 'resources',
      desc: 'See Prelim.io in action with a live product walkthrough.',
      featureTitle: 'Experience the future of hiring',
      featureDesc: 'A comprehensive tour of the platform features that will transform your talent acquisition.',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'knowledge-base.html', title: 'Knowledge Base', tag: 'SUPPORT', dir: 'resources',
      desc: 'Documentation, how-to guides, and help articles.',
      featureTitle: 'Self-serve support',
      featureDesc: 'Everything you need to set up, integrate, and master the Prelim.io platform.',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'guides.html', title: 'Hiring Guides', tag: 'EDUCATION', dir: 'resources',
      desc: 'Best-practice playbooks for scaling your engineering team.',
      featureTitle: 'Learn from the best',
      featureDesc: 'Expert insights on interview structure, technical screening, and candidate experience.',
      img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'webinars.html', title: 'Webinars', tag: 'EVENTS', dir: 'resources',
      desc: 'Watch live and on-demand sessions from industry experts.',
      featureTitle: 'Stay ahead of the curve',
      featureDesc: 'Regular sessions on the latest trends in HR technology and global hiring.',
      img: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f1?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'insights.html', title: 'Hiring Insights', tag: 'DATA', dir: 'resources',
      desc: 'Data-driven research reports and trends in talent market.',
      featureTitle: 'Intelligence for your team',
      featureDesc: 'Deep-dives into the metrics that matter for modern talent acquisition.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'integrations.html', title: 'Integrations', tag: 'ENTERPRISE', dir: 'company',
      desc: 'Connect Prelim.io to your ATS, HRIS, and 100+ other apps.',
      featureTitle: 'A connected ecosystem',
      featureDesc: 'Seamlessly move data between your favorite tools with our robust API and native connectors.',
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'security-compliance.html', title: 'Security & Compliance', tag: 'TRUST', dir: 'company',
      desc: 'Enterprise-grade security with SOC 2, GDPR, and ISO 27001.',
      featureTitle: 'Your data is safe',
      featureDesc: 'We maintain the highest standards of security and privacy to protect your candidate and company data.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'enterprise.html', title: 'Enterprise Overview', tag: 'PLATFORM', dir: 'product',
      desc: 'Scale your global hiring operations with confidence.',
      featureTitle: 'Built for massive scale',
      featureDesc: 'Custom permissions, global data residency, and dedicated support for the world\'s largest organizations.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'ask-prelim.html', title: 'Ask@Prelim', tag: 'AI', dir: 'company',
      desc: 'Get instant answers about our platform from our AI assistant.',
      featureTitle: 'Instant intelligence',
      featureDesc: 'Our AI-powered help desk is available 24/7 to answer questions about features, pricing, and setup.',
      img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'releases.html', title: 'Product Releases', tag: 'NEWS', dir: 'resources',
      desc: 'Stay up to date with the latest features and improvements.',
      featureTitle: 'Moving fast for you',
      featureDesc: 'We ship new features every week. Follow our latest updates and product announcements.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'support.html', title: 'Customer Support', tag: 'HELP', dir: 'company',
      desc: 'Reach out to our dedicated support team for any assistance.',
      featureTitle: 'We are here to help',
      featureDesc: 'Round-the-clock support via chat, email, and phone for all our customers.',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c295944c?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'contact.html', title: 'Contact Us', tag: 'CONTACT', dir: 'company',
      desc: 'Talk to our team about how Prelim.io can transform your hiring.',
      featureTitle: 'Let\'s build together',
      featureDesc: 'Our experts are ready to help you design the perfect assessment strategy for your team.',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'privacy-policy.html', title: 'Privacy Policy', tag: 'LEGAL', dir: 'company',
      desc: 'How we handle and protect your data at Prelim.io.',
      featureTitle: 'Transparency first',
      featureDesc: 'Detailed information on how we collect, store, and process your data in compliance with global laws.',
      img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80&auto=format&fit=crop'
    }
  ];

  allPages.forEach(p => {
    let content = '';
    
    if (p.customHtml) {
      content = p.customHtml;
    } else {
      content = `
    <section class="hero-section">
      <div class="hero-slide hs-1" style="min-height: 45vh; padding: 140px 0 80px; position: relative; overflow: hidden;">
        <div class="hero-blob hb-teal" style="width:480px;height:480px;top:-100px;left:-120px;"></div>
        <div class="hero-blob hb-cyan" style="width:340px;height:340px;bottom:-60px;right:5%;animation-delay: 2s;"></div>
        <div class="hero-center-wrap">
          <div class="hero-center-content">
            <h1>${p.title}</h1>
            <p class="hero-p" style="text-align:center;">${p.desc}</p>
            <div class="hero-btns"><button class="btn-primary">Get Started</button><button class="btn-outline-w">Learn More</button></div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-features" style="padding: 100px 32px; background: #fff;">
      <div class="pf-row" style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; gap: 60px;">
        <div class="pf-text" style="flex: 1;">
          <span class="pf-tag" style="color: var(--teal); font-weight: 700; letter-spacing: 1.5px; font-size: 11px; text-transform: uppercase;">${p.tag}</span>
          <h2 class="pf-title" style="font-size: 36px; color: var(--navy); margin: 16px 0;">${p.featureTitle}</h2>
          <p class="pf-desc" style="font-size: 18px; color: var(--muted); line-height: 1.6;">${p.featureDesc}</p>
          <ul style="margin-top:32px; color:var(--text); list-style:none; padding:0;">
            <li style="margin-bottom:16px; display:flex; align-items:center; font-weight: 500;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:16px;"><polyline points="20 6 9 17 4 12"/></svg> Automated evaluation & instant scoring</li>
            <li style="margin-bottom:16px; display:flex; align-items:center; font-weight: 500;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:16px;"><polyline points="20 6 9 17 4 12"/></svg> Expert-validated question library</li>
            <li style="margin-bottom:16px; display:flex; align-items:center; font-weight: 500;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="3" style="margin-right:16px;"><polyline points="20 6 9 17 4 12"/></svg> Seamless candidate experience</li>
          </ul>
        </div>
        <div class="pf-img-col" style="flex: 1.2;">
          <div class="pf-img-wrap" style="border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.12); position: relative;">
            <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,171,197,0.1), transparent);"></div>
            <img src="${p.img}" alt="${p.title}" style="width: 100%; height: auto; display: block;"/>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works" style="padding: 100px 32px; background: var(--light-bg);">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 70px;">
          <span class="pf-tag">WORKFLOW</span>
          <h2 style="font-size: 42px; color: var(--navy);">How it works</h2>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px;">
          <div style="background: #fff; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
            <div style="width: 50px; height: 50px; background: var(--teal); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: #fff; font-weight: 800; font-size: 20px;">1</div>
            <h3 style="font-size: 20px; margin-bottom: 16px;">Configure</h3>
            <p style="color: var(--muted); line-height: 1.6;">Select from our library or build custom assessments tailored to your specific role requirements.</p>
          </div>
          <div style="background: #fff; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
            <div style="width: 50px; height: 50px; background: var(--teal); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: #fff; font-weight: 800; font-size: 20px;">2</div>
            <h3 style="font-size: 20px; margin-bottom: 16px;">Evaluate</h3>
            <p style="color: var(--muted); line-height: 1.6;">Candidates complete assessments in a secure, high-fidelity environment with advanced proctoring.</p>
          </div>
          <div style="background: #fff; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
            <div style="width: 50px; height: 50px; background: var(--teal); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: #fff; font-weight: 800; font-size: 20px;">3</div>
            <h3 style="font-size: 20px; margin-bottom: 16px;">Hire</h3>
            <p style="color: var(--muted); line-height: 1.6;">Review deep-signal reports and make data-driven decisions to hire the best talent with confidence.</p>
          </div>
        </div>
      </div>
    </section>
    ` + bottomCTA;
    }
    
    createPage(p.file, p.title, content, p.dir);
  });

  console.log('Successfully generated all pages.');

} catch (e) {
  console.error("Error generating pages:", e);
}
