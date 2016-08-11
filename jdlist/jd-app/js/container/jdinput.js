import {connect} from 'react-redux';

import {JDInput} from '../components/jdinput';
import {createRemoteJD} from '../redux/actions/jd';


const mapDispatchToProps = (dispatch) => {
  return {
    addJD: (info)=> {
      dispatch(createRemoteJD(info));
    },
    updateJD: (id, info)=> {
      dispatch(createRemoteJD(id, info));
    }
  };
};


const JDInputContainer = connect(
  null,
  mapDispatchToProps
)(JDInput);

export default JDInputContainer;

