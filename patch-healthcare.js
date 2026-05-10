const fs = require('fs');
// Restore from backup if exists
if (fs.existsSync('generate-pages.js.bak')) {
  fs.copyFileSync('generate-pages.js.bak', 'generate-pages.js');
  console.log('Restored from backup');
} else {
  console.log('No backup found, creating one first');
  fs.copyFileSync('generate-pages.js', 'generate-pages.js.bak');
}

let content = fs.readFileSync('generate-pages.js', 'utf8');

// Find start of healthcare object
const HC_MARKER = "file: 'domain-healthcare.html'";
const NEXT_MARKER = "file: 'domain-telecom.html'";

const hcIdx = content.indexOf(HC_MARKER);
const nextIdx = content.indexOf(NEXT_MARKER);

if (hcIdx === -1 || nextIdx === -1) {
  console.error('Markers not found:', hcIdx, nextIdx);
  process.exit(1);
}

// The healthcare object starts with "    { \n" just before the HC_MARKER
const blockStart = content.lastIndexOf('    { \n', hcIdx);
// The next object starts with "    { \n" just before NEXT_MARKER
const blockEnd = content.lastIndexOf('    { \n', nextIdx);

console.log(`Replacing chars ${blockStart} to ${blockEnd}`);

const newBlock = `    { 
      file: 'domain-healthcare.html', title: 'Health & Life Sciences', tag: 'DOMAIN', dir: 'solutions',
      desc: 'Regulatory, clinical, and operational excellence diagnostics for healthcare organizations.',
      customHtml: \`
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
    \` + bottomCTA
    },
`;

const newContent = content.substring(0, blockStart) + newBlock + content.substring(blockEnd);
fs.writeFileSync('generate-pages.js', newContent, 'utf8');
console.log('Healthcare block replaced successfully!');
