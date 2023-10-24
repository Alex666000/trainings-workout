import { IoMdArrowBack } from 'react-icons/io'
import { useAuth } from '../../../hooks/useAuth.js'
import Hamburger from '../hamburger/Hamburger.jsx'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	/* TODO: React router useHistory */

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button>
				<IoMdArrowBack />
			</button>
			{/* User profile */}
			<Hamburger />
		</header>
	)
}

export default Header
