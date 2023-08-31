import React, {useState} from "react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { FaBars, FaCog, FaImages, FaEyeDropper, FaModx, FaLinode,FaDna } from 'react-icons/fa'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-modal'
// import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'
// import {jsx} from '@emotion/react'
import FileUploader from "./fileuploader"
import Augmentation from "./Augmentation"
import ModelUploader from "./ModelUploader"
Modal.setAppElement('#root')

// const loaderCSS = jsx`
//   margin-top: 25px;
//   margin-bottom: 25px;
//   display : flex;
  // `
const sidebarStyles = {
  width: '6vw',
  height: '70vw',
  backgroundColor: '#86A8E7',
  color: '#000000',
  position: "relative",
};

const menuItemStyles = {
  padding: '10px',
  
};

const customStyles = {
  content: {
    width:'60vw',
    height:'80vh',
    top: '20%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(10%, -10%)',
  },
};
function ToastModal() {
    const [model1,setModel1] =useState(false)
    const [model2,setModel2] =useState(false)
    const [model3,setModel3] =useState(false)
    const [model4,setModel4] =useState(false)
    const Programming = () =>{
      toast("Setting your Model!",{autoClose :2000,hideProgressBar:true})} 
    const Importing = () =>{
      toast("Import your Images",{autoClose :2000,hideProgressBar:true});
      setModel1(true)
      setModel2(false)
      setModel3(false)
      setModel4(false)
    } 
    const prepro = () => {
      toast("Preprocessing",{autoClose :2000,hideProgressBar:true})
      setModel1(false)
      setModel2(true)
      setModel3(false)
      setModel4(false)
    }
    const Model = () =>{
      toast("Choose Your Model",{autoClose :2000,hideProgressBar:true})
      setModel1(false)
      setModel3(true)
      setModel2(false)
      setModel4(false)
    } 
    const Train = () => {
      toast("Start training",{autoClose :2000,hideProgressBar:true})
      setModel1(false)
      setModel3(false)
      setModel4(true)
      setModel2(false)
  }

  return (
    <div>
        <Modal isOpen={model1}
        style={customStyles}>

        <FileUploader/>
        <div className="button-container">
          <button className="close" onClick={()=>{setModel1(false)}}>Close</button>
          <button className="close" onClick={()=>{setModel1(false)}}>Done</button>
        </div>

        </Modal>

      <Modal isOpen={model2}
        style={customStyles}>
          <Augmentation/>
        <div className="button-container">
        <button className="close" onClick={()=>{setModel2(false)}}>Close</button>
        <button className="close" onClick={()=>{setModel2(false)}}>Done</button>
        </div>
      </Modal>

      <Modal isOpen={model3}
        style={customStyles}>
          <ModelUploader/>
        <div className="button-container">
        <button className="close" onClick={()=>{setModel3(false)}}>Close</button>
        <button className="close" onClick={()=>{setModel3(false)}}>Done</button>
        </div>
      </Modal>

      <Modal isOpen={model4}
        style={customStyles}>
        <h2> Trainning the Model</h2>
        <p> Your model</p>
        <div className="button-container">
        <button className="close" onClick={()=>{setModel4(false)}}>Close</button>
        <button className="close" onClick={()=>{setModel4(false)}}>Done</button>
        </div>
      </Modal>
      <div className="main-content">
        <Sidebar style={sidebarStyles}>
          <Menu iconShape="square">
            <MenuItem style={menuItemStyles} icon={<FaBars />}>
              Dashboard
            </MenuItem>
            <SubMenu title="Training" icon={<FaDna />} onClick={Programming}>
              <MenuItem style={menuItemStyles} icon={<FaImages />} onClick={Importing}>Importing Data</MenuItem>
              <MenuItem style={menuItemStyles} icon={<FaEyeDropper />} onClick={prepro}>Preprocessing</MenuItem>
              <MenuItem style={menuItemStyles} icon={<FaModx />} onClick={Model}>Choose Model</MenuItem>
              <MenuItem style={menuItemStyles} icon={<FaLinode />} onClick={Train}>Training</MenuItem>
            </SubMenu>
            <SubMenu title="Settings" icon={<FaCog />}>
              <MenuItem style={menuItemStyles}>General</MenuItem>    
              <MenuItem style={menuItemStyles}>Security</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <div className="content">
          {/* Your main content goes here */}
        </div>
        <ToastContainer />
      </div>
    </div>
  )

}
export default ToastModal