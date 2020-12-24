import React, { Component  } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { maxNumber } from '../helpers';

class App extends Component {
  constructor() {
    super();

    this.state = { gifts: [] }
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);

    gifts.push({ id: maxNumber(ids) + 1 });

    this.setState({ gifts });
  }

  removeGift = id => {
    let { gifts } = this.state;

    gifts = gifts.filter(gift => gift.id !== id);

    this.setState({ gifts });
  }

  render() {
    const { gifts } = this.state;
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gifts-list'>
          {
            gifts.map(gift => {
              return (
                <Gift
                  key={gift.id}
                  gift={gift}
                  removeGift={this.removeGift}
                />
              )
            })
          }
        </div>
        <Button className='btn-add' onClick={ this.addGift }>Add Gift</Button>
      </div>
    )
  }
}

export default App;
