import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//use 'class component'  need to store state value of those menue item that we want to pass and create
class Directory extends Component {
  constructor() {
    super();

    this.state = {
      section: [
        { title: 'hats', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', id: 1 },
        { title: 'hats', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', id: 2 },
        { title: 'hats', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', id: 3 },
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 4,
        },
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.section.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
