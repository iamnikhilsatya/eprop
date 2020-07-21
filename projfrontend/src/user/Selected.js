import React from 'react'
import Base from '../core/Base'
import Image from '../images/photologo.jpg'
import './Photosmin.css'
import {Button,Modal,Form,ModalBody,Row,Col,Container} from 'reactstrap'
const Photos =  ()=>    {
  const [showResults, setShowResults] = React.useState(false)
 
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const closeIt = () =>setModal(false)

  const onshow = () =>{ 
      
      setShowResults(true)
      const show = [showResults]
       console.log(show)

  
  
  }
  return (
      <Base title="user Dashboard Page">
<div className="row">
          
              <div className="col">
                  <img
          className="small rounded imageBorder"
          src={Image}
          onClick={toggle}
          alt="no image"
          style={{maxHeight:"300px" ,
       maxWidth:"500px",
       width:"350px",
      }}
         />
             <Modal isOpen={modal}  className="mt-2" toggle={toggle} style={{
          }}>
          <div class="modal-header bg-warning"            >
      <h3 className="modal-title" id="exampleModalLabel"
      
      >Photos Title</h3>
      <button type="button" class="close" onClick={closeIt} data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
         
        <ModalBody>
              <Row className="mr-2 ml-2"
              onClick={onshow}
              >
                   <img
          className="small"
          src={Image}
          alt="no image"
          style={{maxHeight:"500px" ,
       maxWidth:"500px",
       height:"500px",
       width:"500px"
      }}
         />
                     
              </Row>
             

              <Container className="text-center pt-3">
                  <Button className="bg-warning text-dark">DESELECT</Button>
</Container>
</ModalBody>
          </Modal>
          </div>
          
         
          
      </div>
      
          </Base>
  )
}
export default Photos;
