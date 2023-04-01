import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { Card } from 'flowbite-react';

import { IAbyssal } from '../../types';

dayjs.extend(duration);

type Props = { abyssal: IAbyssal };

const AbyssalCard = ({ abyssal }: Props): JSX.Element => {
  const { created, durationMs, data } = abyssal;

  return (
    <div className="max-w-sm">
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Created: {created}</h5>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Duration: {dayjs.duration(durationMs).format('HH-mm-ss')}
        </h5>
        <p className="whitespace-pre-line font-normal text-gray-700 dark:text-gray-400">{`${data}`}</p>
      </Card>
    </div>
  );
};

export default AbyssalCard;
