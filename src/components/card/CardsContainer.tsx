import { abyssSelector, useAppSelector } from '../../redux';

import Card from './Card';

const CardsContainer = (): JSX.Element => {
  const { abysses } = useAppSelector(abyssSelector);

  return (
    <div className="flex h-[370px] w-[95vw] flex-wrap justify-start gap-3 overflow-y-auto overflow-x-hidden rounded-md bg-white bg-opacity-20 p-5 scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-700">
      {abysses.map((abyss) => (
        <Card key={abyss.created} abyss={abyss} />
      ))}
    </div>
  );
};

export default CardsContainer;
