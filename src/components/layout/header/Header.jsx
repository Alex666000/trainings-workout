import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				// путь по которому когда открыто приложение – если у нас
				// не главная страница, а другая то отображаем
				// стрелку назад иначе отобразим кнопку профиля
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<SlUser fill='#fff' fontSize={25} /> {/* Иконка профиля */}
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header

/*
Логика редиректа с профиля на главную и обратно
 */
