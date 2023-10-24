import styles from "./Header.module.scss"
import { useAuth } from "../../../hooks/useAuth.js"
import Hamburger from "../hamburger/Hamburger.jsx"

const Header = ({ backLink }) => {
	/* TODO: React router useHistory */

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button>FiArrowLeft</button>
			{/* User profile */}
			<Hamburger />
		</header>
	)
}

export default Header
