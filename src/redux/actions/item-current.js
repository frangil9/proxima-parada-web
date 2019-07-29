import {findPublicationById} from '../../api/publication';
import {handleError} from './error';

export const getItemSuccess = (item) => {
    return {
        type: 'GET_ITEM_CURRENT_SUCCESS',
        payload: item
    };
};

export const getItemThunk = (id) => {
    return async (dispatch, getState) => {
      try {
        const res = await findPublicationById(id);
        dispatch(getItemSuccess(res.data.publication));
      } catch (error) {
        dispatch(handleError(error));
      }
    };
};