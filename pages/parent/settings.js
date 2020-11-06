import React from 'react';
import ParentLayout from '../../layout/ParentLayout';

function settings(props)
{
    return(
        <ParentLayout{...props}>
       <div>
           <h1>SETTINGS COMPONENT</h1>
       </div>
       </ParentLayout>
    )
}

export default settings

