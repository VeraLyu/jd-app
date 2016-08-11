import {connect} from 'react-redux';

import {JDs} from '../components/jd';
import {removeJD} from '../redux/actions/jd';


const mapStateToProps = ((state) => {
  return {
    JDs: state.jds
  };
});

const mapDispatchToProps = ((dispatch)=>{
  return {
    deleteJD: (id)=>{
      dispatch(removeJD(id));
    }
  };
});

const JDsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JDs);

export default JDsContainer;
