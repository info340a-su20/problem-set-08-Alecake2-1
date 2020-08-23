import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];


export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={this.props.senators}/>
      </div>
    );
  }
}

export class SenatorTable extends Component {
  render() {
    let rows = this.props.senators;
    let senatorList = rows.map((element) => 
    <SenatorRow senator={element}/>)
    
    return (
      <table className="table table-bordered">
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
        <tbody>
          {senatorList}
        </tbody>
      </table>
    )
  }
}

export class TableHeader extends Component {
  render() {
    let organized = this.props.cols.map((colName) => 
      <th key = { colName }>{ colName }</th>)

    return (
      <thead>
        <tr>
          { organized }
        </tr>
      </thead>
    );
  }
}

export class SenatorRow extends Component {
  render() {
    let account = this.props.senator.twitter;
    let cellPhone = this.props.senator.phone;
    return (
      
      <tr>
        <td>{this.props.senator.name}</td>
        <td>{this.props.senator.party.substring(0,1) + " - " + this.props.senator.state}</td>
        <td><a href={"tel:" + cellPhone}>{cellPhone}</a></td>
        <td><a href={"https://twitter.com/" + account}>{"@" + account}</a></td>
      </tr>
    );
  }
}


