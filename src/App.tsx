interface ToolOutput { structuredContent?: any; }
declare global { interface Window { openai?: { toolOutput?: ToolOutput; }; } }

function App() {
  const data = window.openai?.toolOutput?.structuredContent;
  
  if (!data) {
    return <div className="p-8 text-gray-600">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Hello World! 👋</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to your simple React widget with Tailwind CSS styling.
        </p>
        <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Data Received:</h2>
          <pre className="text-sm text-gray-600 overflow-auto">{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;