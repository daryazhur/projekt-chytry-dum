import React, { useState } from 'react'
import onUrl from '../../images/light-on.svg'
import offUrl from '../../images/light-off.svg'


export const Light = ({ name, state }) => {
    const [jeZapnuta, setJeZapnuta] = useState(state)
    
    const toggleLight = () => {
        setJeZapnuta((prevState) => (prevState === 'on' ? 'off' : 'on'))
    }

    return(
        <>
            <div className='light' onClick={toggleLight} >
                <div className="light__icon">
                    <img src={jeZapnuta === 'on' ? onUrl : offUrl}/>
                </div>
                <div className="light__name">
                    {name}
                </div>
            </div>
        </>
    )
}