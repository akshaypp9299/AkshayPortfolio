import React from 'react'
import { LinkedIn, GitHub, ContactsOutlined, MailOutlined } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const DrawerLinks = () => {

    return (
        <section className='p-3 drawer' >
            <div className='my-4' style={{ cursor: "pointer" }}>
                <Tooltip title="LinkedIn" placement='right'>
                    <a href='https://www.linkedin.com/in/akshay-polshettiwar/' target='_blank' rel='noopener noreferer' style={{ color: 'white' }}>
                        <LinkedIn fontSize="medium" />
                    </a>
                </Tooltip>
            </div>
            <div className='my-4' style={{ cursor: "pointer" }}>
                <Tooltip title="Github" placement='right'>
                    <a href='https://github.com/akshaypp9299/' target='_blank' rel='noopener noreferer' style={{ color: 'white' }}>
                        <GitHub fontSize="medium" />
                    </a>
                </Tooltip>
            </div>
            <div className='my-4' style={{ cursor: "pointer" }}>
                <Tooltip title="Contact" placement='right'>
                    <a href='mailto:polshettiwarakshay@gmail.com' rel='noopener noreferer' style={{ color: 'white' }}>
                        <ContactsOutlined fontSize="medium" />
                    </a>
                </Tooltip>
            </div>
            <div className='my-4' style={{ cursor: "pointer" }}>
                <Tooltip title="Resume" placement='right'>
                    <a href='https://www.linkedin.com/in/akshay-polshettiwar/' target='_blank' rel='noopener noreferer' style={{ color: 'white' }}>
                        <MailOutlined fontSize="medium" />
                    </a>
                </Tooltip>
            </div>
        </section >
    )

}

export default DrawerLinks