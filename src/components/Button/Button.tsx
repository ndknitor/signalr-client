import { HTMLAttributes } from 'react'
import styles from './Button.module.css'
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {

}
function Button(props: ButtonProps) {
    return (
        <button {...props} className={styles.button} />
    )
}

export default Button