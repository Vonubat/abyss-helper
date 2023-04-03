import { AwesomeButton } from 'react-awesome-button';

import { abyssSelector, setRoom, useAppDispatch, useAppSelector } from '../../redux';
import { RoomType } from '../../types';

type Props = {
  type: RoomType;
};

const Room = ({ type }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const roomKey: `room${RoomType}` = `room${type}`;
  const { [roomKey]: room } = useAppSelector(abyssSelector).currentAbyss;

  return (
    <div className="flex grow flex-col items-center rounded-md bg-black bg-opacity-50 p-2">
      <div className="heading__wrapper text-center font-semibold text-black">
        <h3 className="uppercase text-white">{`Room ${type}`}</h3>
      </div>
      <div className="data__wrapper flex w-[200px] grow justify-center gap-5 p-3 text-center text-sm text-black text-opacity-50">
        <AwesomeButton
          type={room === 'All' ? 'primary' : 'secondary'}
          onPress={() => dispatch(setRoom({ type, status: 'All' }))}
        >
          All
        </AwesomeButton>
        <AwesomeButton
          type={room === 'Partially' ? 'primary' : 'secondary'}
          onPress={() => dispatch(setRoom({ type, status: 'Partially' }))}
        >
          Partially
        </AwesomeButton>
      </div>
    </div>
  );
};

export default Room;
