import { Card as CardFlowbite } from 'flowbite-react';

import { Abyss } from '../../types';
import { getCreationTime } from '../../utils';

type Props = { abyss: Abyss };

const Card = ({ abyss }: Props): JSX.Element => {
  const { created, duration, stockBefore, stockAfter, roomOne, roomTwo, roomThree } = abyss;

  return (
    <div className="w-full">
      <CardFlowbite className="bg-green-200">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Created: {getCreationTime(created!)}
        </h2>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Duration: {duration}</h5>
        <div className="flex flex-col gap-3">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Room One Status: {roomOne}</h5>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Room Two Status: {roomTwo}</h5>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Room Three Status: {roomThree}
          </h5>
        </div>
        <div className="stock__wrapper flex w-full p-2">
          <div className="flex grow flex-col items-center whitespace-pre-wrap border bg-white p-2">{stockBefore}</div>
          <div className="flex  grow flex-col items-center whitespace-pre-wrap border bg-white p-2">{stockAfter}</div>
        </div>
      </CardFlowbite>
    </div>
  );
};

export default Card;
