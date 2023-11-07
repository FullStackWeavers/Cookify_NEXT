import './css/footer.css'

export default function Footer() {
  return (
    <footer >
      <section className='left'>
        <span >Cookify Recipe Hub</span>

      </section>
      <section className='right'>
        <div className='help_center'>
          <h3>Help Center</h3>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Cooking Tips</p>
          <p>Get in Touch</p>
        </div>
        <div className='about_us'>
          <h3>About Us</h3>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
          <p>Subscription plans</p>
        </div>
      </section>
    </footer>
  )
}