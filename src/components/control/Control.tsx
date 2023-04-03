import { useEffect, useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { useStopwatch } from 'react-timer-hook';

import { abyssSelector, finishAbyss, saveAbyss, startAbyss, useAppDispatch, useAppSelector } from '../../redux';
import { humanizeTime } from '../../utils';

import Room from './Room';
import Stock from './Stock';

const Control = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { created } = useAppSelector(abyssSelector).currentAbyss;
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
  };

  useEffect(() => {
    if (!created) {
      setBtnAction('START');
      resetStopwatch(undefined, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [created]);

  const btnHandler = {
    START: handleStartAbyss,
    FINISH: handleFinishAbyss,
    SAVE: handleSaveAbyss,
  };

  const btnStyle = {
    START: 'secondary',
    FINISH: 'primary',
    SAVE: 'danger',
  };

  return (
    <div className="flex w-[95vw] flex-col items-center rounded-md bg-white bg-opacity-20 p-5">
      <div className="control__wrapper flex w-[350px] flex-wrap items-center justify-center gap-5 rounded-md bg-black bg-opacity-50 p-2">
        <div className="btns__wrapper flex justify-center gap-10 rounded-md p-2">
          <AwesomeButton type={btnStyle[btnAction]} onPress={btnHandler[btnAction]}>
            {btnAction}
          </AwesomeButton>
        </div>
        <div className="timer__wrapper flex  w-[210px] justify-center gap-1 text-xl font-bold">
          <span className="uppercase text-white">Total time: </span>
          <span className="uppercase text-red-700">{humanizeTime(hours, minutes, seconds)}</span>
        </div>
      </div>
      <div className="stock__wrapper flex w-full flex-wrap items-center gap-2 p-2">
        <Stock type="Before" />
        <Stock type="After" />
      </div>
      <div className="room__wrapper flex w-full flex-wrap items-center gap-2 p-2">
        <Room type="One" />
        <Room type="Two" />
        <Room type="Three" />
      </div>
    </div>
  );
};

export default Control;
