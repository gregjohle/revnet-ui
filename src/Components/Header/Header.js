export default function Header(props) {
    const { session } = props

    let isSessionActive = (currentSession) => {
        if (currentSession){
            return (
                <div className="wrapper-header">
                    <h1>Revere Network</h1>
                    <div className="nav-wrapper">
                        <nav>
                            <ul>
                                <li>

                                </li>
                                <li>
                                    
                                </li>
                            </ul>
                        </nav>
                        
                    </div>
                </div>
            )
        }
        else if(!currentSession) {
            return (
                <div>
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