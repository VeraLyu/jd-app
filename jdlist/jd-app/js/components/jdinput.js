import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {Row, Modal, Button} from 'react-materialize';


export class JDInput extends Component {
  constructor(props) {
    super(props);
    this.element = null;
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    let title = this.element.querySelector('.jdTitle').value;
    let description = this.element.querySelector('.jdDes').value;
    let location = this.element.querySelector('.jdLoc').value;
    let salaryFrom = this.element.querySelector('.jdSalaryFrom').value;
    let salaryTo = this.element.querySelector('.jdSalaryTo').value;
    if ('jdKey' in this.props) {
      debugger;
      this.props.updateJD(this.props.jdKey, {title, description, location, salaryFrom, salaryTo});
    } else {
      debugger;
      this.props.addJD({title, description, location, salaryFrom, salaryTo});
    }
  }

  render() {
    if ('jdObject' in this.props) {
      return (
        <Modal
          actions={
            <Button onClick={this.submitForm} waves='light' modal='close'>Save</Button>
          }
          trigger={
            this.props.trigger
          }>
          <Row ref = {(ref)=>{
              debugger;
              this.element = findDOMNode(ref);
          }}>
            <div className='input-field col s6'>
              <input type='text' id='text_input1' className='jdTitle'
              defaultValue={this.props.jdObject.title}/>
              <label htmlFor='text_input1'>Title</label>
            </div>
            <div className='input-field col s12'>
              <textarea id='textarea' className='jdDes materialize-textarea'
              defaultValue={this.props.jdObject.description}/>
              <label htmlFor='textarea'>Description</label>
            </div>
            <div className='input-field col s6'>
              <input type='text' id='text_input2' className='jdLoc'
              defaultValue={this.props.jdObject.location}/>
              <label htmlFor='text_input2'>Location</label>
            </div>
            <div className='input-field col s3'>
              <input type='text' id='text_input3' className='jdSalaryFrom'
              defaultValue={this.props.jdObject.salaryFrom}/>
              <label htmlFor='text_input3'>SalaryFrom</label>
            </div>
            <div className='input-field col s3'>
              <input type='text' id='text_input4' className='jdSalaryTo'
              defaultValue={this.props.jdObject.salaryTo}/>
              <label htmlFor='text_input4'>SalaryTo</label>
            </div>
          </Row>
        </Modal>);
    }
    return (
        <Modal
          actions={
            <Button onClick={this.submitForm} waves='light' modal='close'>Save</Button>
          }
          trigger={
            this.props.trigger
          }>
          <Row ref = {(ref)=>{
            debugger;
            this.element = findDOMNode(ref);
          }}>
            <div className='input-field col s6'>
              <input type='text' id='text_input1' className='jdTitle'/>
              <label htmlFor='text_input1'>Title</label>
            </div>
            <div className='input-field col s12'>
              <textarea id='textarea' className='jdDes materialize-textarea'/>
              <label htmlFor='textarea'>Description</label>
            </div>
            <div className='input-field col s6'>
              <input type='text' id='text_input2' className='jdLoc'/>
              <label htmlFor='text_input2'>Location</label>
            </div>
            <div className='input-field col s3'>
              <input type='text' id='text_input3' className='jdSalaryFrom'/>
              <label htmlFor='text_input3'>SalaryFrom</label>
            </div>
            <div className='input-field col s3'>
              <input type='text' id='text_input4' className='jdSalaryTo'/>
              <label htmlFor='text_input4'>SalaryTo</label>
            </div>
          </Row>
        </Modal>
    );
  }
}

JDInput.propTypes = {
  trigger: React.PropTypes.object,
  addJD: React.PropTypes.function,
  updateJD: React.PropTypes.function,
  jdKey: React.PropTypes.string,
  jdObject: React.PropTypes.object
};
