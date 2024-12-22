import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { OracleProvider } from './contexts/OracleContext';
import { router } from './routes';
import { database } from './lib/db';
import { seedTestUpvotes } from './lib/db/seed';
import { LoadingScreen } from './components/loading/LoadingScreen';

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initApp = async () => {
      try {
        await database.initialize();
        await seedTestUpvotes(); // Seed test upvotes
        setIsInitialized(true);
      } catch (err) {
        console.error('Failed to initialize app:', err);
        setError('Failed to initialize the application');
      }
    };

    initApp();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  if (!isInitialized) {
    return <LoadingScreen isLoading={true} onLoadingComplete={() => {}} />;
  }

  return (
    <OracleProvider>
      <RouterProvider router={router} />
    </OracleProvider>
  );
}