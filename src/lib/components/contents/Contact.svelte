<script>
  let email = "xxx@icloud.com";
  let phone = "xxx";
  let location = "Ilmenau, Germany";
</script>

<style>
  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border-radius: 8px;
  }

  .contact-item {
    margin-bottom: 15px;
  }

  .highlight {
    font-weight: bold;
    color: #444;
  }

  h2 {
    color: #333;
  }
</style>

<div class="container">
  <h2>Contact</h2>

  <div class="contact-item">
    <p><span class="highlight">Email:</span> {email}</p>
  </div>

  <div class="contact-item">
    <p><span class="highlight">Call:</span> {phone}</p>
  </div>

  <div class="contact-item">
    <p><span class="highlight">Location:</span> {location}</p>
  </div>
</div>
