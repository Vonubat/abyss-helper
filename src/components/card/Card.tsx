import { Card as CardFlowbite } from 'flowbite-react';

import { Abyss } from '../../types';

type Props = { abyss: Abyss };

const Card = ({ abyss }: Props): JSX.Element => {
  const { created, durationMs, data } = abyss;

  return (
    <div className="max-w-sm">
      <CardFlowbite>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Created: {created}</h5>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Duration: {dayjs.duration(durationMs).format('HH-mm-ss')}
        </h5>
        <p className="whitespace-pre-line font-normal text-gray-700 dark:text-gray-400">{`${data}`}</p>
      </CardFlowbite>
    </div>
  );
};

export default Card;
