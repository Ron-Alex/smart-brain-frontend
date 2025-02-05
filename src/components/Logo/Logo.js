import { Tilt } from 'react-tilt';
import Blogo from './logo.png'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Logo = () => {
    return(
        <div className="ma4 mt0">
        <Tilt  className='bg-light-yellow br2' options={defaultOptions} style={{ 
			height: 250, 
			width: 250,
			background: 'linear-gradient(90deg, hsla(50, 90%, 88%, 1) 0%, hsla(335, 93%, 68%, 1) 50%, hsla(252, 89%, 78%, 1) 100%)'
			}}>
            <div className='f2'><img alt='logo' src={Blogo} style={{paddingTop: '5px'}}/> </div>
        </Tilt>
        </div>
    );
}

export default Logo;