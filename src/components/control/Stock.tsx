import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from 'flowbite-react';

import { abyssSelector, finishRoom, useAppDispatch, useAppSelector } from '../../redux';
import { RoomsType } from '../../types';

type Props = {
  roomType: RoomsType;
};

const Stock = ({ roomType }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const roomKey: `room${RoomsType}` = `room${roomType}`;
  const { [roomKey]: room } = useAppSelector(abyssSelector);
  const [isElemDisabled, setElemDisabled] = useState<boolean>(true);
  const [lootValue, setLootValue] = useState<string>('');

  const handleLootValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLootValue(e.target.value);
  };

  const handleFinishRoom = () => {
    dispatch(finishRoom({ roomType, data: lootValue }));
  };

  useEffect(() => {
    if (!room.start) {
      setLootValue('');
    }

    if (room.start) {
      setElemDisabled(false);
    }

    if (room.end) {
      setElemDisabled(true);
    }
  }, [room.end, room.start]);

  return (
    <div className="room__wrapper flex h-[450px] grow flex-col items-center border bg-white p-2">
      <div className="heading__wrapper text-center font-semibold text-black">
        <h3>{`Room ${roomType}`}</h3>
      </div>
      <div className="data__wrapper w-full grow p-3 text-center text-sm text-black text-opacity-50">
        <textarea
          className={`h-full w-full resize-none ${isElemDisabled && 'opacity-50'}`}
          placeholder="Type your loot here..."
          value={lootValue}
          onChange={handleLootValue}
          disabled={isElemDisabled}
        />
      </div>
      <Button disabled={isElemDisabled} type="button" onClick={handleFinishRoom}>
        Finish the room
      </Button>
    </div>
  );
};

export default Stock;
