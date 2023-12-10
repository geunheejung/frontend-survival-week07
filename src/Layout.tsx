import { Outlet } from 'react-router';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';
import Typo from './components/Typo';
import { useSelector } from './hooks/useStore';
import { Flex, Logo, Text } from './pages/HomePage';

function Loading() {
  return (
    <ClipLoader
      color="#0064FF"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

function Error() {
  return (
    <div>
      <Typo level={1}>
        E R R O R
      </Typo>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  width: 1080px;
  height: 1920px;
  padding: 20px 0;
  background: linear-gradient(134deg, #F89E21 0.7%, #FF6400 65.66%);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Main = styled.main`
  
`;

function Layout() {
  const fetchStatus = useSelector((state) => state.ui.fetchStatus);

  const renderContent = () => {
    if (fetchStatus === 'REQUEST') return <Loading />;
    if (fetchStatus === 'FAIL') return <Error />;

    return <Outlet />;
  };

  return (
    <Wrapper>
      <Header>
        <Logo />
        <Text color="light" fontSize="md">메가테라 푸드코트 키오스크</Text>
      </Header>
      <Main>
        {renderContent()}
      </Main>
    </Wrapper>
  );
}

export default Layout;
