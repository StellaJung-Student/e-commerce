import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//use 'class component'  need to store state value of those menue item that we want to pass and create
class Directory extends Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 2,
          linkUrl: '',
        },
        { title: 'hats', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', id: 3 },
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
