import Link from 'next/link';

const CTA_URL = 'https://rebrand.ly/asppsy2';

const EVENT_TIMES = [
  { region: 'IST (India)', time: '07:00 PM' },
  { region: 'GST (UAE)', time: '05:30 PM' },
  { region: 'GMT (UK)', time: '01:30 PM' },
  { region: 'EST (USA/Canada)', time: '09:30 AM' }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="label-pill">Live Spiritual Wellness Webinar</div>
        <h1>Find Calm &amp; Clarity: Master Tafakkur (The Sacred Pause) in Everyday Life</h1>
        <p>
          Join our most-requested webinar to transform your daily routine into a journey of mindful awareness,
          inner peace, and profound spiritual connection.
        </p>
        <Link className="cta-primary" href={CTA_URL} target="_blank" rel="noopener noreferrer">
          Register Now
        </Link>
      </section>

      <section className="section" aria-labelledby="problem">
        <h2 id="problem">Feeling Lost in the &lsquo;Gafla&rsquo; (Heedlessness) of Modern Life?</h2>
        <p>
          In a world of constant notifications and endless distractions, it&apos;s easy to feel disconnected—from
          ourselves, our purpose, and our faith. This state of Gafla (heedlessness) can leave us feeling anxious,
          ungrateful, and spiritually adrift.
        </p>
        <p>
          But what if the solution wasn&apos;t to do more, but to pause? This webinar introduces the profound practice of
          Tafakkur (Contemplation). It&apos;s a powerful, practical tool from the Islamic tradition, presented by the
          Department of Psychology, to help you find focus, peace, and presence in your busy life.
        </p>
      </section>

      <section className="section" aria-labelledby="takeaways">
        <h2 id="takeaways">Discover Your Path to Mindful Awareness</h2>
        <p>In this transformative session, our expert faculty will guide you through:</p>
        <ul>
          <li>What is Tafakkur? Understanding the deep meaning and power of &ldquo;The Sacred Pause.&rdquo;</li>
          <li>Healing Heedlessness (Gafla): Learn practical techniques to overcome distraction with mindful awareness.</li>
          <li>Inner Regulation &amp; Gratitude: Discover how contemplation can calm your emotions and cultivate deep, genuine gratitude.</li>
          <li>Anchoring the Heart: Find simple ways to anchor your heart and bring your faith into sharp, clear focus every day.</li>
        </ul>
      </section>

      <section className="section" aria-labelledby="details">
        <h2 id="details">Save Your Spot!</h2>
        <p>This is a live online webinar. A joining link will be sent to your email after registration.</p>
        <div className="event-grid" role="list">
          <article className="event-card" role="listitem">
            <h3>Date</h3>
            <p>Saturday, 8th November 2025</p>
          </article>
          {EVENT_TIMES.map(({ region, time }) => (
            <article key={region} className="event-card" role="listitem">
              <h3>{region}</h3>
              <p>{time}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="hosts">
        <h2 id="hosts">Presented by Experts in Faith &amp; Psychology</h2>
        <p>
          This webinar is presented by the Department of Psychology at Aspire College of Excellence. You will be
          learning from expert faculty from the Diploma in Islamic Counseling Psychology &amp; Personality Development,
          who specialize in bridging the gap between modern psychological science and timeless Islamic wisdom.
        </p>
      </section>

      <section className="section cta-final" aria-labelledby="final-cta">
        <h2 id="final-cta">Ready to Begin Your Journey of Contemplation?</h2>
        <p>
          This is one of our most requested topics, and spots are limited. Register now to secure your place and learn
          how to anchor your heart in a distracted world.
        </p>
        <Link className="cta-primary" href={CTA_URL} target="_blank" rel="noopener noreferrer">
          Register for Free
        </Link>
      </section>
    </main>
  );
}
