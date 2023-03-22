export function Section({title, children}){
    return(
        <div className="section">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    )

}