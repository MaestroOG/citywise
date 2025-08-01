const Container = ({ children, className }) => {
    return (
        <div className={`px-4 py-3 ${className ?? className}`}>{children}</div>
    )
}

export default Container