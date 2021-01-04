import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserForm from '../client/src/components/UserForm.jsx';

Enzyme.configure({adapter: new Adapter() });

describe('User Form Component', () => {
  it('should render', () => {
    const wrapper = shallow(<UserForm />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have a form', () => {
    const wrapper = shallow(<UserForm />);
    const p = wrapper.find('p');
    const form = wrapper.find('form');
    expect(form.exists()).toBeTruthy();
    expect(p.text()).toBe('Type in your new username:');
  });
});