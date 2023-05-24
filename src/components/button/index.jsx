import './index.css';

const Button = ({ kind, onClick, children }) => {
    let btnKindClass = '';
    if (kind === 'big') {
        btnKindClass = 'button--big';
    }

    return <button className={`button ${btnKindClass}`} onClick={onClick}>{children}</button>
}

export default Button;
