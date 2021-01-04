import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinnerModal from '../client/src/WinnerModal.jsx';

Enzyme.configure({adapter: new Adapter() });

ReactDOM.createPortal = jest.fn(modal => modal);

describe('Winner Modal Component', () => {
  it('should render', () => {
    const wrapper = shallow(<WinnerModal />);
    expect(wrapper).toMatchSnapshot;
  });

  it('should have a winner declaration', () => {
    const wrapper = shallow(<WinnerModal />);
    const h2 = wrapper.find('h2');
    expect(h2.text()).toBe('WINNER!');
  });
});