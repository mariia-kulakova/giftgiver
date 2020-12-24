import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initialize the `state` with an empty list of gifts', () => {
    expect(app.state().gifts ).toEqual([]);
  });

  describe('when clicking `add gift` button', () => {
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('adds gift to the `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds new gift to rendered gift list', () => {
      expect(app.find('.gifts-list').children().length).toEqual(1);
    });

    it('creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
