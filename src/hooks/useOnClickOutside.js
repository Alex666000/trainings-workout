import { useEffect, useRef, useState } from "react"

/**
 * Пользовательский хук для определения кликов за пределами указанного элемента
 * и вызова функции обратного вызова при клике вне этого элемента.
 *
 * @param {boolean} isInitialValue - Начальное значение состояния `isShow`.
 * @returns {Object} - Объект, содержащий ссылку (ref), состояние isShow и функцию setIsShow.
 */
export const useOnClickOutside = (isInitialValue) => {
	/**
	 * Состояние для управления видимостью компонента.
	 * @type {boolean}
	 */
	const [isShow, setIsShow] = useState(isInitialValue)

	/**
	 * Ссылка на DOM-элемент, который вызывает видимость.
	 * @type {object|null}
	 */
	const ref = useRef(null) // Привяжемся к выпадающему меню

	/**
	 * Обработчик клика вне указанного элемента.
	 *
	 * @param {MouseEvent} event - Событие клика.
	 */
	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		// Добавляем слушателя события клика для обнаружения кликов вне элемента.
		document.addEventListener("click", handleClickOutside, true)

		return () => {
			// Очищаем слушателя события при размонтировании компонента.
			document.removeEventListener("click", handleClickOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}
