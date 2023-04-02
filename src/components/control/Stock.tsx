import { ChangeEvent, useEffect, useState } from 'react';

import { useDebounce } from '../../hooks';
import { setStock, useAppDispatch } from '../../redux';
import { StockType } from '../../types';

type Props = {
  type: StockType;
};

const Stock = ({ type }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const [lootValue, setLootValue] = useState<string>('');
  const debouncedLootValue = useDebounce<string>(lootValue);

  const handleLootValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLootValue(e.target.value);
  };

  useEffect(() => {
    dispatch(setStock({ type, data: debouncedLootValue }));
  }, [dispatch, debouncedLootValue, type]);

  return (
    <div className="room__wrapper flex h-[450px] grow flex-col items-center border bg-white p-2">
      <div className="heading__wrapper text-center font-semibold text-black">
        <h3>{`Loot ${type}`}</h3>
      </div>
      <div className="data__wrapper w-full grow p-3 text-center text-sm text-black text-opacity-50">
        <textarea
          className="h-full w-full resize-none"
          placeholder="Type your loot here..."
          value={lootValue}
          onChange={handleLootValue}
        />
      </div>
    </div>
  );
};

export default Stock;
