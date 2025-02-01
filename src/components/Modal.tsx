import { Dispatch, ReactNode, SetStateAction } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  width?: string;
  height?: string;
  borderRadius?: string;
  children: ReactNode;
}

export const Modal = ({
  open,
  setOpen,
  width,
  height,
  borderRadius = '10px',
  children,
}: ModalProps) => (
  <ReactModal
    isOpen={open}
    onRequestClose={() => setOpen(false)}
    style={{
      overlay: {
        background: 'rgba(0,0,0,0.5)',
      },
      content: {
        background: '#fff',
        width,
        height,
        borderRadius,
      },
    }}
  >
    {children}
  </ReactModal>
);
