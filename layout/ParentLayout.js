import Header from '../pages/header'
import Footer from '../pages/footer'

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