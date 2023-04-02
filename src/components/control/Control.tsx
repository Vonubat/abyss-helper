import { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { Button } from 'flowbite-react';

import { finishAbyss, saveAbyss, startAbyss, useAppDispatch } from '../../redux';
import { humanizeTime } from '../../utils';

import Room from './Room';
import Stock from './Stock';

const Control = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    hours,
    minutes,
    seconds,
    start: startStopwatch,
    pause: pauseStopwatch,
    reset: resetStopwatch,
  } = useStopwatch({ autoStart: false });
  const [btnAction, setBtnAction] = useState<'START' | 'FINISH' | 'SAVE'>('START');

  const handleStartAbyss = () => {
    dispatch(startAbyss());
    setBtnAction('FINISH');
    startStopwatch();
  };

  const handleFinishAbyss = () => {
    dispatch(finishAbyss({ duration: humanizeTime(hours, minutes, seconds) }));
    setBtnAction('SAVE');
    pauseStopwatch();
  };

  const handleSaveAbyss = () => {
    dispatch(saveAbyss());
    setBtnAction('START');
    resetStopwatch(undefined, false);
  };

  const btnHandler = {
    START: handleStartAbyss,
    FINISH: handleFinishAbyss,
    SAVE: handleSaveAbyss,
  };

  const btnStyle = {
    START: 'success',
    FINISH: 'failure',
    SAVE: 'warning',
  };

  return (
    <div className="flex w-full flex-col items-center rounded-md bg-sky-200 px-2 pb-5 pt-2">
      <div className="control__wrapper flex w-full flex-wrap items-center justify-around gap-5 ">
        <div className="btns__wrapper flex  justify-center gap-10 rounded-md p-2">
          <Button color={btnStyle[btnAction]} onClick={btnHandler[btnAction]}>
            {btnAction}
          </Button>
        </div>
        <span className="timer__wrapper flex justify-center gap-10 p-2 text-xl font-bold">{`Total time: ${humanizeTime(
          hours,
          minutes,
          seconds,
        )}`}</span>
      </div>
      <div className="stock__wrapper flex w-full items-center p-2">
        <Stock type="Before" />
        <Stock type="After" />
      </div>
      <div className="room__wrapper flex w-full flex-wrap items-center p-2">
        <Room type="One" />
        <Room type="Two" />
        <Room type="Three" />
      </div>
    </div>
  );
};

export default Control;
