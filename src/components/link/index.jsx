import './index.css';

const Link = ({ href, kind, children }) => {
    let linkKindClass = '';
    if (kind === 'big') {
        linkKindClass = 'base-link-or-btn--big link--big';
    }

    return <a href={href} className={`link ${linkKindClass}`}>{children}</a>
}

export default Link;