import { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';

import { abyssalSelector, startAbyssal, useAppDispatch, useAppSelector } from '../../redux';

import Room from './Room';

const Control = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { roomOne, roomThree } = useAppSelector(abyssalSelector);
  const [btnAction, setBtnAction] = useState<'Start the Abyssal' | 'Save the result'>('Start the Abyssal');
  const [isBtnDisabled, setBtnDisabled] = useState<boolean>(false);

  const handleStartAbyssal = () => {
    dispatch(startAbyssal());
  };

  const handleSaveResult = () => {
    console.log('Save');
  };

  useEffect(() => {
    if (roomOne.start) {
      setBtnDisabled(true);
    }

    if (roomThree.end) {
      setBtnDisabled(false);
      setBtnAction('Save the result');
    }
  }, [roomOne.start, roomThree.end]);

  return (
    <div className="flex w-[100vw] flex-col items-center rounded-md bg-sky-200 px-2 pb-5 pt-2">
      <div className="control__wrapper flex w-[100vw] flex-wrap items-center justify-around gap-5 ">
        <div className="btns__wrapper flex  justify-center gap-10 rounded-md p-2">
          <Button
            disabled={isBtnDisabled}
            color={btnAction === 'Start the Abyssal' ? 'success' : 'warning'}
            onClick={btnAction === 'Start the Abyssal' ? handleStartAbyssal : handleSaveResult}
          >
            {btnAction}
          </Button>
        </div>
        <span className="timer__wrapper flex justify-center gap-10 p-2 text-xl font-bold">Timer: </span>
      </div>
      <div className="room__wrapper flex w-[100vw] items-center  p-2">
        <Room roomType="One" />
        <Room roomType="Two" />
        <Room roomType="Three" />
      </div>
    </div>
  );
};

export default Control;
