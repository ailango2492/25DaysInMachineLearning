import React from 'react';

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' }
];


export default class App extends React.Component {
  render() {
      const listnames =users.map(({id,name})=>{
        return <li key={id}>{name}</li>;
    });
    return (
        <ul>
        {listnames}
      </ul>  
    );
  }
}


---------

import React from 'react';

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' }
];

const Listname = props =>{
    const listnames =props.users.map(({id,name})=>{
        return <li key={id}>{name}</li>;
    });
    //console.log(listnames)
    return <ul>{listnames}</ul>;
};

export default class App extends React.Component {
  render() {
    return (
        
        <Listname users={users} />
        
    );
  }
}
