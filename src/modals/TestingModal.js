import React from "react";
import styled from "styled-components";

const Blur = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  position: relative;
  min-width: 40vw;
  min-height: 80vh;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  border-radius: 0.8em;
  padding: 5px 20px;
  background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding-bottom: 2px; */
  border-bottom: 1px solid grey;
`;

const Content = styled.div`
  overflow: scroll;
  flex-grow: 1;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: auto;
`;

const ExitButton = styled.div`
  margin-left: auto;
  cursor: pointer;
  color: white;
`;

const ModalTitle = styled.h3`
  color: white;
`;

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <Blur onClick={closeModal}>
      <Wrapper onClick={stopPropagation}>
        <Header>
          <ModalTitle> Update Info</ModalTitle>
          <ExitButton onClick={closeModal}>X</ExitButton>
        </Header>

        <Content>
          <InputDiv>
            <StyledInputTitle>Salon Name</StyledInputTitle>
            <StyledInput
              type="text"
              placeholder="Enter new name"
              name="username"
            />
          </InputDiv>
          <InputDiv>
            <StyledInputTitle>Address</StyledInputTitle>
            <StyledInput
              type="text"
              placeholder="Enter new address"
              name="username"
            />
          </InputDiv>
          <InputDiv>
            <StyledInputTitle>Email</StyledInputTitle>
            <StyledInput
              type="text"
              placeholder="Enter new email address"
              name="username"
            />
          </InputDiv>
          <InputDiv>
            <StyledInputTitle>Phone</StyledInputTitle>
            <StyledInput
              type="text"
              placeholder="Enter new phone number"
              name="username"
            />
          </InputDiv>
          <InputDiv>
            <StyledInputTitle>Image</StyledInputTitle>
            <StyledInput
              type="file"
              placeholder="Enter new image"
              name="username"
            />
          </InputDiv>
        </Content>

        {/* {footer ? <Footer>{footer}</Footer> : null} */}
      </Wrapper>
    </Blur>
  );
};

export default Modal;

const InputDiv = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const StyledInputTitle = styled.label`
  color: white;
  display: block;
  font-size: 18px;
  line-height: 1;
`;

const StyledInput = styled.input`
  height: 25px;
  width: 200px;
  font-size: 15px;
  letter-spacing: 0.3px;
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: none;
`;
