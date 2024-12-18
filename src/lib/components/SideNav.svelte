<script>
  import { onMount } from 'svelte';

  // Navigation items
  const navItems = [
    { icon: '🏠', label: 'Home', link: '#home' },
    { icon: '👨‍💻', label: 'About', link: '#about' },
    { icon: '📂', label: 'Projects', link: '#projects' },
    { icon: '✉️', label: 'Contact', link: '#contact' },
    { icon: '⚙️', label: 'Settings', link: '#settings' }
  ];

  let active = '#home'; // Active state
  let hoverIndex = null; // Track which icon is hovered

  // Handle scroll to update active item
  function handleScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight / 2; // Adjust position to halfway through the section

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollPos && 
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        active = `#${section.id}`;
      }
    });
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<!-- Navigation -->
<nav>
  {#each navItems as item, i (item.label)}
    <a
      href={item.link}
      class="nav-item {active === item.link ? 'active' : ''}"
      on:mouseenter={() => (hoverIndex = i)}
      on:mouseleave={() => (hoverIndex = null)}
      style="--distance: {hoverIndex !== null ? Math.abs(i - hoverIndex) : 2};"
    >
      <span class="icon">{item.icon}</span>
      <div class="tooltip">{item.label}</div>
    </a>
  {/each}
</nav>

<style>
  /* Container */
  nav {
    z-index: 999; 
    position: fixed;
    top: 10%;
    left: 1%;
    height: 70%; /* Increased height to 80% of the screen */
    display: flex;
    flex-direction: column;
    justify-content: space-around; /* Evenly spread icons */
    align-items: flex-start;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.1); /* Transparent navbar */
    backdrop-filter: blur(10px); /* Apply blur effect to background */
    border-radius: 15px; /* Optional: rounded corners for a smooth glassy look */
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif; /* MacOS-like font stack */
  }

  /* Navigation item */
  .nav-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    color: white;
    text-decoration: none;
    transition: transform 0.3s ease;
  }

  /* Icon with scaling and neighbor effect */
  .icon {
    font-size: calc(3rem + (2 - var(--distance)) * 1rem); /* Larger icon size */
    margin-left: calc(var(--distance) * 10px); /* Adjusted spacing */
    transition: all 0.3s ease;
  }

  /* Tooltip */
  .tooltip {
    position: absolute;
    left: calc(100% + 20px); /* Positioned tooltip further out */
    opacity: 0;
    background-color: #333;
    color: white;
    padding: 0.4rem 0.8rem; /* Larger tooltip */
    border-radius: 5px;
    font-size: 1rem;
    white-space: nowrap;
    transition: opacity 0.2s ease;
    pointer-events: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }

  /* Show tooltip on hover */
  .nav-item:hover .tooltip {
    opacity: 1;
  }

  /* Hover scaling effect */
  .nav-item:hover {
    transform: translateX(15px) scale(1.3);
  }

  /* Active state */
  .nav-item.active .icon {
    color: #0077ff;
  }
</style>
