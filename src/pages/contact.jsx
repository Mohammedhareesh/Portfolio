import React from 'react'
import ContactOption from '../components/sections/contact/contactOption'

const Contact = () => {
  return (
    <section id="contact" class="contact-area innerpage-single-area">
      <div class="container">
        <div class="container-inner">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="section-title text-center wow fadeInUp delay-0-2s">
                <p>contact</p>
                <h2>Get in Touch with Me!</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <ContactOption />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact