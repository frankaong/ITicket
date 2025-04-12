import React, { useState } from 'react';

interface TextFieldInputInterface {
    style?: React.CSSProperties;
    placeholder?: string;
    type?: string;
    label?: string;
  }

export default function TextFieldInput({ placeholder, style, type, label}:TextFieldInputInterface ) {
    return (
        <form>
            {label}

            <input 
                type= {type}
                placeholder = {placeholder}
                style = {style}
            />
        </form>
        
                       
    );
}
