import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../client/src/components/LoginForm.jsx';

Enzyme.configure({adapter: new Adapter() });

describe('User Form Component', () => {
  it('should render', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have a form', () => {
    const wrapper = shallow(<LoginForm />);
    const p = wrapper.find('p');
    const form = wrapper.find('form');
    expect(form.exists()).toBeTruthy();
    expect(p.text()).toBe('Username:');
  });
});