'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', url: '', email: '', category: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!formData.name || !formData.url || !formData.email) return
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', fontFamily: 'var(--font-display), sans-serif' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '64px', background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e4e7f0' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: '#2563eb', fontWeight: 700, textDecoration: 'none' }}>MCP<span style={{ color: '#0f172a' }}>-IT</span></Link>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a href="#how-it-works" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>How It Works</a>
          <a href="#services" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>Services</a>
          <Link href="/pricing" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>Pricing</Link>
          <a href="#contact" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>Contact</a>
          <a href="#register" style={{ background: '#2563eb', color: '#fff', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-mono)', boxShadow: '0 2px 8px rgba(37,99,235,0.3)' }}>Get Listed Free →</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 48px 80px', background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 60%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', top: '10%', right: '5%', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '780px', position: 'relative' }}>
          <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#059669', letterSpacing: '0.5px' }}>
            <span style={{ animation: 'pulse 1.5s infinite', fontSize: '8px' }}>●</span>
            GOOGLE UCP + OPENAI ACP — LIVE NOW IN 2026
          </div>
          <h1 className="fade-up delay-1" style={{ fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-2.5px', marginBottom: '24px' }}>
            <span style={{ display: 'block', color: '#0f172a' }}>Your Business</span>
            <span style={{ display: 'block', color: '#2563eb' }}>Is Invisible</span>
            <span style={{ display: 'block', color: '#94a3b8', fontWeight: 500, fontSize: '0.52em', letterSpacing: '-1px', marginTop: '8px' }}>To ChatGPT and Google AI Shoppers Right Now.</span>
          </h1>
          <p className="fade-up delay-2" style={{ fontSize: '17px', color: '#64748b', lineHeight: 1.75, maxWidth: '520px', marginBottom: '36px' }}>
            Walmart and Target already appear when people shop through ChatGPT and Google AI. <strong style={{ color: '#0f172a' }}>Your independent business does not.</strong> We fix that in 48 hours. No technical knowledge needed.
          </p>
          <div className="fade-up delay-3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
            <a href="#register" style={{ background: '#2563eb', color: '#fff', padding: '14px 32px', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', fontFamily: 'var(--font-mono)', boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }}>Get Listed Free →</a>
            <a href="#how-it-works" style={{ background: '#fff', color: '#0f172a', padding: '14px 32px', borderRadius: '10px', fontWeight: 600, fontSize: '15px', textDecoration: 'none', border: '1px solid #e4e7f0', fontFamily: 'var(--font-mono)' }}>See How It Works</a>
          </div>

          {/* Demo Card */}
          <div className="fade-up delay-4 float" style={{ background: '#fff', border: '1px solid #e4e7f0', borderRadius: '16px', overflow: 'hidden', maxWidth: '560px', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #f1f5f9', background: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fca5a5' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fde68a' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#a7f3d0' }} />
              <span style={{ marginLeft: '8px', fontSize: '12px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>ChatGPT — Shopping Search</span>
            </div>
            <div style={{ padding: '16px 18px', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', border: '1px solid #e4e7f0', borderRadius: '10px', padding: '10px 14px' }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <span style={{ fontSize: '13px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>Find me white sneakers under $50 in New York...</span>
              </div>
            </div>
            <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Nike.com', 'Adidas.com', 'Zappos.com'].map(brand => (
                <div key={brand} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e4e7f0', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <span style={{ color: '#10b981' }}>✓</span>
                  <span style={{ color: '#0f172a', fontWeight: 600 }}>{brand}</span>
                  <span style={{ color: '#94a3b8', marginLeft: 'auto' }}>Listed</span>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: '#fff7ed', borderRadius: '8px', border: '1px solid #fed7aa', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                <span style={{ color: '#f59e0b' }}>⚠</span>
                <span style={{ color: '#92400e', fontWeight: 600 }}>Your Store</span>
                <span style={{ color: '#f59e0b', marginLeft: 'auto', fontWeight: 700 }}>NOT FOUND</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                <span style={{ color: '#2563eb' }}>✦</span>
                <span style={{ color: '#1d4ed8', fontWeight: 600 }}>With MCP-IT — Your store appears first</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ borderTop: '1px solid #e4e7f0', borderBottom: '1px solid #e4e7f0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: '#f8fafc' }}>
        {[{ num: '$261B', label: 'Agent commerce by 2030' }, { num: '49%', label: 'Consumers use AI to shop' }, { num: '28%', label: 'Higher conversion via AI' }, { num: '48hrs', label: 'Setup time for your business' }].map((stat, i) => (
          <div key={i} style={{ padding: '32px 40px', borderRight: i < 3 ? '1px solid #e4e7f0' : 'none' }}>
            <span style={{ display: 'block', fontSize: '38px', fontWeight: 800, letterSpacing: '-2px', color: '#2563eb', marginBottom: '4px' }}>{stat.num}</span>
            <span style={{ color: '#64748b', fontSize: '12px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: '100px 48px', background: '#fff' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#2563eb', letterSpacing: '3px', marginBottom: '12px' }}>HOW IT WORKS</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-2px', marginBottom: '12px' }}>Live in 48 hours. Zero code.</h2>
        <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '440px', lineHeight: 1.7, marginBottom: '48px' }}>You focus on your business. We handle everything technical from start to finish.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { step: '01', icon: '📋', title: 'Register', desc: 'Fill our simple form. Business name, website URL, products and prices. Takes 5 minutes.' },
            { step: '02', icon: '⚙️', title: 'We Build', desc: 'We implement MCP, ACP and UCP for your business. You touch nothing technical.' },
            { step: '03', icon: '🚀', title: 'Go Live', desc: 'Your business appears in Google AI Mode. We apply to ChatGPT on your behalf.' },
            { step: '04', icon: '📈', title: 'We Optimize', desc: 'Weekly optimization reports. We keep your data fresh and ranking above competitors.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#f8fafc', borderRadius: '16px', padding: '32px', border: '1px solid #e4e7f0', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', width: '28px', height: '28px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#2563eb', fontWeight: 700 }}>{item.step}</div>
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '80px 48px', background: '#f8fafc', borderTop: '1px solid #e4e7f0', borderBottom: '1px solid #e4e7f0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#2563eb', letterSpacing: '3px', marginBottom: '12px' }}>WHAT WE BUILD FOR YOU</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-2px', marginBottom: '40px' }}>Three protocols. Every AI agent.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          {[
            { tag: 'GOOGLE UCP', tagBg: '#eff6ff', tagColor: '#2563eb', tagBorder: '#bfdbfe', title: 'UCP Setup', sub: 'Google AI Mode + Gemini', desc: 'Your products appear when people shop through Google AI Mode and Gemini. Billions of Google users can buy from you.', status: '✅ Goes live fast', sc: '#10b981' },
            { tag: 'OPENAI ACP', tagBg: '#fffbeb', tagColor: '#d97706', tagBorder: '#fde68a', title: 'ACP Setup', sub: 'ChatGPT Shopping', desc: "We implement and apply to OpenAI's Agentic Commerce Protocol on your behalf. 800M ChatGPT users can purchase from you.", status: '⏳ Applied on your behalf', sc: '#d97706' },
            { tag: 'UNIVERSAL MCP', tagBg: '#f5f3ff', tagColor: '#7c3aed', tagBorder: '#ddd6fe', title: 'MCP Server', sub: 'All AI Agents', desc: 'Foundation layer that makes your business readable by any AI agent or developer building custom shopping tools.', status: '✅ Live in 48 hours', sc: '#10b981' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #e4e7f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'inline-block', background: s.tagBg, color: s.tagColor, border: `1px solid ${s.tagBorder}`, padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '14px' }}>{s.tag}</div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '4px' }}>{s.title}</h3>
              <div style={{ color: '#94a3b8', fontSize: '12px', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>{s.sub}</div>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7, marginBottom: '14px' }}>{s.desc}</p>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: s.sc, fontWeight: 600 }}>{s.status}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #e4e7f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: '#fffbeb', color: '#d97706', border: '1px solid #fde68a', padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '14px' }}>ONGOING</div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '10px', letterSpacing: '-1px' }}>Weekly Agent Optimization</h3>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>Just like SEO — getting listed is step one. Ranking above competitors is step two. We optimize your data every week.</p>
            {['Product feed accuracy', 'AI query optimization', 'Response speed monitoring', 'Protocol update management'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px', marginBottom: '8px' }}>
                <span style={{ color: '#10b981', fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px', border: '1px solid #e4e7f0', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #e4e7f0' }}>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>Your Weekly Report</span>
              <span style={{ background: '#ecfdf5', color: '#059669', padding: '3px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>● DELIVERED</span>
            </div>
            {[{ label: 'Agent queries this week', val: '847', color: '#2563eb' }, { label: 'Products shown to agents', val: '23', color: '#2563eb' }, { label: 'Your ranking', val: '#2', color: '#10b981' }, { label: 'Optimizations applied', val: '6', color: '#d97706' }].map(row => (
              <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>{row.label}</span>
                <span style={{ color: row.color, fontWeight: 700 }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" style={{ padding: '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#2563eb', letterSpacing: '3px', marginBottom: '12px' }}>GET STARTED</div>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '12px' }}>Register Your Business</h2>
          <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, marginBottom: '36px' }}>Your MCP server will be live in 48 hours. First month completely free.</p>
          {submitted ? (
            <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '16px', padding: '48px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>You are Registered!</h3>
              <p style={{ color: '#64748b', lineHeight: 1.7 }}>We will review your website and have your MCP server live within 48 hours. Check your email for next steps.</p>
            </div>
          ) : (
            <div style={{ background: '#f8fafc', border: '1px solid #e4e7f0', borderRadius: '16px', padding: '32px', textAlign: 'left', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              {[{ id: 'name', label: 'Business Name', placeholder: 'e.g. James Shoe Store', type: 'text' }, { id: 'url', label: 'Website URL', placeholder: 'https://yourstore.com', type: 'url' }, { id: 'email', label: 'Your Email', placeholder: 'you@yourstore.com', type: 'email' }].map(field => (
                <div key={field.id} style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b', letterSpacing: '1px', marginBottom: '6px', textTransform: 'uppercase' }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} value={formData[field.id as keyof typeof formData]} onChange={e => setFormData({ ...formData, [field.id]: e.target.value })} style={{ width: '100%', background: '#fff', border: '1px solid #e4e7f0', borderRadius: '8px', padding: '11px 14px', color: '#0f172a', fontFamily: 'var(--font-mono)', fontSize: '13px', outline: 'none' }} />
                </div>
              ))}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b', letterSpacing: '1px', marginBottom: '6px', textTransform: 'uppercase' }}>Business Category</label>
                <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} style={{ width: '100%', background: '#fff', border: '1px solid #e4e7f0', borderRadius: '8px', padding: '11px 14px', color: formData.category ? '#0f172a' : '#94a3b8', fontFamily: 'var(--font-mono)', fontSize: '13px', outline: 'none' }}>
                  <option value="">Select category...</option>
                  {['Clothing & Fashion', 'Shoes & Accessories', 'Food & Restaurant', 'Hotels & Travel', 'Health & Beauty', 'Home & Living', 'Electronics', 'Other'].map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <button onClick={handleSubmit} disabled={submitting} style={{ width: '100%', background: submitting ? '#94a3b8' : '#2563eb', color: '#fff', padding: '14px', borderRadius: '10px', fontWeight: 700, fontSize: '15px', border: 'none', fontFamily: 'var(--font-mono)', cursor: submitting ? 'not-allowed' : 'pointer', boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }}>
                {submitting ? 'Submitting...' : 'Register My Business — Free →'}
              </button>
              <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '11px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>No credit card. No technical knowledge. Live in 48 hours.</p>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 48px', background: '#f8fafc', borderTop: '1px solid #e4e7f0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#2563eb', letterSpacing: '3px', marginBottom: '12px' }}>CONTACT</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '12px' }}>Have Questions?</h2>
          <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, marginBottom: '36px' }}>We typically respond within a few hours. Reach out anytime.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[{ icon: '✉️', label: 'Email Us', value: 'hello@mcp-it.com', link: 'mailto:hello@mcp-it.com' }, { icon: '𝕏', label: 'Twitter / X', value: '@mcpit_app', link: '#' }, { icon: '💬', label: 'WhatsApp', value: 'Message Us', link: '#' }].map((item, i) => (
              <a key={i} href={item.link} style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e4e7f0', textDecoration: 'none', display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f172a', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontSize: '13px', color: '#2563eb', fontFamily: 'var(--font-mono)' }}>{item.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #e4e7f0', padding: '28px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: '#2563eb', fontWeight: 700 }}>MCP<span style={{ color: '#0f172a' }}>-IT</span></div>
        <div style={{ color: '#94a3b8', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>© 2026 MCP-IT. Built for the agent era.</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/privacy" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>Privacy Policy</Link>
          <Link href="/pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>Pricing</Link>
          <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>Contact</a>
        </div>
      </footer>
    </div>
  )
}
