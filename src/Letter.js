import React from 'react'
//import PropTypes from 'prop-types'
import './Letter.css'
const HIDDEN_SYMBOL = '❓'
const Letter = ({ letter, checked, onClick }) => (
    <span className={`letter ${checked}`} onClick={() => onClick(letter)}>
        <span className="symbol">
           
        {checked === 'hidden' ? HIDDEN_SYMBOL : letter}
        </span>
    </span>
)

export default Letter