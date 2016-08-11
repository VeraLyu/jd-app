import React, {Component} from 'react';
import {Row, Collection,
  CollectionItem} from 'react-materialize';


import JDInput from '../container/jdinput';

import Style from '../../scss/jd.scss';

export class JDs extends Component {
  constructor(props) {
    super(props);
    this.deleteJD = this.deleteJD.bind(this);
  }

  deleteJD(event) {
    this.props.deleteJD(event.target.parentElement.id);
    event.preventDefault();
  }

  render() {
    let addJD = (
      <a className='teal darken-1 waves-effect waves-circle
      waves-light btn-floating secondary-content'>
        <i className='mdi-content-add'/>
      </a>);

    let JDItem = (jd, key) => (
      <CollectionItem key={key}>
        {jd.title}
        <a id={key} href="#" onClick={this.deleteJD}
          className="secondary-content">
          <i className="material-icons">delete</i>
        </a>
      </CollectionItem>
    );

    let jds = this.props.JDs;
    return (
      <div className={`container ${Style.JDs}`}>
        <JDInput key='addJDInput' trigger={addJD}/>
        <h5>Job Descriptions</h5>
        <Row>
          <Collection>
          {
            Object.keys(jds).map((jdKey)=>{
              let jd = jds[jdKey];
              return (
                <JDInput key={jdKey} jdKey={jdKey} jdObject={jd} trigger={JDItem(jd, jdKey)}/>
              );
            })
          }
          </Collection>
        </Row>
      </div>);
  }
}

JDs.propTypes = {
  JDs: React.PropTypes.object,
  deleteJD: React.PropTypes.function
};
