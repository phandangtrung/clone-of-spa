import { Outlet } from 'react-router';
import Header from '~/components/UI/Header';
import SideBar from '~/components/UI/SideBar';
import Main from '~/components/Main';

export default function Index() {
  return (
    <div className="h-full w-full mx-auto overflow-hidden">
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
