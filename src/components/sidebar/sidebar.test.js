import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import Sidebar from './sidebar';

describe('render', () => {    
  test('Sidebar', () => {
    const userInfo = {
      avatarUrl: 'https://avatars0.githubusercontent.com/u/14919341?v=4',
      name: 'Maria',
      roles: ['student'],
    };
    const result = shallow(
      <Router>
        <Sidebar user={userInfo} />
      </Router>
    );
    expect(result).toMatchSnapshot()
  });
});
