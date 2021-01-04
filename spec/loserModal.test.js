import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoserModal from '../client/src/LoserModal.jsx';

Enzyme.configure({adapter: new Adapter() });

ReactDOM.createPortal = jest.fn(modal => modal);

let word = 'Tuna';

describe('Loser Modal Component', () => {
  it('should render', () => {
    const wrapper = shallow(<LoserModal word={word} />);
    expect(wrapper).toMatchSnapshot;
  });

  it('should have a Loser declaration', () => {
    const wrapper = shallow(<LoserModal word={word} />);
    const h2 = wrapper.find('h2');
    const p = wrapper.find('p');
    expect(h2.text()).toBe('Better Luck Next Time!');
    expect(p.text()).toBe('The word was: Tuna');
  });
});