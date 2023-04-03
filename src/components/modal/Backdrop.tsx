import { RenderModalBackdropProps } from 'react-overlays/cjs/Modal';

const Backdrop = (props: RenderModalBackdropProps): JSX.Element => (
  <div className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-black/50" {...props} />
);

export default Backdrop;
