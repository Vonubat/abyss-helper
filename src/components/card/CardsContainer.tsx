import { abyssSelector, useAppSelector } from '../../redux';

import Card from './Card';

const CardsContainer = (): JSX.Element => {
  const { abysses } = useAppSelector(abyssSelector);

  return (
    <div className="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 flex w-[95vw] flex-nowrap items-start gap-3 overflow-x-auto overflow-y-hidden rounded-md bg-white bg-opacity-20 p-5">
      {abysses.map((abyss) => (
        <Card key={abyss.created} abyss={abyss} />
      ))}
    </div>
  );
};

export default CardsContainer;
