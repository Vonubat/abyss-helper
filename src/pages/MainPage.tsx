import bgUrl from '../assets/images/bg.jpg';
import { CardsContainer, Control } from '../components';

const MainPage = (): JSX.Element => {
  return (
    <main
      className="main-page__wrapper flex grow flex-col items-center gap-5 bg-cover py-5"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <Control />
      <CardsContainer />
    </main>
  );
};

export default MainPage;
