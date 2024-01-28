import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" class="footer">

    <div class="footer-legal text-center">
      <div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div class="d-flex flex-column align-items-center align-items-lg-start">
          <div class="copyright">
            &copy; Copyright <strong><span>TechDasher</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
          </div>
        </div>

        <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
          <a href="#t" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#f" class="twitter"><i class="bi bi-twitter"></i></a>
        </div>

      </div>
    </div>

  </footer>
  )
}

export default Footer