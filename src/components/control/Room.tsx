import { Button } from 'flowbite-react';

import { useAppDispatch } from '../../redux';

type Props = {
  type: 'One' | 'Two' | 'Three';
};

const Room = ({ type }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className="room__wrapper flex h-[450px] grow flex-col items-center border bg-white p-2">
      <div className="heading__wrapper text-center font-semibold text-black">
        <h3>{`Room ${type}`}</h3>
      </div>
      <div className="data__wrapper w-full grow p-3 text-center text-sm text-black text-opacity-50">
        <textarea className="h-full w-full resize-none" />
      </div>
      <Button type="button">Finish the room</Button>
    </div>
  );
};

export default Room;
