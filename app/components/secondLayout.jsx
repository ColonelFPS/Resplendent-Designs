import Navbar from './Navbar'
import '../../app/globals.css'

export default function SecondLayout({ children }) {
return (
  <div>
    {children}
    <Navbar/>
  </div>
  )
}
