<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css'; // Import AOS styles
  import Typed from 'typed.js'; // Import Typed.js

  let typed;

  // Initialize AOS when the component mounts
  onMount(() => {
    AOS.init();

    // Initialize Typed.js for dynamic typing effect
    typed = new Typed('.typed', {
      strings: ['Engineer', 'Developer', 'Freelancer'], // Array of dynamic strings
      typeSpeed: 80, // Speed of typing
      backSpeed: 60, // Speed of backspacing
      backDelay: 1000, // Delay before starting to backspace
      startDelay: 500, // Delay before starting to type
      loop: true, // Loop the typing animation
      showCursor: true, // Show the blinking cursor
    });
  });
</script>

<style>
  /*--------------------------------------------------------------
  # Hero Section with Image and Glassy Blur Effect
  --------------------------------------------------------------*/
  #hero {
    width: 100%;
    height: 100vh;
    background: url('/assets/img/hero-bg.jpg') no-repeat center center; /* Ensure background image fits */
    background-size: cover; /* Make sure the image covers the screen */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Prevent any content from overflowing */
  }

  /* Subtle glassy blur effect */
  #hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.4); /* Light white overlay */
    backdrop-filter: blur(0.1px); /* Apply blur effect for frosted-glass look */
    z-index: 1; /* Keep blur effect behind text */
  }

  .container {
    position: relative;
    z-index: 2; /* Ensure text and links are above blur */
    text-align: center;
    padding: 0 20px;
    color: #fff;
  }

  #hero h1 {
    margin: 0;
    font-size: 64px; /* Larger font size for title */
    font-weight: 700;
    color: #45505b;
    z-index: 2;
  }

  #hero p {
    color: #45505b;
    margin-top: 15px;
    font-size: 26px;
    z-index: 2;
  }

  #hero p span {
    color: #0563bb;
  }

  .typed-cursor {
    color: #0077ff;
  }

  .social-links {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    z-index: 2; /* Ensure links are above background */
  }

  .social-links a {
    margin: 0 15px;
    color: #45505b;
    font-size: 24px;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: #0563bb;
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 992px) {
    #hero {
      text-align: center;
    }

    #hero h1 {
      font-size: 32px;
    }

    #hero p {
      margin-top: 10px;
      font-size: 20px;
    }
  }
</style>

<section id="hero" data-aos="zoom-in" data-aos-delay="100">
  <div class="container">
    <h1>Uday Kaipa</h1>
    <p>I'm <span class="typed"></span><span class="typed-cursor" aria-hidden="true">|</span></p>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/udaykaipa/" class="linkedin" aria-label="LinkedIn">
        <i class="bx bxl-linkedin"></i>
      </a>
      <a href="https://github.com/KaipaUday" class="github" aria-label="GitHub">
        <i class="bx bxl-github"></i>
      </a>
      <a href="https://www.xing.com/profile/Uday_Kaipa/" class="xing" aria-label="Xing">
        <i class="bx bxl-xing"></i>
      </a>
      <a href="https://stackoverflow.com/users/13509573/uday-reddy-kaipa" class="stackoverflow" aria-label="Stack Overflow">
        <i class="bx bxl-stack-overflow"></i>
      </a>
      <a href="mailto:uday.kaipa@icloud.com" class="mail" aria-label="Gmail">
        <i class="bx bxl-gmail"></i>
      </a>
    </div>
  </div>
</section>
