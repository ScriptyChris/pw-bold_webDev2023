import './index.css';

const Button = ({ kind, onClick, children }) => {
    let btnKindClass = '';
    if (kind === 'big') {
        btnKindClass = 'base-link-or-btn--big button--big';
    }

    return <button className={`button ${btnKindClass}`} onClick={onClick}>{children}</button>
}

export default Button;
