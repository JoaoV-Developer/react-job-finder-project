import React from 'react'

const DevAndEmployersCard = ({children, bg='bg-gray-100'}) => {
    return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {/* Puts the children of this component inside this div.
            This is used inside the DevsAndEmployers.jsx component.*/}
        {children}
    </div>
    )
}

export default DevAndEmployersCard