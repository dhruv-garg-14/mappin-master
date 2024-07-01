import React from 'react'

const Routes = (props) => {

    return (
        <div className='pathAnswer'>
            <br />
            {/* <div>
                <div><strong>Source:</strong> {props.dataPoint.from}</div>
            </div>
            <br />
            <div>
                <div><strong>Destination:</strong> {props.dataPoint.to}</div>
            </div> */}
            {/* <br /> */}
            <div><strong>Path:</strong></div>
            <div style={{ display: 'flex' }}>
                {props.dataPoint.path.map((items) => (
                    <div>{items}&nbsp;&nbsp;</div>
                ))}
            </div>
            <br />  
            <div>
                <div><strong>Distance:</strong> {props.dataPoint.totalDis} m</div>
            </div>
            <br />
        </div>
    )
}

export default Routes
