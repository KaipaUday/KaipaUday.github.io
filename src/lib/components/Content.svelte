// App.svelte
<script>
  import Footer from '$lib/components/Footer.svelte';
  import Hero from '$lib/components/contents/Hero.svelte';
  import About from '$lib/components/contents/About.svelte';
  import Quali from '$lib/components/contents/Qualifications.svelte';
  import Contact from '$lib/components/contents/Contact.svelte';
  import Lang from '$lib/components/misc/langMenu.svelte';
  import Password from '$lib/components/Password.svelte';
  
  // Import the encrypted data utility
  import { getUserData } from '$lib/utils/dataManager';
  
  let isAuthenticated = false;
  
  function unlockSettings() {
    isAuthenticated = true;
  }
  
  // Check if there's already a session
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Check if we already have authenticated data
    const userData = sessionStorage.getItem('userData');
    if (userData) {
      isAuthenticated = true;
    }
  });
</script>

{#if isAuthenticated}
  <Lang/>
  <Hero id="home" />
  <About id="about" />
  <Quali id="projects" />
  <Contact id="contact" />
  <Footer id="settings"/>
{:else}
  <Password onAuthenticated={unlockSettings} />
{/if}

<style>
  /* Main app styles */
</style>