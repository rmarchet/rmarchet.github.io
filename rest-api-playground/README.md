# 📁 Examples Directory

This directory contains various demonstrations and test files for the REST API Playground library.

## 🚀 Demo Files

### **Core Examples**
- **`basic-usage.html`** - Basic usage patterns and configuration options
- **`demo-config-examples.html`** - Comprehensive configuration showcase

### **Feature Demonstrations**
- **`quickstart-demo.html`** - Interactive toggle demo for showQuickStart option
- **`test-show-quickstart.html`** - Side-by-side comparison of showQuickStart configurations
- **`test-collapsible-request.html`** - Demonstrates the collapsible Request panel functionality
- **`test-hidden-request-panel.html`** - Demonstrates the hideRequestPanel mode with compact header info
- **`test-custom-labels.html`** - Demonstrates custom panel labels with various examples
- **`test-themes.html`** - Light and dark theme showcase with interactive switcher
- **`theme-comparison.html`** - Deep dive into the CSS variables theme system
- **`api-documentation-integration.html`** - Complete API documentation page with embedded playgrounds
- **`api-docs-sidebar-layout.html`** - Two-column layout with docs on left, playgrounds on right
- **`test-query-parameters.html`** - Interactive test for URL query parameters (theme, hideRequestPanel)

### **API Testing**
- **`test-async-api.html`** - Testing the async/await API methods and timing fixes
- **`test-api-methods.html`** - Interactive demonstration of all programmatic API methods
- **`test-library.html`** - Basic library functionality testing
- **`simple-test.html`** - Minimal test setup

### **Technical Tests**
- **`test-typescript.html`** - TypeScript build validation and type safety testing
- **`fix-timing-issue.html`** - Demonstrates the timing issue fix with setTimeout workaround

## 🎯 How to Use

1. **Build the library first:**
   ```bash
   yarn build
   ```

2. **Open any example file:**
   ```bash
   open examples/basic-usage.html
   # or
   open examples/quickstart-demo.html
   ```

3. **Serve locally (optional):**
   ```bash
   cd examples
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 📋 File Categories

| Category | Purpose | Files |
|----------|---------|-------|
| **🎮 Interactive Demos** | Show features in action | `quickstart-demo.html`, `demo-config-examples.html` |
| **🧪 API Testing** | Test programmatic control | `test-api-methods.html`, `test-async-api.html` |
| **⚙️ Configuration** | Show config options | `test-show-quickstart.html`, `basic-usage.html` |
| **🔬 Technical** | Development testing | `test-typescript.html`, `test-library.html` |

## 🎛️ Key Features Demonstrated

- ✅ **Configuration Options** (`showHeader`, `showQuickStart`, `hideRequestPanel`, `theme`, etc.)
- ✅ **Collapsible Panels** (Collapsible Request panel for space optimization)
- ✅ **Hidden Request Panel** (Complete panel hiding with compact header display)
- ✅ **Custom Panel Labels** (Configurable titles for Request and Response panels)
- ✅ **Light & Dark Themes** (CSS variables-based theme system with smooth transitions)
- ✅ **Programmatic API** (`sendRequest()`, `setRequest()`, `getResponse()`, etc.)
- ✅ **TypeScript Support** (Full type safety and IntelliSense)
- ✅ **Async/Await Patterns** (Promise-based API methods)
- ✅ **Multiple Instances** (Creating and managing multiple playgrounds)
- ✅ **Responsive Design** (Works on all screen sizes)

## 🚀 Quick Start

For a quick overview, start with:
1. `examples/basic-usage.html` - Learn the basics
2. `examples/quickstart-demo.html` - See the showQuickStart feature
3. `examples/test-api-methods.html` - Explore programmatic control

Each file is self-contained and includes the necessary React CDN links and library bundle.
