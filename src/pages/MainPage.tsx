import { Control } from '../components';
import AbyssalCard from '../components/abyssalCard/abyssalCard';
import { abyssalSelector, useAppSelector } from '../redux';

const MainPage = (): JSX.Element => {
  const { abyssals } = useAppSelector(abyssalSelector);

  return (
    <main className="main-page__wrapper flex grow flex-col items-center gap-20 py-10">
      <Control />
      <div className="cards__container flex flex-wrap gap-10">
        {abyssals.map((abyssal) => (
          <AbyssalCard key={abyssal.created} abyssal={abyssal} />
        ))}
      </div>
    </main>
  );
};

export default MainPage;
