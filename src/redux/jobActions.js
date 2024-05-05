// actions.js
import axios from 'axios';
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
} from './jobReducer';

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error
});

export const fetchJobs = () => {
  return async (dispatch) => {
    dispatch(fetchJobsRequest());
    try {
      const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON');
      console.log('actions = ', response?.data?.jdList);
      dispatch(fetchJobsSuccess(response?.data?.jdList));
    } catch (error) {
      dispatch(fetchJobsFailure(error.message));
    }
  };
};
