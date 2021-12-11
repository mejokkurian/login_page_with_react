import React from 'react'

function Error(heroName) {
    if (heroName) {
        if (heroName === 'joker') {
            throw new Error("not hero")
        }
    }
    return (
        <div>
            
        </div>
    )
}

export default Error
