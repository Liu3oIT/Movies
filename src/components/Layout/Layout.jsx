
import { Header } from 'components/Header/header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<h3>Loading...</h3>}>
      <Outlet />
      </Suspense>
    </div>
  );
}
