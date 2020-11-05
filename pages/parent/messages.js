import React from 'react';
import ParentLayout from '../../layout/ParentLayout';

function messages(props)
{
    return(
        <ParentLayout{...props}>
        <div>
            <h1>MESSAGES COMPONENT</h1>
        </div>
        </ParentLayout>
    )
}

export default messages