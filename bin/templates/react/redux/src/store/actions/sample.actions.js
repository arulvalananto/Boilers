/* eslint-disable new-cap */
import {FETCH_SAMPLE} from '../reducers/sample.reducer';

export const fetchSample = () => (dispatch) => {
  dispatch(
      FETCH_SAMPLE({
        sample: 'sample',
      }),
  );
};
