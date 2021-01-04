import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Word from '../client/src/components/Word.jsx';
import LetterGuessForm from '../client/src/components/LetterGuessForm.jsx';

Enzyme.configure({adapter: new Adapter() });

const word = "bloated"

describe('Word Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Word word={word} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show display of word as underscores with spaces between', () => {
    const wrapper = shallow(<Word word={word} />);
    const p = wrapper.find('p');
    expect(p.text()).toBe('_ _ _ _ _ _ _');
  })
})