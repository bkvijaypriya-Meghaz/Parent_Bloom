import Header from '../pages/parent/header'
import Footer from '../pages/parent/footer'

const ParentLayout = ({children}) => {
    
    return(
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>

       </div>
    )
}

export default ParentLayout