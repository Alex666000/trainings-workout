import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import Menu from './Menu'
import styles from './Hamburger.module.scss'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger

// IoClose - крестик CgMenuRight - бургер
