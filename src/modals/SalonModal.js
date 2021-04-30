import React, { useState } from "react";
// Importing categorys store
import salonAuth from "../stores/salonAuth";
import { observer } from "mobx-react";

// import Modal from "react-modal";
import {
  CreateButtonStyled,
  InputDiv,
  StyledInputTitle,
  StyledInput,
  Blur,
  Wrapper,
  Header,
  Content,
  ExitButton,
  ModalTitle,
  // ModalInput,
  // ModalInputDiv,
  // ModalLabels,
  // ClosingModalX,
} from "../styles";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     height: "450px",
//     overflow: "scroll",
//   },
// };

const SalonModal = ({ oldSalon, isOpen, closeModal }) => {
  // const { storeId } = useParams();

  const [salon, setSalon] = useState(
    oldSalon ?? {
      username: "",
      address: "",
      email: "",
      phone: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setSalon({
      ...salon,
      [event.target.name]:
        event.target.name === "image"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    salonAuth.updateSalon(salon);
    closeModal();
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      {isOpen ? (
        <Blur onClick={closeModal}>
          <Wrapper onClick={stopPropagation}>
            <Header>
              <ModalTitle> Update Info</ModalTitle>
              <ExitButton onClick={closeModal}>X</ExitButton>
            </Header>

            <Content>
              <form onSubmit={handleSubmit}>
                <InputDiv>
                  <StyledInputTitle>Salon Name</StyledInputTitle>
                  <StyledInput
                    type="text"
                    placeholder="Enter new name"
                    name="username"
                    value={salon.username}
                    onChange={handleChange}
                  />
                </InputDiv>
                <InputDiv>
                  <StyledInputTitle>Address</StyledInputTitle>
                  <StyledInput
                    type="text"
                    placeholder="Enter new address"
                    name="address"
                    value={salon.address}
                    onChange={handleChange}
                  />
                </InputDiv>
                <InputDiv>
                  <StyledInputTitle>Email</StyledInputTitle>
                  <StyledInput
                    type="text"
                    placeholder="Enter new email address"
                    name="email"
                    value={salon.email}
                    onChange={handleChange}
                  />
                </InputDiv>
                <InputDiv>
                  <StyledInputTitle>Phone</StyledInputTitle>
                  <StyledInput
                    type="text"
                    placeholder="Enter new phone number"
                    name="phone"
                    value={salon.phone}
                    onChange={handleChange}
                  />
                </InputDiv>
                <InputDiv>
                  <StyledInputTitle>Image</StyledInputTitle>
                  <StyledInput
                    type="file"
                    placeholder="Enter new image"
                    name="image"
                    // value={salon.image}
                    onChange={handleChange}
                  />
                </InputDiv>
                <CreateButtonStyled
                  className="btn float-right"
                  onSubmit={handleSubmit}
                >
                  Update
                </CreateButtonStyled>
              </form>
            </Content>
          </Wrapper>
        </Blur>
      ) : null}
    </>
  );
};

export default observer(SalonModal);

// <Modal
//   isOpen={isOpen}
//   onRequestClose={closeModal}
//   style={customStyles}
//   ariaHideApp={false}
//   contentLabel="Example Modal"
// >
//   <form onSubmit={handleSubmit}>
//     <ClosingModalX onClick={closeModal} />
//     <div>
//       <div>
//         <ModalLabels>Userame :</ModalLabels>
//         <ModalInputDiv>
//           <ModalInput
//             type="text"
//             placeholder="Enter salon name"
//             name="username"
//             value={salon.username}
//             onChange={handleChange}
//           />
//         </ModalInputDiv>
//       </div>
//       <div>
//         <ModalLabels> Address :</ModalLabels>
//         <ModalInputDiv>
//           <ModalInput
//             type="text"
//             placeholder="Enter salon address"
//             name="address"
//             value={salon.address}
//             onChange={handleChange}
//           />
//         </ModalInputDiv>
//       </div>
//       <div>
//         <ModalLabels> Email :</ModalLabels>
//         <ModalInputDiv>
//           <ModalInput
//             type="text"
//             placeholder="Enter salon email"
//             name="email"
//             value={salon.email}
//             onChange={handleChange}
//           />
//         </ModalInputDiv>
//       </div>
//       <div>
//         <ModalLabels> Phone :</ModalLabels>
//         <ModalInputDiv>
//           <ModalInput
//             type="number"
//             placeholder="Enter salon phone number"
//             name="phone"
//             value={salon.phone}
//             onChange={handleChange}
//           />
//         </ModalInputDiv>
//       </div>
//       <div>
//         <ModalLabels> Image :</ModalLabels>
//         <ModalInputDiv>
//           <ModalInput
//             type="file"
//             placeholder="Select image"
//             name="image"
//             // value={salon.image}
//             onChange={handleChange}
//           />
//         </ModalInputDiv>
//       </div>
//     </div>
//     <CreateButtonStyled
//       className="btn float-right"
//       onSubmit={handleSubmit}
//     >
//       Update
//     </CreateButtonStyled>
//   </form>
// </Modal>
