import './Navigation.css'

const Navigation = ({onRouteChange, signedIn}) => {
    if(signedIn === true)
    return(
        <nav className="navbar" style={{display: 'flex', justifyContent: 'right'}}>
        <p className="f3 link dim black underline pa3 pointer" onClick={() => {onRouteChange('signOut')}}>Sign Out</p>
        </nav>
    )
    else if(signedIn === false)
    {
        return(
            <nav className="navbar" style={{display: 'flex', justifyContent: 'right'}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={() => {onRouteChange('signIn')}}>Sign In</p>
            <p className="f3 link dim black underline pa3 pointer" onClick={() => {onRouteChange('register')}}>Register</p>
            </nav>
        );
    }
}

export default Navigation;