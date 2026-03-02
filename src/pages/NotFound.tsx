import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">Page Not Found</h2>
      <p className="max-w-md text-gray-500 dark:text-gray-400 mb-8">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
