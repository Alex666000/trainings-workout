import Header from "./header/Header"
import cn from "clsx"
import styles from "./Layout.module.scss"

const Layout = ({ children, bgImage, heading = "", backLink = "/" }) => {
	return (
		<section
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading // если есть текст
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />

			{heading && <h1 className={styles.heading}>{heading}</h1>}

			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout

/*
heading - надпись на фоне
backLink - по дефолту на главную страницу, прокинем в Хедер
 */
