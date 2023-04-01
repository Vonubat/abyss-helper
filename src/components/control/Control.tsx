import { useAppDispatch } from '../../redux';

import Room from './Room';

const Control = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className="control__wrapper flex w-[100vw] items-center rounded-md bg-white p-2">
      <Room type="One" />
      <Room type="Two" />
      <Room type="Three" />
    </div>
  );
};

export default Control;
