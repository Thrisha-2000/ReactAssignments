import React from 'react'


const heading = {
    color: 'yellow',
    fontSize: '72px'

}

function Inline() {

    return (
        <div>
            <div style={heading}>
                Inline
            </div>
            <h2 className='error'>Error in Inline</h2>
            {/* <h2 className={styles.success}>Success</h2> */}
        </div>
    )
}

export default Inline
