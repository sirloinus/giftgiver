import React from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift';
import { max_number } from '../helper'

class App extends React.Component {
    state = {
        gifts: []
    }

    addGift = () => {
        const { gifts } = this.state
        const ids = this.state.gifts.map(gift => gift.id)
        const max_id = max_number(ids)
        gifts.push({ id: max_id + 1 })
        this.setState({ gifts })
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter( gift => gift.id !== id )
        this.setState({ gifts })
    }

    render() {
        const { addGift, removeGift } = this
        const { gifts }  = this.state
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className='gift-list'>
                    {
                        gifts.map(gift => {
                            return (
                                <Gift 
                                    key={gift.id} 
                                    gift={gift}
                                    removeGift={removeGift}
                                />
                            )
                        })
                    }
                </div>
                <Button className='btn-add' onClick={addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App