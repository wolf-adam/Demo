import './Button.css';

const Button = ({
    className,
    children,
    disabled,
    inverted,
    onClick,
}) => {
    const classNames = ['custom-button'];

    // TODO: Do better property adjusting
    if (inverted) classNames.push('inverted');
    if (className) classNames.push(className);
    if (disabled) classNames.push('disabled');

    return (
        <div className={classNames.join(' ')} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;
