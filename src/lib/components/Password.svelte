// Password.svelte
<script>
  import { onMount } from 'svelte';
  import crypto from 'crypto-browserify';
  import Dialog from '@smui/dialog';
  import Button from '@smui/button';
  import Textfield from '@smui/textfield';
  
  // Import encoded JSON data
  import encodedData from '$lib/components/misc/encoded.json';
  
  export let onAuthenticated;
  
  let open = true;
  let password = '';
  let errorMessage = '';
  let attempts = 0;
  
  const ALGORITHM = 'aes-256-cbc';
  
  function decryptData(fileContent, password) {
    try {
      // Verify the password using the hash
      const expectedHash = crypto.createHash('sha256').update(password).digest('hex');
      if (fileContent.hash !== expectedHash) {
        throw new Error('Invalid password');
      }
      
      // Reconstruct the key from the password and salt
      const salt = Buffer.from(fileContent.salt, 'hex');
      const key = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha512');
      const iv = Buffer.from(fileContent.iv, 'hex');
      
      // Decrypt the data
      const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
      let decrypted = decipher.update(fileContent.payload, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      
      return JSON.parse(decrypted);
    } catch (error) {
      console.error('Decryption error:', error);
      return null;
    }
  }
  
  function validatePassword() {
    attempts++;
    
    try {
      const decryptedData = decryptData(encodedData, password);
      
      if (decryptedData) {
        // Store decrypted data in session storage or context for use in other components
        sessionStorage.setItem('userData', JSON.stringify(decryptedData));
        onAuthenticated();
        open = false;
      } else {
        errorMessage = `Invalid password. Please try again (${attempts} attempt${attempts !== 1 ? 's' : ''})`;
      }
    } catch (error) {
      errorMessage = `Authentication failed. Please try again (${attempts} attempt${attempts !== 1 ? 's' : ''})`;
    }
  }
</script>

<Dialog 
  bind:open
  scrimClickAction=""
  escapeKeyAction=""
  aria-labelledby="auth-title"
  aria-describedby="auth-content"
>
  <div slot="title" id="auth-title">Authentication Required</div>
  
  <div id="auth-content">
    <div>
      <Textfield 
        bind:value={password} 
        label="Password" 
        type="password"
        helperText={errorMessage || "Please enter your password to access this content."}
        invalid={errorMessage !== ''}
      />
    </div>
  </div>
  
  <div slot="actions">
    <Button on:click={validatePassword}>
      <span>Enter</span>
    </Button>
  </div>
</Dialog>

<style>
  #auth-content {
    padding: 1rem;
  }
</style>