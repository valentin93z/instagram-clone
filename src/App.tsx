import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Dashboard from './pages/dashboard/Dashboard';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { getAuth } from 'firebase/auth';
import CircleLoader from './components/UI/loaders/circleLoader/CircleLoader';


const publicRoutes = createBrowserRouter([
  { path: '/login', element: <SignIn /> },
  { path: '/registration', element: <SignUp /> },
  { path: '*', element: <Navigate to='/login' replace /> },
]);

const privateRoutes = createBrowserRouter([
  { path: '/dashboard', element: <Dashboard /> },
  { path: '*', element: <Navigate to={'/dashboard'} replace /> },
]);


function App() {

  const auth = getAuth();
  const [ user, loading, error ] = useAuthState(auth);

  if (loading) return <CircleLoader />

  return (
    <div className="App">
      {
        user
          ? <RouterProvider router={privateRoutes} />
          : <RouterProvider router={publicRoutes} />
      }
    </div>
  );
}

export default App;