import {JDListURL, JDPostURL} from '../../helper/urlconst';
export const SAVE_JD = 'SAVE_JD';
export const REMOVE_JD = 'REMOVE_JD';

// To update result to local redux store
export function updateJD(id, info) {
  return {
    type: SAVE_JD,
    id,
    info
  };
}

// To remove one from local redux store
export function removeJD(id) {
  return {
    type: REMOVE_JD,
    id
  };
}

// Fetch JDs from remote server
export function fetchJDs() {
  return function (dispatch) {
    fetch(JDListURL).then(
      (result)=>(result.json())
    ).then((jds)=>{
      jds.forEach((jd)=>{
        dispatch(updateJD(jd.pk, jd.fields));
      });
    });
  };
}

export function createRemoteJD(info) {
  return function (dispatch) {
     // create new item
    let request = new Request(JDPostURL, {
      method: 'POST',
      body: JSON.stringfy(info),
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    fetch(request).then(
      (result)=>(result.json())
    ).then((jds)=>{
      debugger;
      jds.forEach((jd)=>{
        dispatch(updateJD(jd.pk, jd.fields));
      });
    });
  };
}

