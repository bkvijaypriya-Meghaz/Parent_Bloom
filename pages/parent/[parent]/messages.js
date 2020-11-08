import React from 'react';
import Header from './header';
import Footer from '../footer';
function messages(props)
{
    return(
        <div>
            <Header></Header>
                <div style={{height:'750px', textAlign:'center'}} >
                    <div style={{paddingTop:'200px'}}>
                        <h1>MESSAGES COMPONENT</h1>
                    </div>
                </div>
            <Footer></Footer>
       </div>
    )
}

export default messages