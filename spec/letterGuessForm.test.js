import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LetterGuessForm from '../client/src/components/LetterGuessForm.jsx';

Enzyme.configure({adapter: new Adapter() });

describe('Letter Guess Form Component', () => {
  it('should render', () => {
    const wrapper = shallow(<LetterGuessForm />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have a form', () => {
    const wrapper = shallow(<LetterGuessForm />);
    const h2 = wrapper.find('h2');
    const form = wrapper.find('form');
    expect(form.exists()).toBeTruthy();
    expect(h2.text()).toBe('Type in One Letter:');
  });
});