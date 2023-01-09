export default function Header({session}) {
    let isSessionActive = () => {
        if (session){
            return (
                <div>
                    <img/>
                    <h1></h1>
                    <div>
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
        else if(!session) {
            return (
                <div>
                    <img/>
                    <h1></h1>
                </div>
            )
        }
    }

}