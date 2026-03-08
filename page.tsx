'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const cursorDot = useRef<HTMLDivElement>(null)
  const cursorRing = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', url: '', email: '', category: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  let ringX = 0, ringY = 0

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorDot.current) {
        cursorDot.current.style.left = e.clientX + 'px'
        cursorDot.current.style.top = e.clientY + 'px'
      }
    }

    const animateRing = () => {
      const target = cursorDot.current
      if (target && cursorRing.current) {
        const rect = { x: parseFloat(target.style.left || '0'), y: parseFloat(target.style.top || '0') }
        ringX += (rect.x - ringX) * 0.12
        ringY += (rect.y - ringY) * 0.12
        cursorRing.current.style.left = ringX + 'px'
        cursorRing.current.style.top = ringY + 'px'
      }
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', moveCursor)
    animateRing()
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  const handleSubmit = async () => {
    if (!formData.name || !formData.url || !formData.email) return
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <>
      {/* Custom Cursor */}
      <div ref={cursorDot} className="cursor-dot" />
      <div ref={cursorRing} className="cursor-ring" />

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 48px',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(8,8,16,0.9)',
        backdropFilter: 'blur(16px)',
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', color: 'var(--accent)', letterSpacing: '-0.5px', fontWeight: 700 }}>
          MCP<span style={{ color: 'var(--text)' }}>-IT</span>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['How It Works', 'Services', 'Pricing'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} style={{
              color: 'var(--muted)', textDecoration: 'none', fontSize: '14px',
              fontWeight: 600, letterSpacing: '0.5px', transition: 'color 0.2s',
              fontFamily: 'var(--font-mono)'
            }}>{item}</a>
          ))}
          <a href="#register" style={{
            background: 'var(--accent)', color: '#000', padding: '10px 22px',
            borderRadius: '3px', fontSize: '13px', fontWeight: 700,
            textDecoration: 'none', letterSpacing: '0.5px',
            fontFamily: 'var(--font-mono)', transition: 'all 0.2s'
          }}>Get Listed Free →</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        position: 'relative', zIndex: 1, minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '120px 48px 80px',
        overflow: 'hidden'
      }}>
        {/* Glow effects */}
        <div style={{
          position: 'absolute', width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(0,217,255,0.06) 0%, transparent 70%)',
          top: '50%', left: '40%', transform: 'translate(-50%,-50%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(255,51,102,0.06) 0%, transparent 70%)',
          top: '20%', right: '5%', pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '760px', position: 'relative' }}>
          {/* Live badge */}
          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)',
            padding: '6px 14px', borderRadius: '100px', marginBottom: '28px',
            fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)',
            letterSpacing: '1px'
          }}>
            <span style={{ animation: 'pulse 1.5s infinite', fontSize: '8px' }}>●</span>
            GOOGLE UCP + OPENAI ACP — LIVE NOW IN 2026
          </div>

          <h1 className="fade-up delay-1" style={{
            fontSize: 'clamp(48px, 7vw, 92px)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-3px',
            marginBottom: '28px',
            fontFamily: 'var(--font-display)'
          }}>
            <span style={{ display: 'block', color: 'var(--text)' }}>Your Business</span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>Is Invisible</span>
            <span style={{ display: 'block', color: 'var(--muted)', fontWeight: 400, fontSize: '0.55em', letterSpacing: '-1px', marginTop: '8px' }}>
              To ChatGPT & Google AI Shoppers.
            </span>
          </h1>

          <p className="fade-up delay-2" style={{
            fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7,
            maxWidth: '520px', marginBottom: '40px', fontWeight: 400,
            fontFamily: 'var(--font-display)'
          }}>
            Walmart and Target already appear when people shop through ChatGPT and Google AI.
            <strong style={{ color: 'var(--text)' }}> Your independent business doesn't.</strong> We fix
            that in 48 hours. No technical knowledge needed.
          </p>

          <div className="fade-up delay-3" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '60px' }}>
            <a href="#register" style={{
              background: 'var(--accent)', color: '#000', padding: '16px 36px',
              borderRadius: '3px', fontWeight: 700, fontSize: '16px',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
              transition: 'all 0.2s', fontFamily: 'var(--font-mono)'
            }}>Get Listed Free →</a>
            <a href="#how-it-works" style={{
              border: '1px solid var(--border)', color: 'var(--text)',
              padding: '16px 36px', borderRadius: '3px', fontWeight: 600,
              fontSize: '16px', textDecoration: 'none', transition: 'all 0.2s',
              fontFamily: 'var(--font-mono)'
            }}>See How It Works</a>
          </div>

          {/* Live proof terminal */}
          <div className="fade-up delay-4 float" style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '6px', overflow: 'hidden',
            maxWidth: '560px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4)'
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '12px 16px', borderBottom: '1px solid var(--border)',
              background: 'var(--surface2)'
            }}>
              {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
              ))}
              <span style={{ marginLeft: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)' }}>
                User searches on ChatGPT
              </span>
            </div>
            <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 2 }}>
              <div style={{ color: 'var(--muted)' }}>
                user <span style={{ color: 'var(--accent)' }}>→</span> "Find me white sneakers under $50 in New York"
              </div>
              <div style={{ color: 'var(--muted)', marginTop: '4px' }}>
                chatgpt <span style={{ color: 'var(--accent)' }}>→</span> <span style={{ color: '#ff3366' }}>Nike.com — Adidas.com — Zappos.com</span>
              </div>
              <div style={{
                marginTop: '12px', padding: '10px 12px',
                background: 'rgba(255,51,102,0.08)',
                border: '1px solid rgba(255,51,102,0.2)',
                borderRadius: '3px', color: '#ff3366'
              }}>
                ⚠ Your independent shoe store: NOT FOUND
              </div>
              <div style={{
                marginTop: '8px', padding: '10px 12px',
                background: 'rgba(0,255,136,0.08)',
                border: '1px solid rgba(0,255,136,0.2)',
                borderRadius: '3px', color: 'var(--green)'
              }}>
                ✓ With MCP-IT: Your store appears. Customer found.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{
        position: 'relative', zIndex: 1,
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        background: 'var(--surface)'
      }}>
        {[
          { num: '$261B', label: 'Agent commerce by 2030' },
          { num: '49%', label: 'Consumers use AI to shop' },
          { num: '28%', label: 'Higher conversion via AI' },
          { num: '48hrs', label: 'Setup time for your business' },
        ].map((stat, i) => (
          <div key={i} style={{
            padding: '36px 40px',
            borderRight: i < 3 ? '1px solid var(--border)' : 'none',
          }}>
            <span style={{
              display: 'block', fontSize: '42px', fontWeight: 800,
              letterSpacing: '-2px', color: 'var(--accent)',
              marginBottom: '4px', fontFamily: 'var(--font-display)'
            }}>{stat.num}</span>
            <span style={{ color: 'var(--muted)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.5px', fontFamily: 'var(--font-mono)' }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ position: 'relative', zIndex: 1, padding: '100px 48px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '3px', marginBottom: '16px' }}>
          HOW IT WORKS
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-2px', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
          Live in 48 hours. Zero code.
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '16px', maxWidth: '480px', lineHeight: 1.7, marginBottom: '64px', fontFamily: 'var(--font-display)' }}>
          You focus on your business. We handle everything technical.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', background: 'var(--border)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          {[
            { step: '01', icon: '📋', title: 'Register', desc: 'Fill our simple form. Business name, website URL, products and prices. 5 minutes.' },
            { step: '02', icon: '⚙️', title: 'We Build', desc: 'We implement MCP, ACP and UCP for your business. You touch nothing technical.' },
            { step: '03', icon: '🚀', title: 'Go Live', desc: 'Your business appears in Google AI Mode and we apply to ChatGPT on your behalf.' },
            { step: '04', icon: '📈', title: 'We Optimize', desc: 'Weekly optimization reports. We keep your data fresh and your ranking above competitors.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'var(--surface)', padding: '40px',
              transition: 'background 0.2s', position: 'relative'
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '2px', marginBottom: '20px' }}>
                STEP {item.step}
              </div>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.5px', fontFamily: 'var(--font-display)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7, fontFamily: 'var(--font-display)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        position: 'relative', zIndex: 1, padding: '80px 48px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '3px', marginBottom: '16px' }}>
          WHAT WE BUILD FOR YOU
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-2px', marginBottom: '64px', fontFamily: 'var(--font-display)' }}>
          Three protocols. Every AI agent.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--border)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)', marginBottom: '48px' }}>
          {[
            {
              tag: 'GOOGLE', tagColor: '#4285f4',
              title: 'UCP Setup',
              subtitle: 'Google AI Mode + Gemini',
              desc: 'Your products appear when people shop through Google AI Mode and Gemini. Billions of Google users can find and buy from you.',
              status: '✅ Goes live fast',
              statusColor: 'var(--green)'
            },
            {
              tag: 'OPENAI', tagColor: 'var(--accent3)',
              title: 'ACP Setup',
              subtitle: 'ChatGPT Shopping',
              desc: 'We implement and apply to OpenAI\'s Agentic Commerce Protocol on your behalf. 800 million ChatGPT users can purchase from you.',
              status: '⏳ Applied on your behalf',
              statusColor: 'var(--accent3)'
            },
            {
              tag: 'UNIVERSAL', tagColor: 'var(--accent)',
              title: 'MCP Server',
              subtitle: 'All AI Agents',
              desc: 'Foundation layer that makes your business readable by any AI agent or developer building custom shopping agents.',
              status: '✅ Live in 48 hours',
              statusColor: 'var(--green)'
            },
          ].map((service, i) => (
            <div key={i} style={{
              background: 'var(--bg)', padding: '40px',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                padding: '3px 8px', borderRadius: '3px', marginBottom: '16px',
                letterSpacing: '1px', textTransform: 'uppercase',
                background: `${service.tagColor}18`,
                color: service.tagColor,
                border: `1px solid ${service.tagColor}33`
              }}>{service.tag}</div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '4px', letterSpacing: '-0.5px', fontFamily: 'var(--font-display)' }}>
                {service.title}
              </h3>
              <div style={{ color: 'var(--muted)', fontSize: '13px', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
                {service.subtitle}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', fontFamily: 'var(--font-display)' }}>
                {service.desc}
              </p>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                color: service.statusColor
              }}>{service.status}</div>
            </div>
          ))}
        </div>

        {/* Weekly optimization card */}
        <div style={{
          background: 'var(--bg)', border: '1px solid var(--border)',
          borderRadius: '6px', padding: '40px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '10px',
              padding: '3px 8px', borderRadius: '3px', marginBottom: '16px',
              letterSpacing: '1px', background: 'rgba(255,170,0,0.1)',
              color: 'var(--accent3)', border: '1px solid rgba(255,170,0,0.2)'
            }}>ONGOING</div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-1px', fontFamily: 'var(--font-display)' }}>
              Weekly Agent Optimization
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px', fontFamily: 'var(--font-display)' }}>
              Just like SEO — getting listed is step one. Ranking above competitors is step two. We optimize your data weekly so your business appears first when agents search.
            </p>
            {['Product feed accuracy', 'AI query optimization', 'Response speed monitoring', 'Protocol update management'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--muted)', fontSize: '14px', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                <span style={{ color: 'var(--green)', fontSize: '16px' }}>✓</span> {item}
              </div>
            ))}
          </div>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '6px', padding: '24px', fontFamily: 'var(--font-mono)', fontSize: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontWeight: 700, color: 'var(--text)' }}>Weekly Report</span>
              <span style={{ background: 'rgba(0,255,136,0.15)', color: 'var(--green)', padding: '3px 8px', borderRadius: '3px', fontSize: '10px' }}>
                ● DELIVERED
              </span>
            </div>
            {[
              { label: 'Agent queries this week', val: '847', color: 'var(--accent)' },
              { label: 'Products shown to agents', val: '23', color: 'var(--accent)' },
              { label: 'Your ranking vs competitors', val: '#2', color: 'var(--green)' },
              { label: 'Optimizations applied', val: '6', color: 'var(--accent3)' },
            ].map(row => (
              <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                <span style={{ color: row.color, fontWeight: 700 }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ position: 'relative', zIndex: 1, padding: '100px 48px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '3px', marginBottom: '16px' }}>
          PRICING
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-2px', marginBottom: '64px', fontFamily: 'var(--font-display)' }}>
          Simple. Transparent.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--border)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)', maxWidth: '900px' }}>
          {[
            {
              name: 'Starter',
              price: '$29',
              period: '/month',
              desc: 'For businesses just getting started with AI agent presence.',
              features: ['MCP Server setup', 'Listed on our directory', 'UCP implementation', 'ACP application', 'Monthly optimization'],
              cta: 'Start Free Trial',
              highlight: false
            },
            {
              name: 'Growth',
              price: '$49',
              period: '/month',
              desc: 'Most popular. Everything you need to dominate agent search.',
              features: ['Everything in Starter', 'Weekly optimization', 'Weekly performance report', 'Priority ACP application', 'Agent query analytics'],
              cta: 'Start Free Trial',
              highlight: true
            },
            {
              name: 'Pro',
              price: '$99',
              period: '/month',
              desc: 'For businesses serious about being first in agent results.',
              features: ['Everything in Growth', 'Daily optimization', 'Competitor ranking tracking', 'Priority support', 'First in new platform listings'],
              cta: 'Start Free Trial',
              highlight: false
            },
          ].map((plan, i) => (
            <div key={i} style={{
              background: plan.highlight ? 'rgba(0,217,255,0.05)' : 'var(--surface)',
              padding: '40px',
              position: 'relative',
              borderTop: plan.highlight ? '2px solid var(--accent)' : '2px solid transparent'
            }}>
              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: '-1px', left: '50%', transform: 'translate(-50%,-50%)',
                  background: 'var(--accent)', color: '#000', padding: '4px 12px',
                  borderRadius: '100px', fontSize: '10px', fontWeight: 700,
                  fontFamily: 'var(--font-mono)', letterSpacing: '1px'
                }}>MOST POPULAR</div>
              )}
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '8px' }}>
                <span style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-2px', color: plan.highlight ? 'var(--accent)' : 'var(--text)', fontFamily: 'var(--font-display)' }}>{plan.price}</span>
                <span style={{ color: 'var(--muted)', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>{plan.period}</span>
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '13px', marginBottom: '24px', fontFamily: 'var(--font-display)', lineHeight: 1.6 }}>{plan.desc}</div>
              <div style={{ marginBottom: '28px' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)', fontSize: '13px', marginBottom: '10px', fontFamily: 'var(--font-display)' }}>
                    <span style={{ color: 'var(--green)' }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <a href="#register" style={{
                display: 'block', textAlign: 'center',
                background: plan.highlight ? 'var(--accent)' : 'transparent',
                color: plan.highlight ? '#000' : 'var(--text)',
                border: plan.highlight ? 'none' : '1px solid var(--border)',
                padding: '12px', borderRadius: '3px',
                fontWeight: 700, fontSize: '14px', textDecoration: 'none',
                fontFamily: 'var(--font-mono)', transition: 'all 0.2s'
              }}>{plan.cta}</a>
              <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                30 days free. No credit card.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REGISTER FORM */}
      <section id="register" style={{
        position: 'relative', zIndex: 1, padding: '100px 48px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)'
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '3px', marginBottom: '16px' }}>
            GET STARTED
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-2px', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
            Register Your Business
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '48px', fontFamily: 'var(--font-display)' }}>
            Your MCP server will be live in 48 hours. First month completely free.
          </p>

          {submitted ? (
            <div style={{
              background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)',
              borderRadius: '6px', padding: '48px', textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                You're Registered!
              </h3>
              <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-display)', lineHeight: 1.7 }}>
                We'll review your website and have your MCP server live within 48 hours. Check your email for next steps.
              </p>
            </div>
          ) : (
            <div style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: '6px', padding: '40px', textAlign: 'left'
            }}>
              {[
                { id: 'name', label: 'Business Name', placeholder: 'e.g. James Shoe Store', type: 'text' },
                { id: 'url', label: 'Website URL', placeholder: 'https://yourstore.com', type: 'url' },
                { id: 'email', label: 'Your Email', placeholder: 'you@yourstore.com', type: 'email' },
              ].map(field => (
                <div key={field.id} style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '1px', marginBottom: '8px' }}>
                    {field.label.toUpperCase()}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={e => setFormData({ ...formData, [field.id]: e.target.value })}
                    style={{
                      width: '100%', background: 'var(--surface2)',
                      border: '1px solid var(--border)', borderRadius: '3px',
                      padding: '12px 16px', color: 'var(--text)',
                      fontFamily: 'var(--font-mono)', fontSize: '13px',
                      outline: 'none', transition: 'border-color 0.2s'
                    }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '1px', marginBottom: '8px' }}>
                  BUSINESS CATEGORY
                </label>
                <select
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: '100%', background: 'var(--surface2)',
                    border: '1px solid var(--border)', borderRadius: '3px',
                    padding: '12px 16px', color: formData.category ? 'var(--text)' : 'var(--muted)',
                    fontFamily: 'var(--font-mono)', fontSize: '13px', outline: 'none'
                  }}
                >
                  <option value="">Select category...</option>
                  {['Clothing & Fashion', 'Shoes & Accessories', 'Food & Restaurant', 'Hotels & Travel', 'Health & Beauty', 'Home & Living', 'Electronics', 'Other'].map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  width: '100%', background: submitting ? 'var(--muted)' : 'var(--accent)',
                  color: '#000', padding: '16px', borderRadius: '3px',
                  fontWeight: 700, fontSize: '16px', border: 'none',
                  fontFamily: 'var(--font-mono)', cursor: submitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {submitting ? 'Submitting...' : 'Register My Business — Free →'}
              </button>
              <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                No credit card. No technical knowledge. Live in 48 hours.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        position: 'relative', zIndex: 1,
        borderTop: '1px solid var(--border)',
        padding: '32px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent)', fontWeight: 700 }}>
          MCP<span style={{ color: 'var(--muted)' }}>-IT</span>
        </div>
        <div style={{ color: 'var(--muted)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
          © 2026 MCP-IT. Built for the agent era.
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms', 'Contact'].map(item => (
            <a key={item} href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '12px', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}>
              {item}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
