import { AwesomeButton } from 'react-awesome-button';
import { toast } from 'react-toastify';

import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg';
import { SysMsg } from '../../constants';
import { Abyss, RoomStatus } from '../../types';
import { getCreationTime } from '../../utils';

type Props = { abyss: Abyss };

const Card = ({ abyss }: Props): JSX.Element => {
  const { created, duration, stockBefore, stockAfter, roomOne, roomTwo, roomThree } = abyss;

  const handleRoomStatus = (): RoomStatus => {
    const isAllRoomCleared = roomOne === 'All' && roomTwo === 'All' && roomThree === 'All';

    if (isAllRoomCleared) {
      return 'All';
    }

    return 'Partially';
  };

  const handleCopyStockBefore = (): void => {
    if (stockBefore) {
      navigator.clipboard.writeText(stockBefore);
    }

    toast.success(SysMsg.stockBefore);
  };

  const handleCopyStockAfter = (): void => {
    if (stockAfter) {
      navigator.clipboard.writeText(stockAfter);
    }

    toast.success(SysMsg.stockAfter);
  };

  return (
    <div className="max-h-[350px] max-w-lg rounded-md bg-black bg-opacity-50 p-2">
      <h2 className="whitespace-nowrap text-2xl font-bold tracking-tight text-white">
        Created: {getCreationTime(created!)}
      </h2>
      <h5 className="text-xl font-bold tracking-tight text-white">Duration: {duration}</h5>
      <div className="flex flex-col gap-3">
        <h5 className="text-xl font-bold tracking-tight text-white">Rooms Status: {handleRoomStatus()}</h5>
      </div>
      <div className="stock__wrapper flex justify-center gap-3 p-2">
        <AwesomeButton before={<CopyIcon />} className="uppercase" onPress={handleCopyStockBefore}>
          Stock before
        </AwesomeButton>
        <AwesomeButton before={<CopyIcon />} className="uppercase" onPress={handleCopyStockAfter}>
          Stock After
        </AwesomeButton>
      </div>
    </div>
  );
};

export default Card;
