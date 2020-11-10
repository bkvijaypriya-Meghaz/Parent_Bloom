import React from 'react';
import Header from './header';
import Footer from '../footer';

function profile(props)
{
    return(
        <div>
            <Header></Header>
                <div style={{height:'750px', textAlign:'center'}} >
                    <div style={{paddingTop:'200px'}}>
                        <h1>PROFILE COMPONENT</h1>
                    </div>
                </div>
            <Footer></Footer>
       </div>
    )
}

export default profile