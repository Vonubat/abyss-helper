import { MouseEvent } from 'react';
import { Button } from 'flowbite-react';

import { abyssSelector, setRoom, useAppDispatch, useAppSelector } from '../../redux';
import { RoomStatus, RoomType } from '../../types';

type Props = {
  type: RoomType;
};

const Room = ({ type }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const roomKey: `room${RoomType}` = `room${type}`;
  const { [roomKey]: room } = useAppSelector(abyssSelector).currentAbyss;

  const handleRoomStatus = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    dispatch(setRoom({ type, status: e.currentTarget.value as RoomStatus }));
  };

  return (
    <div className="flex grow flex-col items-center border bg-white p-2">
      <div className="heading__wrapper text-center font-semibold text-black">
        <h3>{`Room ${type}`}</h3>
      </div>
      <div className="data__wrapper flex w-full grow justify-center gap-5 p-3 text-center text-sm text-black text-opacity-50">
        <Button outline={room !== 'All'} value="All" onClick={handleRoomStatus}>
          All
        </Button>
        <Button outline={room !== 'Partially'} value="Partially" onClick={handleRoomStatus}>
          Partially
        </Button>
      </div>
    </div>
  );
};

export default Room;
