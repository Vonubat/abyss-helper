import { ChangeEvent, useEffect, useState } from 'react';

import { useDebounce } from '../../hooks';
import { abyssSelector, setStock, useAppDispatch, useAppSelector } from '../../redux';
import { StockType } from '../../types';

type Props = {
  type: StockType;
};

const Stock = ({ type }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const { created } = useAppSelector(abyssSelector).currentAbyss;
  const [stockValue, setStockValue] = useState<string>('');
  const debouncedStockValue = useDebounce<string>(stockValue);

  const handleStockValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setStockValue(e.target.value);
  };

  useEffect(() => {
    dispatch(setStock({ type, data: debouncedStockValue }));
  }, [dispatch, debouncedStockValue, type]);

  useEffect(() => {
    if (!created) {
      setStockValue('');
    }
  }, [created]);

  return (
    <div className="flex h-[450px] grow flex-col items-center rounded-md bg-black bg-opacity-50 p-2">
      <div className="heading__wrapper text-center font-semibold text-black">
        <h3 className="uppercase text-white">{`Stock ${type}`}</h3>
      </div>
      <div className="data__wrapper w-full grow p-3 text-center text-sm text-black text-opacity-50">
        <textarea
          className="h-full w-full resize-none p-3"
          placeholder="Type your stock here..."
          value={stockValue}
          onChange={handleStockValue}
        />
      </div>
    </div>
  );
};

export default Stock;
