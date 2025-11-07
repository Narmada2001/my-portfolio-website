# AI Coding Instructions for Portfolio Website

## Project Overview
This is a **single-page React portfolio website** for Narmada Gunathilaka, bootstrapped with Create React App. The site showcases projects, skills, education, and contact information with a dark theme aesthetic.

## Architecture & File Organization

### Component Hierarchy
```
App.js (root container)
├── Navbar (fixed navigation with mobile hamburger menu)
├── Hero (welcome section with profile, CV download, social links)
├── About (section container)
│   ├── Education (card-based timeline)
│   ├── WorkExperience (professional history)
│   └── Skills (categorized skill tags)
├── Services (service offerings with icons)
├── Portfolio (project showcase grid)
├── Contact (two-column: info + form)
└── Footer (copyright & social links)
```

### Directory Structure Pattern
- **`src/sections/`**: Full-page sections (Hero, About, Portfolio, Services, Contact) - these are mounted directly in `App.js`
- **`src/components/`**: Reusable components (Navbar, Footer, ProjectCard, ServiceCard, Education, Skills, SocialLinks, etc.)
- **`src/assets/`**: Static files (images, PDFs) - project images, profile photo, CV file
- **Component-level CSS**: Each component/section has its own `.css` file (e.g., `Navbar.css`, `Hero.css`)

## Key Patterns & Conventions

### Data-Driven Components
Components use internal data arrays rather than external JSON files:
```javascript
// Pattern used in Portfolio.js, Education.js, Skills.js
const projectData = [ /* array of objects */ ];
return projectData.map((item, index) => <Component key={index} data={item} />);
```

### CSS Approach
- **Global styles** in `index.css`: CSS reset, smooth scroll, dark theme defaults (`#1a202c` background, `#cbd5e0` text)
- **Component styles** in dedicated `.css` files: No CSS-in-JS or styled-components
- **Class naming**: BEM-inspired (`.hero-section`, `.project-card`, `.skill-item-tag`)

### Icon Usage
- **react-icons** library (FontAwesome) is the standard: `import { FaIcon } from 'react-icons/fa'`
- Used in: SocialLinks, Footer, Education, Skills, Services, ProjectCard
- **DO NOT** use `@fortawesome/react-fontawesome` despite it being in dependencies

### Section Pattern
All main sections follow this structure:
```javascript
<section id="section-name" className="section-name-section">
  <div className="section-header">
    <h2>Section Title</h2>
    <p>Subtitle/description</p>
  </div>
  <div className="section-content">
    {/* Content here */}
  </div>
</section>
```
The `id` attribute enables smooth scroll navigation from navbar anchor links.

### Static Asset Imports
Assets are imported directly, not referenced by path string:
```javascript
import ProfilePic from '../assets/profile.jpg';
import CV from '../assets/Narmada_Gunathilaka_CV.pdf';
<img src={ProfilePic} alt="..." />
<a href={CV} download>Download CV</a>
```

## Development Workflow

### Available Commands
- **`npm start`**: Development server on `http://localhost:3000` (auto-reload enabled)
- **`npm test`**: Run Jest tests in watch mode
- **`npm run build`**: Production build to `/build` folder

### Adding New Projects
1. Add project image to `src/assets/`
2. Import image in `Portfolio.js`
3. Add project object to `projectData` array with required fields:
   - `title`, `role`, `status`, `description`, `technologies[]`, `githubLink`, `liveDemoLink`, `image`
4. Status values affect badge styling: `"Capstone Project"`, `"Completed"`, `"Individual Project"`, `"Group Project"`

### Mobile Responsiveness
- Navbar uses `useState` hook for hamburger menu toggle (`isOpen` state)
- CSS uses responsive classes (e.g., `.nav-links.open`) triggered by state
- Ensure new components follow this pattern for mobile views

## Common Pitfalls

1. **Don't** add routing libraries - this is intentionally a single-page app with anchor navigation
2. **Don't** use `@fortawesome/react-fontawesome` - use `react-icons` instead
3. **Don't** create external JSON files for data - keep data colocated with components
4. **Always** import assets (images/PDFs) as modules, never use public path strings
5. **Match the dark theme**: Use existing color palette from `index.css` when adding styles

## Testing Context
- Test files follow Jest/React Testing Library conventions (`*.test.js`)
- `setupTests.js` configures `@testing-library/jest-dom`
- Currently minimal test coverage - prioritize functionality over tests for now

## Personal Information References
When updating content, Narmada's details:
- Email: `narmadagunathilaka9@gmail.com`
- LinkedIn: `linkedin.com/in/narmada-gunathilaka-2818372a7/`
- GitHub: `github.com/Narmada2001`
- University: Sabaragamuwa University of Sri Lanka (GPA 3.5)
- Primary tech stack: React.js, Node.js, MongoDB, Laravel, PHP
