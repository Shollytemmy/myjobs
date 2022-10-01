
import Footer from '../Organisms/Footer/Footer'
import { NavLogics } from '../Organisms/NavBar/NavLogics'

const PageTemplate = ({children}) => {

  return (
<div>
    <NavLogics/>
    <main>{children}</main>
    <Footer/>
</div>
  )
}

export default PageTemplate