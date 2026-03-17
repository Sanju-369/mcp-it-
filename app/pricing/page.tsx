import Link from 'next/link'

export default function Pricing() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: '#fafafa', color: '#0f172a' }}>

      {/* NAV */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e5e7eb' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 17, color: '#2563eb', textDecoration: 'none' }}>mcp<span style={{ color: '#0f172a' }}>-it</span></Link>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: 14, fontWeight: 500, color: '#6b7280', textDecoration: 'none' }}>Home</Link>
          <Link href="/#services" style={{ fontSize: 14, fontWeight: 500, color: '#6b7280', textDecoration: 'none' }}>Services</Link>
          <Link href="/#register" style={{ fontSize: 13, fontWeight: 600, color: '#fff', background: '#2563eb', padding: '8px 18px', borderRadius: 7, textDecoration: 'none', boxShadow: '0 1px 3px rgba(37,99,235,0.3)' }}>Get Started Free</Link>
        </div>
      </header>

      {/* FOUNDING CUSTOMER BANNER */}
      <div style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)', padding: '14px 40px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: 18 }}>🎉</span>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: 'var(--font-mono)' }}>
            FOUNDING OFFER — First 5 customers get everything <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 10px', borderRadius: 6 }}>100% FREE</span> Untili You Live 
          </span>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>· Only a few spots left</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: '72px 40px 56px', background: 'linear-gradient(160deg, #f8faff 0%, #ffffff 60%)', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#faf5ff', border: '1px solid #ddd6fe', borderRadius: 100, padding: '5px 13px', marginBottom: 22, fontSize: 12, fontWeight: 600, color: '#7c3aed', fontFamily: 'var(--font-mono)' }}>
          <span style={{ width: 6, height: 6, background: '#7c3aed', borderRadius: '50%', display: 'inline-block' }} />
          🎁 First 5 Customers — Untill you Live
        </div>
        <h1 style={{ fontSize: 'clamp(34px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-2px', marginBottom: 16 }}>
          Simple, Transparent Pricing
        </h1>
        <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
          We are looking for our first 5 founding customers. Get full access free — no credit card, no commitment.
        </p>

        {/* Spots counter */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginTop: 28, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'var(--font-mono)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>Founding Spots Remaining</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1,2,3,4,5].map(n => (
                <div key={n} style={{ width: 28, height: 28, borderRadius: 6, background: n <= 2 ? '#f3f4f6' : '#eff6ff', border: n <= 2 ? '1px solid #e5e7eb' : '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: n <= 2 ? '#d1d5db' : '#2563eb', fontFamily: 'var(--font-mono)' }}>
                  {n <= 2 ? '✓' : n}
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: 1, height: 36, background: '#e5e7eb' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#7c3aed' }}>3 spots left</div>
            <div style={{ fontSize: 12, color: '#9ca3af' }}>2 already claimed</div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ padding: '64px 40px', background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 960, margin: '0 auto' }}>
          {[
            {
              name: 'Starter',
              price: '$29',
              desc: 'Get your business visible on all major AI shopping platforms.',
              color: '#374151',
              popular: false,
              features: ['Google UCP Profile Setup', '3 Checkout endPoints','Email support'],
            },
            {
              name: 'Growth',
              price: '$49',
              desc: 'Everything you need to dominate AI agent search results.',
              color: '#2563eb',
              popular: true,
              features: ['Everything in Starter', 'Google Merchant Center Setup','Google Pay Configuration','Google Waitlist Submission','Weekly data optimization', 'Weekly performance report','Age'Priority email support'],
            },
            {
              name: 'Pro',
              price: '$799',
              desc: 'For businesses serious about being first in every AI search.',
              color: '#7c3aed',
              popular: false,
              features: ['Everything in Growth', 'Daily optimization runs', 'Real-time uptime monitoring', 'First-access to new platforms', 'Custom MCP integrations', 'Dedicated account manager', 'Same-day support SLA'],
            },
          ].map((plan, i) => (
            <div key={i} style={{
              background: plan.popular ? '#eff6ff' : '#fff',
              borderRadius: 14,
              padding: '32px 28px',
              border: plan.popular ? '2px solid #2563eb' : '1px solid #e5e7eb',
              position: 'relative',
              boxShadow: plan.popular ? '0 8px 32px rgba(37,99,235,0.12)' : '0 1px 4px rgba(0,0,0,0.04)',
            }}>
              {plan.popular && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: '#fff', padding: '4px 16px', borderRadius: 100, fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
                  MOST POPULAR
                </div>
              )}

              {/* Founding offer badge */}
              <div style={{ background: 'linear-gradient(90deg, #faf5ff, #eff6ff)', border: '1px solid #ddd6fe', borderRadius: 8, padding: '8px 12px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14 }}>🎁</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#7c3aed', fontFamily: 'var(--font-mono)' }}>FOUNDING CUSTOMER OFFER</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>First 5 customers · Untill Live </div>
                </div>
              </div>

              <div style={{ fontSize: 15, fontWeight: 700, color: plan.color, marginBottom: 10 }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-2px', color: '#7c3aed' }}>$0</span>
                <span style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'line-through' }}>{plan.price}/mo</span>
              </div>
              <div style={{ fontSize: 12, color: '#16a34a', fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: 8 }}>FREE for 3 months, then {plan.price}/mo</div>
              <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24, lineHeight: 1.6 }}>{plan.desc}</p>
              <div style={{ marginBottom: 28 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13, color: '#374151', marginBottom: 9, lineHeight: 1.5 }}>
                    <span style={{ color: '#16a34a', fontWeight: 700, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/#register" style={{
                display: 'block', textAlign: 'center',
                background: plan.popular ? '#2563eb' : '#7c3aed',
                color: '#fff',
                border: 'none',
                padding: '12px', borderRadius: 9,
                fontWeight: 600, fontSize: 14,
                textDecoration: 'none',
                boxShadow: plan.popular ? '0 4px 14px rgba(37,99,235,0.3)' : '0 4px 14px rgba(124,58,237,0.25)',
              }}>
                Claim Free Spot →
              </Link>
              <p style={{ textAlign: 'center', marginTop: 9, fontSize: 12, color: '#9ca3af' }}>3 months free · No credit card · Cancel anytime</p>
            </div>
          ))}
        </div>

        {/* After free period note */}
        <div style={{ maxWidth: 960, margin: '24px auto 0', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 10, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 18 }}>ℹ️</span>
          <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: '#0f172a' }}>After your 3-month free period:</strong> Choose the plan that fits best and continue at the regular price. We will email you 7 days before — no surprise charges, ever. Cancel or switch at any time.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '0 40px 80px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-1px', marginBottom: 24, textAlign: 'center', color: '#0f172a' }}>Full Feature Comparison</h2>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 600, color: '#374151', width: '40%' }}>Feature</th>
                  {['Starter', 'Growth', 'Pro'].map(p => <th key={p} style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 700, color: '#0f172a' }}>{p}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['MCP Server', '✓', '✓', '✓'],
                  ['Google UCP', '✓', '✓', '✓'],
                  ['OpenAI ACP Application', '✓', '✓', '✓'],
                  ['Directory Listing', '✓', '✓', '✓'],
                  ['Performance Reports', 'Monthly', 'Weekly', 'Daily'],
                  ['Data Optimization', '—', 'Weekly', 'Daily'],
                  ['Competitor Tracking', '—', '✓', '✓'],
                  ['New Platform Access', '—', '—', 'First access'],
                  ['Support', 'Email', 'Priority Email', 'Dedicated manager'],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f3f4f6', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                    <td style={{ padding: '13px 20px', color: '#374151', fontWeight: 500 }}>{row[0]}</td>
                    {[row[1], row[2], row[3]].map((v, j) => (
                      <td key={j} style={{ padding: '13px 20px', textAlign: 'center', color: v === '✓' ? '#16a34a' : v === '—' ? '#d1d5db' : '#374151', fontWeight: v === '✓' ? 700 : 500 }}>{v}</td>
                    ))}
                  </tr>
                ))}
                {/* Founding offer row */}
                <tr style={{ background: 'linear-gradient(90deg, #faf5ff, #eff6ff)', borderTop: '2px solid #ddd6fe' }}>
                  <td style={{ padding: '13px 20px', color: '#7c3aed', fontWeight: 700, fontSize: 13 }}>🎁 Founding Customer Price</td>
                  {['$0 / 3 mo', '$0 / 3 mo', '$0 / 3 mo'].map((v, j) => (
                    <td key={j} style={{ padding: '13px 20px', textAlign: 'center', color: '#7c3aed', fontWeight: 700, fontSize: 13 }}>{v}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 40px 80px', background: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-1px', marginBottom: 36, textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { q: 'What is the founding customer offer?', a: 'The first 5 businesses to register get full access to their chosen plan completely free for 3 months. No credit card required. After 3 months, you simply choose to continue at the regular price or cancel — no pressure.' },
              { q: 'How do I know if I am one of the first 5?', a: 'Register now and we will confirm your founding customer status by email within a few hours. If the 5 spots are already filled, you will automatically go onto our regular 30-day free trial instead.' },
              { q: 'How quickly will my business go live?', a: 'Your MCP server and Google UCP are typically live within 48 hours of registration. The OpenAI ACP application is submitted immediately but requires OpenAI approval, which varies.' },
              { q: 'Do I need any technical knowledge?', a: 'None whatsoever. You fill in a form with your business details. We handle everything — building, deploying, connecting, and maintaining.' },
              { q: 'Are there transaction fees on sales?', a: 'We charge no transaction fees. When customers purchase via ChatGPT ACP, OpenAI applies a 4% platform fee directly to that transaction — but that is separate from your subscription.' },
              { q: 'Can I cancel at any time?', a: 'Yes, cancel from your dashboard in one click. No lock-in. No cancellation fee. Your MCP server stays live until the end of your billing period.' },
              { q: 'What if I am already on Shopify?', a: 'Shopify has its own ChatGPT integration, but it is limited to ChatGPT only. MCP-IT covers Google AI Mode, Gemini, Perplexity, and other agents that Shopify does not support.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#0f172a', marginBottom: 8 }}>{f.q}</div>
                <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0f172a', padding: '36px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: '#60a5fa', fontWeight: 500 }}>mcp<span style={{ color: '#fff' }}>-it</span></div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>Home</Link>
          <Link href="/privacy" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>Privacy Policy</Link>
          <span style={{ fontSize: 12, color: '#374151' }}>© 2026 MCP-IT</span>
        </div>
      </footer>
    </div>
  )
}
