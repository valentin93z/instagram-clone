import { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Main from './pages/main/Main';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { getAuth } from 'firebase/auth';
import CircleLoader from './components/UI/loaders/circleLoader/CircleLoader';
import { useAppDispatch } from './app/hooks';
import { authSlice } from './app/slices/authSlice';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Messages from './pages/messages/Messages';
import Reels from './pages/reels/Reels';
import NewPost from './pages/newPost/NewPost';


const publicRoutes = createBrowserRouter([
  { path: '/login', element: <SignIn /> },
  { path: '/registration', element: <SignUp /> },
  { path: '*', element: <Navigate to='/login' replace /> },
]);

const privateRoutes = createBrowserRouter([
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main/home',
        element: <Home />,
      },
      {
        path: '/main/search',
        element: <Search />,
      },
      {
        path: '/main/reels',
        element: <Reels />,
      },
      {
        path: '/main/messages',
        element: <Messages />,
      },
      {
        path: '/main/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/new-post',
    element: <NewPost />,
  },
  {
    path: '*',
    element: <Navigate to={'/main/profile'} replace /> 
  },
]);


function App() {

  const auth = getAuth();
  const [ user, loading ] = useAuthState(auth);
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