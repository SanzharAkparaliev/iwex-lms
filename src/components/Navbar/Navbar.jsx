
import { NavLink } from 'react-router-dom'
import styles from './navbar.modulle.css'
const Navbar = () => {


  return (
    <div className={styles.conteiner}>
    <div className={styles.blok}>
        <NavLink className={styles.logo} to='/'> I<label className={styles.label}>WEX</label></NavLink>
         <nav className={styles.contlink}>
<NavLink to='/' className={styles.admins}>
    Admins
</NavLink>
<NavLink to='/login' className={styles.join}>
    sign in 
</NavLink>

        </nav>
    </div>
    </div>
  )
}


  

export default Navbar