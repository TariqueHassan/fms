import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {Button} from 'evergreen-ui';
import { UserContext } from '../../UserContext';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const col = {
    color:"green",
}
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement')

export function ModalR(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const {submitStatus,setSubmitStatus} = useContext(UserContext);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'green';
  }

  function closeModal(){
    setSubmitStatus(false);
    setIsOpen(false);
  }
  function submitAndClose(){
    setSubmitStatus(true);
    setIsOpen(false);
  }

    return (
      <div>
        {/* <Button onClick={openModal}>Open Modal</Button> */}
        <Button appearance="primary" height={40} width={300} onClick={openModal}>Turn in</Button>
        {/* <Button appearance="primary" height={40} width={300}  onClick={() => { props.setSubmitStatus(props.submitStatus ? false : true);  }}>{props.statusResult}</Button> */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Turn in your work?</h2>
          <div className="mb-5 mt-3">1 Attachment will be submitted for "Mid 1 - Lab Exam"</div>
          <div className="d-flex flex-row-reverse ">
            <Button style={{color:"green"}} onClick={submitAndClose}>Turn in</Button>
            <Button className="mx-2" onClick={closeModal} intent="dark">Cancel</Button>
          </div>
        </Modal>
      </div>
    );
}
