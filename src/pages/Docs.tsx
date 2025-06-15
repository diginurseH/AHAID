
const Docs = () => {
  return (
    <div className="min-h-screen bg-yellow-50 w-full py-28 px-4 flex justify-center items-start">
      <article className="bg-white rounded-lg shadow max-w-2xl w-full p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Developer Documentation</h1>
        <h2 className="text-xl font-semibold text-amber-700 mb-2">Getting Started</h2>
        <p className="mb-4">
          Welcome to the DINHA developer docs! Here you'll eventually find all you need to build, extend, and contribute to the DINHA platform.
        </p>
        <ol className="list-decimal ml-5 text-green-900 space-y-2">
          <li>
            <strong>Introduction:</strong> This is a placeholder. Detailed guides and API docs are coming soon!
          </li>
          <li>
            <strong>Project Structure:</strong> The source code is organized by features—see <span className="font-mono">src/</span> for main logic.
          </li>
          <li>
            <strong>Contributions:</strong> Please see our GitHub repository for contribution guidelines (link to be added).
          </li>
        </ol>
        <div className="mt-6 text-xs text-green-700/80">
          Last updated: June 2025
        </div>
      </article>
    </div>
  );
};

export default Docs;
