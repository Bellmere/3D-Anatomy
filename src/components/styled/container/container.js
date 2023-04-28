import './style.css';

export const Container = ({ children, full = false }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
}
