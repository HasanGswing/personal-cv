// =====================
// Dark mode toggle with iOS-style switch and easter egg
// =====================
const toggle = document.getElementById('darkModeToggle');
const phoneNumber = document.getElementById('phone-number');
const copyPhone = document.getElementById('copy-phone');
const backToTop = document.getElementById('back-to-top');

toggle.addEventListener('change', () => {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const main = document.querySelector('main');
  const profileImg = document.querySelector('header img');
  const nameHeader = document.querySelector('header h1');
  const subtitle = document.querySelector('.subtitle');
  const navList = document.querySelector('header nav ul');

  if(body.classList.contains('dark-mode')) {
    // Swap to joke profile
    profileImg.src = 'profile-dark.png';
    nameHeader.textContent = 'Hasan-i Sabbah';
    subtitle.textContent = 'Founder of the Order of Assassins';

    navList.innerHTML = `
      <li><a href="#overview">Overview</a></li>
      <li><a href="#biography">Biography</a></li>
    `;

    main.innerHTML = `
      <section id="overview" class="section">
        <h2>Overview</h2>
        <p>Hasan-i Sabbah, also known as Hasan I of Alamut, was a religious and military leader and founder of the Nizari Ismaili sect, the Order of Assassins, as well as the Nizari Ismaili state.</p>
      </section>
      <section id="biography" class="section">
        <h2>Biography</h2>
        <ul>
          <li><strong>Born:</strong> 1050, Qom, Iran</li>
          <li><strong>Died:</strong> June 12, 1124 (74 years), Alamut Castle, Iran</li>
          <li><strong>Parents:</strong> Ali bin Muhammad bin Jafar bin al-Hussain bin Muhammad bin al-Sabbah al-Himyari</li>
          <li><strong>Education:</strong> House of Knowledge</li>
          <li><strong>Organization founded:</strong> Order of Assassins</li>
          <li><strong>Buried:</strong> 1124, Alamut Castle, Iran</li>
          <li><strong>Full name:</strong> Hasan-i Sabbāh</li>
        </ul>
      </section>
    `;
  } else {
    // Swap back to normal CV
    profileImg.src = 'profile-light.png';
    nameHeader.textContent = 'Hasan Sabah';
    subtitle.innerHTML = 'Computer Science Student <span class="separator">•</span> Networking Specialist';

    navList.innerHTML = `
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#other">Other Studies</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#project">Project</a></li>
    `;

    main.innerHTML = `
      <section id="about" class="section">
        <h2>About Me</h2>
        <p>Third-year computer science student specializing in networking. Focused on practical web development and building clean, functional projects.</p>
      </section>

      <section id="skills" class="section">
        <h2>Skills</h2>
        <div class="skills-list">
          <span class="skill-item">HTML</span>
          <span class="skill-item">CSS</span>
          <span class="skill-item">JavaScript</span>
          <span class="skill-item">PHP</span>
        </div>
      </section>

      <section id="other" class="section">
        <h2>Other Programming Languages Studied</h2>
        <div class="skills-list">
          <span class="skill-item">C++</span>
          <span class="skill-item">Python</span>
          <span class="skill-item">R</span>
          <span class="skill-item">SQL</span>
          <span class="skill-item">Assembly</span>
        </div>
      </section>

      <section id="education" class="section">
        <h2>Education</h2>
        <p>University of Mosul, College of Computer Science and Mathematics, Department of Networking</p>
        <p>Third Year, First Semester</p>
      </section>

      <section id="experience" class="section">
        <h2>Experience & Courses</h2>
        <p>Coursework and projects in web development, networking, databases, and systems fundamentals.</p>
      </section><section id="project" class="section">
        <h2>Project</h2>
        <p>Personal CV webpage built using HTML, CSS, and JavaScript as part of the Advanced Web Development course requirements.</p>
      </section>
    `;
  }

  // Re-attach smooth scroll to new nav links
  attachSmoothScroll();
});

// =====================
// Copy phone number to clipboard
// =====================
copyPhone.addEventListener('click', (e) => {
  e.stopPropagation();
  const phoneText = phoneNumber.textContent.replace(/\s+/g, '').replace('📞','').replace('📋',''); 
  navigator.clipboard.writeText(phoneText).then(() => {
    alert('Phone number copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy phone number: ', err);
  });
});

// =====================
// Back to top button functionality
// =====================
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// =====================
// Smooth scrolling for nav links
// =====================
function attachSmoothScroll() {
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetID);
      if(target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Attach on initial load
attachSmoothScroll();