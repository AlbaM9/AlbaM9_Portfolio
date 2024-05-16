import React from 'react'
import "../scss/components/Skill.scss";

function Skill({ name, percentage }) {
    return (
        <div className='skillStyle'>
            <div className='nameBar'>
                <span>{name}</span>
                <div
                    className='barFill'
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className='Percentage'>
                {percentage}%
            </div>
        </div>
    )
}

export default Skill