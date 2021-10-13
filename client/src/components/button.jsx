import styles from "../styles/button.module.css";


const Button = ({ text }) => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button} formNoValidate>
                {text}
            </button>
        </div>
    );
};

export default Button;
