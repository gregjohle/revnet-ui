export default function Header({ session }) {
    let isSessionActive = (currentSession) => {
        if (!currentSession){
            return (
                <div className="wrapper-header">
                    <h1>Revere Network</h1>
                    <div className="nav-wrapper">
                        <nav>
                            <ul>
                                <li>
                                    <a href="/login">Log In</a>
                                </li>
                                <li>
                                    <a href="/signup">Sign Up</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )
        }
        else if(currentSession) {
            return (
                <div className="wrapper-header">
                    <h1>Revere Network</h1>
                </div>
            )
        }
    }

    return (
        <>
        {isSessionActive(session)}
        </>
    )
}