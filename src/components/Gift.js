import React from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class Gift extends React.Component {
    state = {
        person: '',
        present: ''
    }

    render() {
        const { removeGift, gift } = this.props
        return (
            <div className="gift">
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                            className={'input-person'}
                            onChange={event => this.setState({person: event.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl
                            className={'input-present'}
                            onChange={event => this.setState({present: event.target.value})}
                        />
                    </FormGroup>
                </Form>
                <Button 
                    className='btn-remove'
                    onClick={() => removeGift(gift.id)}
                >
                    Remove Gift
                </Button>
            </div>
        )
    }
}

export default Gift