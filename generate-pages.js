const fs = require('fs');

try {
  let indexHtml = fs.readFileSync('index.html', 'utf-8');

  // Extract header (everything up to </nav>)
  const headerEndIndex = indexHtml.indexOf('</nav>') + 6;
  const header = indexHtml.substring(0, headerEndIndex);

  // Extract footer (everything from <footer class="site-footer"> to the end)
  const footerStartIndex = indexHtml.indexOf('<footer class="site-footer">');
  const footer = indexHtml.substring(footerStartIndex);

  function createPage(filename, title, content) {
    let pageHeader = header.replace('<title>Prelim.io | AI-Powered Pre-Employment Screening & Assessment</title>', '<title>' + title + ' | Prelim.io</title>');
    let html = pageHeader + '\n\n' + content + '\n\n' + footer;
    fs.writeFileSync(filename, html);
    console.log('Created ' + filename);
  }

  // Common Bottom CTA
  const bottomCTA = `
  <section class="bottom-cta-banner">
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
      file: 'technical-assessment.html', title: 'Technical Assessment', tag: 'SKILL VERIFICATION',
      desc: 'Identify top developers with the most accurate skill-based assessments.',
      featureTitle: 'Create assessments suited to developer roles',
      featureDesc: 'Assess specific technical skills with perfectly matched and strictly ranging accurate assessments derived from a massive library of 17,000+ questions.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'behavioral-assessment.html', title: 'Behavioral Assessment', tag: 'CULTURE FIT',
      desc: 'Understand a candidate\'s work ethic, culture fit, and soft skills with our scientifically-backed behavioral tests.',
      featureTitle: 'Measure personality traits effectively',
      featureDesc: 'Measure traits using Big Five and DISC frameworks adapted for workplace performance, ensuring candidates align with your company values.',
      img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'campus-hiring.html', title: 'Campus Hiring', tag: 'SCALE',
      desc: 'Engage, screen, and hire the best graduate talent from thousands of universities seamlessly.',
      featureTitle: 'Send bulk assessments effortlessly',
      featureDesc: 'Send tests to thousands of graduates simultaneously with one click, saving countless hours for your recruitment team.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'enterprise-support.html', title: 'Enterprise Support', tag: 'ENTERPRISE',
      desc: 'Dedicated account management, custom onboarding, and enterprise-grade security for global hiring operations.',
      featureTitle: 'Scale with confidence',
      featureDesc: 'Our enterprise-grade platform is built to support thousands of users and millions of assessments with 99.99% uptime.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'careers.html', title: 'Join the Team', tag: 'CAREERS',
      desc: 'Help shape the way the world builds software. Join our mission to make hiring fairer and faster.',
      featureTitle: 'Build the future of HR tech',
      featureDesc: 'Work with a world-class team of engineers, designers, and psychologists to solve complex talent problems.',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'domain-it.html', title: 'IT Assessments', tag: 'DOMAIN',
      desc: 'Specialized testing for IT support, networking, and system administration roles.',
      featureTitle: 'Verify core IT proficiency',
      featureDesc: 'Deep-dive into troubleshooting, infrastructure, and cloud management skills with domain-specific scenarios.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'domain-engineering.html', title: 'Engineering Assessments', tag: 'DOMAIN',
      desc: 'Evaluate mechanical, electrical, and civil engineering talent with precision.',
      featureTitle: 'Expert-validated engineering tests',
      featureDesc: 'Scientific assessments designed by senior engineers to verify core principles and practical knowledge.',
      img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'domain-finance.html', title: 'Finance Assessments', tag: 'DOMAIN',
      desc: 'Test for accounting, financial analysis, and investment banking skills.',
      featureTitle: 'Identify top financial talent',
      featureDesc: 'Assess quantitative skills, regulatory knowledge, and financial modeling capabilities with ease.',
      img: 'https://images.unsplash.com/photo-1454165833762-0102a2aa7d16?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'domain-data-science.html', title: 'Data Science Assessments', tag: 'DOMAIN',
      desc: 'Assess machine learning, statistical modeling, and data engineering capabilities.',
      featureTitle: 'Measure deep analytical depth',
      featureDesc: 'Verify coding skills in Python/R alongside mathematical foundations and business intuition.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'domain-healthcare.html', title: 'Healthcare Assessments', tag: 'DOMAIN',
      desc: 'Evaluate clinical knowledge and soft skills for healthcare professionals.',
      featureTitle: 'Built for patient care excellence',
      featureDesc: 'Ensure your medical staff has the requisite knowledge and situational judgement for high-stakes environments.',
      img: 'https://images.unsplash.com/photo-1505751172107-5739a00726b8?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'domain-telecom.html', title: 'Telecom Assessments', tag: 'DOMAIN',
      desc: 'Verify technical proficiency for telecommunications and networking engineers.',
      featureTitle: 'Verify connectivity expertise',
      featureDesc: 'Assess knowledge of 5G, fiber optics, and network architecture with specialized testing modules.',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'intern-hiring.html', title: 'Intern Hiring', tag: 'INTERNS',
      desc: 'Identify high-potential interns with structured, fair assessments.',
      featureTitle: 'Screen at scale for university programs',
      featureDesc: 'Manage high volumes of early-career talent with automated screening and objective coding challenges.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'remote-hiring.html', title: 'Remote Hiring', tag: 'REMOTE',
      desc: 'Screen remote candidates effectively with async code and video tools.',
      featureTitle: 'Built for distributed teams',
      featureDesc: 'Our async assessment tools and integrated video interviewing platform help you hire across timezones.',
      img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'technology-hiring.html', title: 'Technology Hiring', tag: 'TECH',
      desc: 'Deep-dive into technical skills with role-specific coding challenges.',
      featureTitle: 'Verify every line of code',
      featureDesc: 'Advanced IDE support and automated testing suites provide deep signal on every candidate\'s technical depth.',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'non-tech-hiring.html', title: 'Non-Tech Hiring', tag: 'NON-TECH',
      desc: 'Assess soft skills, aptitude, and behavioral fit for non-technical roles.',
      featureTitle: 'Assess the whole person',
      featureDesc: 'Go beyond the resume with psychometric testing and situational judgement tests for business roles.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'tech-hiring-managers.html', title: 'Tech Hiring for Managers', tag: 'MANAGEMENT',
      desc: 'Empower hiring managers with deep technical signals and clear reports.',
      featureTitle: 'Data-driven decision making',
      featureDesc: 'Unified reporting dashboards give managers the insights they need to make confident, bias-free hiring choices.',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'communication-assessment.html', title: 'Communication Assessment', tag: 'SKILLS',
      desc: 'Evaluate verbal and written communication skills with automated tests.',
      featureTitle: 'Clear and concise signals',
      featureDesc: 'Analyze writing quality and spoken proficiency with AI-driven communication scoring.',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c295944c?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'personality-behavioral.html', title: 'Personality & Behavioral', tag: 'CULTURE',
      desc: 'Understand candidate traits and work styles with Big-5 and DISC.',
      featureTitle: 'Scientific behavioral insights',
      featureDesc: 'Leverage peer-reviewed frameworks to understand how candidates collaborate and solve problems.',
      img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'analytical-critical-thinking.html', title: 'Analytical Thinking', tag: 'LOGIC',
      desc: 'Test logic, reasoning, and data interpretation capabilities.',
      featureTitle: 'Measure cognitive depth',
      featureDesc: 'Complex logic puzzles and data-interpretation tasks designed for high-impact analytical roles.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'situational-judgement.html', title: 'Situational Judgement', tag: 'JUDGEMENT',
      desc: 'Predict job performance with real-world workplace scenarios.',
      featureTitle: 'Real-world simulations',
      featureDesc: 'Interactive scenarios that put candidates in the driver\'s seat of actual workplace challenges.',
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'people-leadership.html', title: 'People Leadership', tag: 'LEADERSHIP',
      desc: 'Identify leaders who can build, inspire, and grow teams.',
      featureTitle: 'Identify true potential',
      featureDesc: 'Assess high-level coaching, delegation, and strategic alignment skills for management talent.',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'team-development.html', title: 'Team Development', tag: 'GROWTH',
      desc: 'Assess coaching, growth mindset, and team-building skills.',
      featureTitle: 'Build cohesive units',
      featureDesc: 'Tools to help you understand team dynamics and identify gaps in your leadership pipeline.',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'decision-under-pressure.html', title: 'Decision Under Pressure', tag: 'PRESSURE',
      desc: 'Evaluate high-stakes judgement in stressful situations.',
      featureTitle: 'Performance in the moment',
      featureDesc: 'High-fidelity simulations designed to test composure and decision speed in critical moments.',
      img: 'https://images.unsplash.com/photo-1454165833762-0102a2aa7d16?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'critical-thinking-leadership.html', title: 'Critical Thinking (Leadership)', tag: 'STRATEGY',
      desc: 'Strategic analysis and reasoning for senior executive roles.',
      featureTitle: 'Executive-level analysis',
      featureDesc: 'Deep-dive into strategic planning and complex problem-solving capabilities.',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'business-risk.html', title: 'Business Risk', tag: 'RISK',
      desc: 'Assess risk awareness, mitigation skills, and business ethics.',
      featureTitle: 'Safeguard your operations',
      featureDesc: 'Identify candidates with strong ethical foundations and sharp risk-mitigation instincts.',
      img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'solutions-all.html', title: 'All Solutions', tag: 'SOLUTIONS',
      desc: 'Explore our full suite of hiring and assessment solutions.',
      featureTitle: 'A unified hiring platform',
      featureDesc: 'From sourcing to final offer, Prelim.io provides the tools you need at every stage.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'job-descriptions.html', title: 'Job Descriptions', tag: 'RESOURCES',
      desc: 'Browse our library of optimized, ready-to-use JD templates.',
      featureTitle: 'Optimize your sourcing',
      featureDesc: 'Data-driven templates that attract more qualified candidates and improve SEO.',
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'sample-tests.html', title: 'Sample Tests', tag: 'PREVIEW',
      desc: 'Preview real assessment questions across dozens of job roles.',
      featureTitle: 'Quality you can see',
      featureDesc: 'Explore the depth and variety of our assessment content library.',
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'demo.html', title: 'Product Demo', tag: 'DEMO',
      desc: 'See Prelim.io in action with a live product walkthrough.',
      featureTitle: 'Experience the future of hiring',
      featureDesc: 'A comprehensive tour of the platform features that will transform your talent acquisition.',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'knowledge-base.html', title: 'Knowledge Base', tag: 'SUPPORT',
      desc: 'Documentation, how-to guides, and help articles.',
      featureTitle: 'Self-serve support',
      featureDesc: 'Everything you need to set up, integrate, and master the Prelim.io platform.',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'guides.html', title: 'Hiring Guides', tag: 'EDUCATION',
      desc: 'Best-practice playbooks for scaling your engineering team.',
      featureTitle: 'Learn from the best',
      featureDesc: 'Expert insights on interview structure, technical screening, and candidate experience.',
      img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'webinars.html', title: 'Webinars', tag: 'EVENTS',
      desc: 'Watch live and on-demand sessions from industry experts.',
      featureTitle: 'Stay ahead of the curve',
      featureDesc: 'Regular sessions on the latest trends in HR technology and global hiring.',
      img: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f1?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'insights.html', title: 'Hiring Insights', tag: 'DATA',
      desc: 'Data-driven research reports and trends in talent market.',
      featureTitle: 'Intelligence for your team',
      featureDesc: 'Deep-dives into the metrics that matter for modern talent acquisition.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'integrations.html', title: 'Integrations', tag: 'ENTERPRISE',
      desc: 'Connect Prelim.io to your ATS, HRIS, and 100+ other apps.',
      featureTitle: 'A connected ecosystem',
      featureDesc: 'Seamlessly move data between your favorite tools with our robust API and native connectors.',
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'security-compliance.html', title: 'Security & Compliance', tag: 'TRUST',
      desc: 'Enterprise-grade security with SOC 2, GDPR, and ISO 27001.',
      featureTitle: 'Your data is safe',
      featureDesc: 'We maintain the highest standards of security and privacy to protect your candidate and company data.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'enterprise.html', title: 'Enterprise Overview', tag: 'PLATFORM',
      desc: 'Scale your global hiring operations with confidence.',
      featureTitle: 'Built for massive scale',
      featureDesc: 'Custom permissions, global data residency, and dedicated support for the world\'s largest organizations.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'ask-prelim.html', title: 'Ask@Prelim', tag: 'AI',
      desc: 'Get instant answers about our platform from our AI assistant.',
      featureTitle: 'Instant intelligence',
      featureDesc: 'Our AI-powered help desk is available 24/7 to answer questions about features, pricing, and setup.',
      img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'releases.html', title: 'Product Releases', tag: 'NEWS',
      desc: 'Stay up to date with the latest features and improvements.',
      featureTitle: 'Moving fast for you',
      featureDesc: 'We ship new features every week. Follow our latest updates and product announcements.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'support.html', title: 'Customer Support', tag: 'HELP',
      desc: 'Reach out to our dedicated support team for any assistance.',
      featureTitle: 'We are here to help',
      featureDesc: 'Round-the-clock support via chat, email, and phone for all our customers.',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c295944c?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'contact.html', title: 'Contact Us', tag: 'CONTACT',
      desc: 'Talk to our team about how Prelim.io can transform your hiring.',
      featureTitle: 'Let\'s build together',
      featureDesc: 'Our experts are ready to help you design the perfect assessment strategy for your team.',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop'
    },
    { 
      file: 'privacy-policy.html', title: 'Privacy Policy', tag: 'LEGAL',
      desc: 'How we handle and protect your data at Prelim.io.',
      featureTitle: 'Transparency first',
      featureDesc: 'Detailed information on how we collect, store, and process your data in compliance with global laws.',
      img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80&auto=format&fit=crop'
    }
  ];

  allPages.forEach(p => {
    const content = `
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
    createPage(p.file, p.title, content);
  });

  console.log('Successfully generated all pages.');

} catch (e) {
  console.error("Error generating pages:", e);
}
