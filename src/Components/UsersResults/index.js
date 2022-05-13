import React, { useState, useContext } from 'react'

import { UsersContext } from '../../contexts/users'

import './style.css'

export function UsersResults() {
    const {users } = useContext(UsersContext)

    return(
        <div>
            <article>
                <ul>
                    {users.map( item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </article>
        </div>
    )
}