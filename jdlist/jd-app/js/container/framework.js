import {connect} from 'react-redux';

import {Framework} from '../components/framework';
import {fetchJDs} from '../redux/actions/jd';

const mapDispatchToProps = ((dispatch)=>{
  return {
    fetch: ()=>{
      dispatch(fetchJDs());
    }
  };
});

const FrameworkContainer = connect(
  null,
  mapDispatchToProps
)(Framework);

export default FrameworkContainer;
