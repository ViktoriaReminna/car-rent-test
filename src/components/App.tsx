// import { lazy, Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';

// const Home = lazy(() => import('./pages/Home/Home'));
// const Cars = lazy(() => import('./pages/Cars/Cars'));
// const Favorite = lazy(() => import('./pages/Favorite/Favorite'));
// const Layout = lazy(() => import('./components/Layout/Layout'));

// const App: React.FC = () => {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="catalog" element={<Cars />} />
//           <Route path="favorites" element={<Favorite />} />
//           <Route path="/*" element={<Navigate raplace to="/" />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// };

// export default App;
