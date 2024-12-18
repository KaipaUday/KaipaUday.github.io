<script>
  let name = "xxx";
  let title = "Software Engineer & Developer";
  let availability = "Part-time, Freelance";
  let phone = "xxx";
  let city = "Ilmenau, Germany";
  let currentStatus = "Pursuing Master's Degree";
  let age = "xxx";
  let email = "xxx@icloud.com";

  let developmentSkills = ["Test Automation - Advanced", "Web Development - Advanced", "Embedded / IoT Development - Advanced"];
  let programmingSkills = ["Python - Advanced", "JavaScript - Advanced", "Java - Intermediate", "Flask and Django Framework - Advanced", "Robot Framework - Advanced", "Node.js - Intermediate", "Embedded Firmware Development - Advanced", "Selenium - Advanced", "PHP - Advanced", "JSP - Intermediate", "HTML 5 & CSS - Advanced"];
  let languageSkills = ["Business English - Advanced", "German - Conversational"];
</script>

<style>
  .about-container {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
  }

  .about-section {
    width: 60%;
  }

  .skills-section {
    width: 35%;
    padding-left: 20px;
    background-color: #333; /* Dark background for contrast */
    border-radius: 8px;
    padding: 20px;
  }

  .about-container h2 {
    text-align: center;
    color: #333;
  }

  .about-container p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
  }

  .highlight {
    font-weight: bold;
    color: #444;
  }

  .skills-list {
    list-style-type: none;
    padding: 0;
  }

  .skills-list li {
    margin-bottom: 10px;
    color: #fff; /* White color for skills text */
  }

  .skills-section h3, .skills-section h4 {
    color: #fff; /* White color for headers in the skills section */
  }
</style>

<div class="about-container">
  <!-- About Section -->
  <div class="about-section">
    <h2>About</h2>
    <p>I'm a passionate engineer with a never-settling attitude. I believe in the power of interdisciplinary engineering. With my inherent ability to grasp concepts swiftly, I am a quick learner, readily adapting to new challenges and acquiring new skills.</p>
    
    <p><span class="highlight">Title:</span> {title}</p>
    <p><span class="highlight">Availability:</span> {availability}</p>
    <p><span class="highlight">Phone:</span> {phone}</p>
    <p><span class="highlight">Current City:</span> {city}</p>
    <p><span class="highlight">Current Status:</span> {currentStatus}</p>
    <p><span class="highlight">Age:</span> {age}</p>
    <p><span class="highlight">Email:</span> {email}</p>
  </div>

  <!-- Skills Section -->
  <div class="skills-section">
    <h3>Skills</h3>
    
    <h4>Development Skills</h4>
    <ul class="skills-list">
      {#each developmentSkills as skill}
        <li>{skill}</li>
      {/each}
    </ul>

    <h4>Programming Skills</h4>
    <ul class="skills-list">
      {#each programmingSkills as skill}
        <li>{skill}</li>
      {/each}
    </ul>

    <h4>Language Skills</h4>
    <ul class="skills-list">
      {#each languageSkills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>
</div>
