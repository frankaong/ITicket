import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

interface PasswordInterface {
    style?: React.CSSProperties;
    onClick?: ()=> void;
    placeholder?: string;
  }

export default function PasswordInput({ placeholder, style}:PasswordInterface ) {
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(true);

    return (
        <div> 
            <form>
                <label htmlFor='password'>Password</label>
                
                <div>
                    <input 
                        value={password}
                        type={visible ? "text" : "password"}
                        id='password'
                        placeholder={placeholder}
                        onChange={e => setPassword(e.target.value)}
                        style = {style}
                    />

                    <div 
                        className='p-2' 
                        onClick={() => setVisible(!visible)} 
                        style={{ cursor: "pointer" }}
                    >
                        {
                            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}
