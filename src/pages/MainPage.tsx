import { CardsContainer, Control } from '../components';

const MainPage = (): JSX.Element => {
  return (
    <main className="main-page__wrapper flex grow flex-col items-center gap-5 bg-[url('./assets/bg.webp')] bg-cover py-5">
      <Control />
      <CardsContainer />
    </main>
  );
};

export default MainPage;
