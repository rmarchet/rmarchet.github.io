// Sidebar navigation functionality for REST API Playground Examples

// List of all examples with their metadata
const examples = [
  { file: 'index.html', title: 'Examples Index', category: 'Main' },
  { file: 'basic-usage.html', title: 'Basic Usage', category: 'Getting Started' },
  { file: 'cdn-usage.html', title: 'CDN Usage', category: 'Getting Started' },
  { file: 'auto-react-loading.html', title: 'Auto React Loading', category: 'Getting Started' },
  
  { file: 'test-themes.html', title: 'Light & Dark Themes', category: 'Theming' },
  { file: 'theme-comparison.html', title: 'Theme Comparison', category: 'Theming' },
  { file: 'auto-theme-switcher.html', title: 'Auto Theme Switcher', category: 'Theming' },
  
  { file: 'test-hidden-request-panel.html', title: 'Hidden Request Panel', category: 'Layout' },
  { file: 'test-custom-labels.html', title: 'Custom Labels', category: 'Layout' },
  { file: 'test-collapsible-request.html', title: 'Collapsible Request', category: 'Layout' },
  { file: 'test-header-component.html', title: 'Header Component', category: 'Layout' },
  { file: 'layout-comparison.html', title: 'Layout Comparison', category: 'Layout' },
  { file: 'branding-showcase.html', title: 'Branding Showcase', category: 'Layout' },
  
  { file: 'test-api-methods.html', title: 'API Methods Test', category: 'Features' },
  { file: 'test-json-preview.html', title: 'JSON Preview', category: 'Features' },
  { file: 'test-show-quickstart.html', title: 'Quick Start Demo', category: 'Features' },
  { file: 'quickstart-demo.html', title: 'Quick Start Examples', category: 'Features' },
  
  { file: 'api-documentation-integration.html', title: 'API Docs Integration', category: 'Integration' },
  { file: 'api-docs-sidebar-layout.html', title: 'API Docs Sidebar', category: 'Integration' },
  
  { file: 'demo-config-examples.html', title: 'Config Examples', category: 'Advanced' },
  { file: 'test-query-parameters.html', title: 'Query Parameters', category: 'Advanced' },
  { file: 'maxwidth-demo.html', title: 'Max Width Demo', category: 'Advanced' },
  
  { file: 'test-library.html', title: 'Library Test', category: 'Development' },
  { file: 'test-typescript.html', title: 'TypeScript Test', category: 'Development' },
  { file: 'test-async-api.html', title: 'Async API Test', category: 'Development' },
  { file: 'test-browser-errors.html', title: 'Browser Error Testing', category: 'Development' },
  { file: 'simple-test.html', title: 'Simple Test', category: 'Development' },
  { file: 'fix-timing-issue.html', title: 'Timing Issue Fix', category: 'Development' },
];

function getCurrentFileName() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function createSidebar() {
  const currentFile = getCurrentFileName();
  
  // Create sidebar toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'sidebar-toggle';
  toggleButton.innerHTML = '☰';
  toggleButton.setAttribute('aria-label', 'Toggle sidebar');
  
  // Create sidebar
  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';
  
  // Create sidebar header
  const header = document.createElement('div');
  header.className = 'sidebar-header';
  header.innerHTML = `
    <h2>📚 REST API Playground</h2>
    <p>Examples & Documentation</p>
  `;
  
  // Create navigation
  const nav = document.createElement('nav');
  nav.className = 'sidebar-nav';
  
  // Group examples by category
  const categories = {};
  examples.forEach(example => {
    if (!categories[example.category]) {
      categories[example.category] = [];
    }
    categories[example.category].push(example);
  });
  
  // Build navigation HTML
  let navHTML = '<ul>';
  Object.entries(categories).forEach(([category, items]) => {
    navHTML += `
      <li style="margin: 1rem 0 0.5rem; padding: 0 1rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">
        ${category}
      </li>
    `;
    
    items.forEach(item => {
      const isActive = item.file === currentFile;
      navHTML += `
        <li>
          <a href="${item.file}" class="${isActive ? 'active' : ''}" ${isActive ? 'aria-current="page"' : ''}>
            ${item.title}
          </a>
        </li>
      `;
    });
  });
  navHTML += '</ul>';
  
  nav.innerHTML = navHTML;
  
  // Assemble sidebar
  sidebar.appendChild(header);
  sidebar.appendChild(nav);
  
  // Add to page
  document.body.insertBefore(toggleButton, document.body.firstChild);
  document.body.insertBefore(sidebar, document.body.firstChild);
  
  // Add toggle functionality
  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  
  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
      if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      sidebar.classList.remove('open');
    }
  });
}

// Initialize sidebar when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createSidebar);
} else {
  createSidebar();
}
