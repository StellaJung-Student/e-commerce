const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    { title: 'hats', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', id: 3 },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/womens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
