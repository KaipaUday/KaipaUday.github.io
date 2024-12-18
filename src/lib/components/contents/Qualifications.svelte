<script>
  let name = "xxx";
  let location = "Ilmenau, DE";
  let phone = "xxx";
  let email = "xxx@icloud.com";

  let education = [
    {
      degree: "Research in Computer & Systems Engineering (M. Sc.)",
      year: "2022 - Current",
      institution: "Technische Universität Ilmenau, DE",
      cgpa: "Current CGPA: 1.9/5.0"
    },
    {
      degree: "Electronics and Communication Engineering (B. Tech.)",
      year: "2016 - 2020",
      institution: "JNTUH, India",
      cgpa: "CGPA: 2.0/5.0"
    }
  ];

  let professionalExperience = [
    {
      position: "Automation Engineer",
      company: "Tata Consultancy Services Ltd, India",
      duration: "Jan 2021 - Sept 2022",
      responsibilities: [
        "Quality assurance: end-to-end testing and test-suite development involving native-mobile, desktop, web, and mainframe applications using Robot-framework.",
        "Web development: utility development using Flask and MySQL.",
        "Python programming: development and maintenance of services to reduce manual intervention in tasks using Python. [HP ALM Automation]",
        "Worked on TestNG [Java-Selenium], UFT, and Appium frameworks."
      ]
    },
    {
      position: "IoT Intern, Full-time",
      company: "Techolution Pvt. Ltd.",
      duration: "Sept 2019 - Dec 2019",
      responsibilities: [
        "Firmware development for IIoT gateways using Python.",
        "Worked on Raspberry PI programming to interface various DAQ (Thermal image camera) sensors and transmit data using TCP/IP and MQTT protocols."
      ]
    },
    {
      position: "Freelance Developer - Remote",
      company: "Freelancer",
      duration: "2019 - Current",
      responsibilities: [
        "Worked on prototyping business ideas in varied domains in web, native applications, and Python utilities.",
        "Involved in the prototyping of virtual-trail features for apparel E-Commerce site using THREE.JS (javascript framework) and Avatar SDK.",
        "Developed a web interface for remote control of Raspberry PI.",
        "Performed manual testing after integration."
      ]
    }
  ];
</script>

<style>
  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .section {
    width: 100%;
    margin-bottom: 20px;
  }

  .highlight {
    font-weight: bold;
    color: #444;
  }

  .list {
    list-style-type: none;
    padding: 0;
  }

  .list li {
    margin-bottom: 10px;
  }

  h2 {
    color: #333;
  }

  h3 {
    color: #333;
    margin-top: 20px;
  }

  /* Column Layout for Education and Experience */
  .education, .experience {
    width: 48%; /* Adjust this percentage to make columns wider or narrower */
  }

  @media (max-width: 768px) {
    .education, .experience {
      width: 100%; /* Stack columns on smaller screens */
    }
  }
</style>

<div class="container">
  <!-- About Section -->
  <div class="about-section section">
    <h2>Summary</h2>
    <p>I'm a passionate engineer with a never-settling attitude. I believe in the power of interdisciplinary engineering. With my inherent ability to grasp concepts swiftly, I am a quick learner, readily adapting to new challenges and acquiring new skills.</p>
    <p><span class="highlight">Location:</span> {location}</p>
    <p><span class="highlight">Phone:</span> {phone}</p>
    <p><span class="highlight">Email:</span> {email}</p>
  </div>

  <!-- Education and Professional Experience Section -->
  <div class="education-experience section" style="display: flex; gap: 20px;">
    <!-- Education Section -->
    <div class="education">
      <h3>Education</h3>
      {#each education as ed}
        <div>
          <p><span class="highlight">Degree:</span> {ed.degree}</p>
          <p><span class="highlight">Institution:</span> {ed.institution}</p>
          <p><span class="highlight">Duration:</span> {ed.year}</p>
          <p><span class="highlight">CGPA:</span> {ed.cgpa}</p>
        </div>
        <hr />
      {/each}
    </div>

    <!-- Professional Experience Section -->
    <div class="experience">
      <h3>Professional Experience</h3>
      {#each professionalExperience as exp}
        <div>
          <p><span class="highlight">Position:</span> {exp.position}</p>
          <p><span class="highlight">Company:</span> {exp.company}</p>
          <p><span class="highlight">Duration:</span> {exp.duration}</p>
          <ul class="list">
            {#each exp.responsibilities as responsibility}
              <li>{responsibility}</li>
            {/each}
          </ul>
        </div>
        <hr />
      {/each}
    </div>
  </div>
</div>
