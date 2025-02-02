import { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  open: boolean;
  close: () => void;
  width?: string;
  height?: string;
  borderRadius?: string;
  children: ReactNode;
}

export const Modal = ({
  open,
  close,
  width,
  height,
  borderRadius = '10px',
  children,
}: ModalProps) => (
  <ReactModal
    isOpen={open}
    onRequestClose={() => close()}
    style={{
      overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.5)',
      },
      content: {
        position: 'relative',
        margin: 0,
        padding: 0,
        inset: 0,
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
