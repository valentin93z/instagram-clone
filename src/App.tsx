import React, { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Dashboard from './pages/dashboard/Dashboard';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { getAuth } from 'firebase/auth';
import CircleLoader from './components/UI/loaders/circleLoader/CircleLoader';
import { useAppDispatch } from './app/hooks';
import { authSlice, IUser } from './app/slices/authSlice';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import Profile from './pages/profile/Profile';


const publicRoutes = createBrowserRouter([
  { path: '/login', element: <SignIn /> },
  { path: '/registration', element: <SignUp /> },
  { path: '*', element: <Navigate to='/login' replace /> },
]);

const privateRoutes = createBrowserRouter([
  { path: '/profile', element: <Profile /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '*', element: <Navigate to={'/dashboard'} replace /> },
]);


function App() {

  const auth = getAuth();
  const [ user, loading, error ] = useAuthState(auth);
  const dispatch = useAppDispatch();

  const fetchUserById = async (id: string) => {
    const document = await getDoc(doc(db, 'users', id));
    document && dispatch(authSlice.actions.setUser(document.data()));
  }

  useEffect(() => {
    user && fetchUserById(user.uid);
  }, [user]);


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