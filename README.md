# Personal Portfolio Website — Bejawada Naga Varshini

A modern, high-performance personal portfolio website built with clean HTML5, CSS3, and Vanilla JavaScript. Tailored specifically for recruiters and technical interviewers, highlighting Artificial Intelligence, Generative AI, Python, SQL, and Software Engineering competencies.

---

## 🌟 Features Included

- **AI & Technology Theme**: High-tech minimalist aesthetic with dark obsidian styling, electric cyan/violet gradient accents, subtle glassmorphism cards, and an integrated **Light Mode** toggle.
- **Hero Section**: Dynamic typing effect, instant recruiter highlight metrics (Graduation year, B.Tech CSE, Certifications), direct CTA buttons, and dedicated GitHub and LinkedIn badges.
- **About Me**: Career objective, key personal strengths, and career interests.
- **Education**: B.Tech CSE at Dhanekula Institute of Engineering and Technology (Class of 2028).
- **Pruned & Verified Skills**: Filtered strictly to skills learned and practiced (Python, C, SQL/MySQL, Data Structures & Algorithms, OOP, Database Fundamentals, HTML, CSS, JavaScript, AI, Generative AI, Computer Vision, Git/GitHub, PyCharm).
- **Projects with Clear Demarcation**:
  - **Completed Projects**: *Mobile Phone Detection Alarm* (Computer Vision & AI-based application with Python).
  - **Project Concepts & Explorations**: *AI Chatbot for College Enquiry* and *AI-Based Missing Object/Person Finder*.
  - Interactive category filter tabs (*All*, *Completed Projects*, *Concepts & Explorations*).
- **Certifications & Training**: Short, factual, recruiter-ready cards for *Calibo AI Academy*, *MongoDB*, *Hedera HCF*, and *Hedera HCDA*.
- **Learning Journey**: Visual interactive roadmap showcasing the evolution from academic fundamentals to Calibo AI Academy, hands-on implementations, and industry credentials.
- **Recruiter-Friendly Contact**: 1-click "Copy to Clipboard" for Email (`bejawadanagavarshini007@gmail.com`) and Phone (`9030079988`), location info, LinkedIn/GitHub links, and an interactive message form.
- **Zero Build Tools Required**: Pure standard web technologies — no Node.js or build steps necessary.

---

## 🚀 How to Run & View Locally

### Option 1: Direct in Browser (Instant)
Simply open the project folder in File Explorer and double-click `index.html`. It will open immediately in your default browser (Chrome, Edge, etc.).

### Option 2: Using Python Local Server
If you'd like to test it via a local web server:
1. Open PowerShell or Command Prompt.
2. Navigate to this directory:
   ```powershell
   cd "C:\Users\VARSHINI\.gemini\antigravity\scratch\varshini-portfolio"
   ```
3. Start Python's built-in HTTP server:
   ```powershell
   python -m http.server 8000
   ```
4. Open your browser and go to `http://localhost:8000`.

---

## ✏️ How to Edit & Update Content

All content is organized with clear HTML comments inside `index.html`:
- **Resume Links / Project Repos**: Look for `<a href="https://github.com/..." class="project-link">` inside the `#projects` section and paste your direct GitHub repository links when ready.
- **Adding New Skills**: Add `<div class="skill-pill"><span class="skill-name">Your Skill</span></div>` inside the appropriate category in `#skills`.
- **Styling & Colors**: In `style.css`, all colors and font sizes are controlled by CSS variables at the top (`:root` and `[data-theme="light"]`).

---

## 🌐 Free Deployment (GitHub Pages)

To publish your website online so recruiters can access it at `https://bejawadanagavarshini007-code.github.io/portfolio`:

1. Create a new repository on your GitHub account named `portfolio` (or `bejawadanagavarshini007-code.github.io`).
2. Push the files in this folder to that repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/bejawadanagavarshini007-code/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings** > **Pages** > select **Deploy from a branch** > choose `main` (root) > click **Save**.
4. Your website will be live in 1-2 minutes!
