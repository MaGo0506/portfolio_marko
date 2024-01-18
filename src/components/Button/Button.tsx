import styles from './Button.module.css'

const Button = ({text}: {text: string}) => {
    return ( 
        <button className={`px-4 py-2 rounded-sm hover:text-white font-medium transition duration-200 text-sm lg:text-base ${styles.mainBtn}`}>{text}</button>
     );
}
 
export default Button;