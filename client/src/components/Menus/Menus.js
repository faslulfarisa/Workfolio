import React from 'react'
import './Menus.css'
import {FcAbout, FcBusinessContact, FcHome, FcPortraitMode, FcVideoProjector} from 'react-icons/fc'
const Menus = ({toggle}) => {
  return (
    <>
        {toggle?(
            
                <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-link'>
                            <FcHome/>
                            Home
                        </div>
                        <div className='nav-link'>
                            <FcAbout/>
                            About
                        </div>
                        <div className='nav-link'>
                            <FcPortraitMode/>
                            Work Experience
                        </div>
                        <div className='nav-link'>
                            <FcVideoProjector/>
                            Projects
                        </div>
                        <div className='nav-link'>
                            <FcBusinessContact/>
                            Contact
                        </div>
                    </div>
                </div>
            
        ):(
            <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <FcHome/>
                </div>
                <div className='nav-link'>
                    <FcAbout/>
                </div>
                <div className='nav-link'>
                    <FcPortraitMode/>
                </div>
                <div className='nav-link'>
                    <FcVideoProjector/>
                </div>
                <div className='nav-link'>
                    <FcBusinessContact/>
                </div>
            </div>
        </div>

        )}
    </>
   
  )
}

export default Menus