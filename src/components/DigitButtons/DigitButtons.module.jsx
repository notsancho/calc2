import React from 'react';
import PropTypes from 'prop-types';

const digits = [
    7, 8, 9,
    4, 5, 6,
    1, 2, 3,
    '', 0, ''
];

function DigitButtons(props) {
    return (
        <div className="wrapper-digits">
            {digits.map((index, key) => (
                <button className="btn-key" key={key} onClick={(digit) => props.func(index)} disabled={!Number.isInteger(index)}>{index}</button>
            ))}
        </div>
    );
}

DigitButtons.propTypes = {
    func: PropTypes.func
};

export default DigitButtons;