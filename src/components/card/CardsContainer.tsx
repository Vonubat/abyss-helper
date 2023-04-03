import { abyssSelector, useAppSelector } from '../../redux';

import Card from './Card';

const CardsContainer = (): JSX.Element => {
  const { abysses } = useAppSelector(abyssSelector);

  return (
    <div className="flex w-[95vw] flex-nowrap items-start gap-3 overflow-x-auto overflow-y-hidden rounded-md bg-white bg-opacity-20 p-5 scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-700">
      {abysses
        .slice()
        .sort(({ created: a }, { created: b }) => b! - a!)
        .map((abyss) => (
          <Card key={abyss.created} abyss={abyss} />
        ))}
    </div>
  );
};

export default CardsContainer;
