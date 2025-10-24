import React from 'https://esm.sh/react@18.3.1';
import ReactDOM from 'https://esm.sh/react-dom@18.3.1/client';

const styles = `
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
::before,::after{--tw-content:''}
html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}
body{margin:0;line-height:inherit}
h1,h2,p,pre{margin:0}
h1,h2{font-size:inherit;font-weight:inherit}
pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}
*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}
.min-h-screen{min-height:100vh}
.max-w-2xl{max-width:42rem}
.mx-auto{margin-left:auto;margin-right:auto}
.mb-2{margin-bottom:0.5rem}
.mb-4{margin-bottom:1rem}
.mb-6{margin-bottom:1.5rem}
.overflow-auto{overflow:auto}
.rounded-lg{border-radius:0.5rem}
.rounded-md{border-radius:0.375rem}
.border{border-width:1px}
.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}
.bg-gradient-to-br{background-image:linear-gradient(to bottom right, var(--tw-gradient-stops))}
.from-blue-50{--tw-gradient-from:#eff6ff var(--tw-gradient-from-position);--tw-gradient-to:rgb(239 246 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}
.to-indigo-100{--tw-gradient-to:#e0e7ff var(--tw-gradient-to-position)}
.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}
.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}
.p-4{padding:1rem}
.p-8{padding:2rem}
.text-sm{font-size:0.875rem;line-height:1.25rem}
.text-lg{font-size:1.125rem;line-height:1.75rem}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-4xl{font-size:2.25rem;line-height:2.5rem}
.font-bold{font-weight:700}
.font-semibold{font-weight:600}
.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}
.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity))}
.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55 / var(--tw-text-opacity))}
.text-indigo-600{--tw-text-opacity:1;color:rgb(79 70 229 / var(--tw-text-opacity))}
.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}
`;

function App() {
  const data = window.openai?.toolOutput?.structuredContent;
  
  if (!data) {
    return React.createElement('div', { className: 'p-8 text-gray-600' }, 'Loading...');
  }
  
  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8' },
    React.createElement(
      'div',
      { className: 'max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8' },
      React.createElement('h1', { className: 'text-4xl font-bold text-indigo-600 mb-4' }, 'Hello World! 👋'),
      React.createElement(
        'p',
        { className: 'text-lg text-gray-700 mb-6' },
        'Welcome to your simple React widget with Tailwind CSS styling.'
      ),
      React.createElement(
        'div',
        { className: 'bg-gray-50 rounded-md p-4 border border-gray-200' },
        React.createElement('h2', { className: 'text-xl font-semibold text-gray-800 mb-2' }, 'Data Received:'),
        React.createElement('pre', { className: 'text-sm text-gray-600 overflow-auto' }, JSON.stringify(data, null, 2))
      )
    )
  );
}

const styleEl = document.createElement('style');
styleEl.textContent = styles;
document.head.appendChild(styleEl);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(React.createElement(App));
}