import { Card, Control } from '../components';
import { abyssSelector, useAppSelector } from '../redux';

const MainPage = (): JSX.Element => {
  const { abysses } = useAppSelector(abyssSelector);

  return (
    <main className="main-page__wrapper flex grow flex-col items-center gap-20 bg-[url('./assets/bg.webp')] bg-cover py-10">
      <Control />
      <div className="cards__container flex flex-col gap-10">
        {abysses.map((abyss) => (
          <Card key={abyss.created} abyss={abyss} />
        ))}
      </div>
    </main>
  );
};

export default MainPage;
