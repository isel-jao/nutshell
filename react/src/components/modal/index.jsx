import React, { useRef, useEffect } from "react";
import styled from "styled-components";
const Dialog = styled.dialog`
  margin: auto;
  border: none;
  padding: 1rem;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Modal = ({ open, children, ...props }) => {
  const dialogRef = useRef(null);

  const oponModal = () => {
    try {
      dialogRef.current.showModal();
    } catch (e) {}
  };

  const closeModal = () => {
    dialogRef.current.close();
  };

  useEffect(() => {
    open ? oponModal() : closeModal();
  }, [open]);

  return (
    <Dialog ref={dialogRef} {...props}>
      {children}
    </Dialog>
  );
};

export default Modal;
