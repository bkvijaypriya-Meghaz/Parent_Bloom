import React from 'react';
import ParentLayout from '../../layout/ParentLayout';

function profile(props)
{
    return(
        <ParentLayout{...props}>
        <div>
            <h1>PROFILE COMPONENT</h1>
        </div>
        </ParentLayout>
    )
}

export default profile