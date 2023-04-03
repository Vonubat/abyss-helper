import { AwesomeButton } from 'react-awesome-button';

import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { clearAbysses, useAppDispatch } from '../../redux';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const clearHistory = () => {
    dispatch(clearAbysses());
  };

  return (
    <header className="flex h-16 w-full items-center justify-between bg-neutral-900 px-3">
      <h1 className="text-xl font-extrabold text-white sm:text-3xl md:text-5xl">EVE ABYSS HELPER</h1>
      <AwesomeButton type="danger" before={<TrashIcon />} onPress={clearHistory} className="uppercase">
        Clear history
      </AwesomeButton>
    </header>
  );
};

export default Header;
