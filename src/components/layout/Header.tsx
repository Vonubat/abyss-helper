import { Button } from 'flowbite-react';

import { clearAbysses, useAppDispatch } from '../../redux';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const clearHistory = () => {
    dispatch(clearAbysses());
  };

  return (
    <header className="flex h-16 w-full items-center justify-around bg-slate-100">
      <span>Abyss Helper</span>
      <Button color="failure" onClick={clearHistory}>
        Clear history
      </Button>
    </header>
  );
};

export default Header;
