import { InputHTMLAttributes } from "react"
import styles from './TextInput.module.css'
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

}
function TextInput(props: TextInputProps) {
    return (
        <input type="text" {...props} className={`${styles.input} ${props.className}`} />
    )
}

export default TextInput