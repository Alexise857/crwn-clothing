import React, {Component} from 'react';

import './form-input.styles.scss'

const FormInput = ({handleChange, lable, ...otherProps}) => (
    <div className="group">
        <input type="text" className="form-input" onChange={handleChange} {...otherProps}/>
        {
            lable ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {lable}
                </label>)
                : null
        }
    </div>
)
export default FormInput
