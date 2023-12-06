import styles from './Button.module.css';

const Button = ({
    className,
    children,
    disabled,
    inverted,
    onClick,
}) => {
    const classNames = [styles.custom];

    // Alternative solution: 
    // - use `classnames` package for +18.8 KB 
    if (inverted) classNames.push(styles.inverted);
    if (disabled) classNames.push(styles.disabled);
    if (className) classNames.push(className);

    return (
        <div className={classNames.join(' ')} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;
