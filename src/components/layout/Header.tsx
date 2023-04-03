import { AwesomeButton } from 'react-awesome-button';

import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { HOMEPAGE } from '../../constants';
import { setModalClearHistory, useAppDispatch } from '../../redux';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const openModal = (): void => {
    dispatch(setModalClearHistory(true));
  };

  return (
    <header className="flex h-16 w-full items-center justify-between bg-neutral-900 px-3">
      <a href={HOMEPAGE} target="_blank" rel="noopener noreferrer">
        <h1 className="select-none text-xl font-extrabold text-white sm:text-3xl md:text-5xl">EVE ABYSS HELPER</h1>
      </a>
      <AwesomeButton type="danger" before={<TrashIcon />} onPress={openModal} className="uppercase">
        Clear history
      </AwesomeButton>
    </header>
  );
};

export default Header;
