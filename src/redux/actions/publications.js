import { createPublications, findAllPublications } from '../../api/publication';
import {handleError} from './error';

export const getPublicationsSuccess = (publications) => {
    return {
        type: 'GET_PUBLICATIONS_SUCCESS',
        payload: publications
    };
};

export const addPublicationSuccess = (publication) => {
  return {
      type: 'ADD_PUBLICATION_SUCCESS',
      payload: publication
  };
};


export const addPublicationThunk = (data) => {
  return async (dispatch, getState) => {
    try {
      const res = await createPublications(data);
      dispatch(addPublicationSuccess(res.data.publication));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export const getPublicationsThunk = () => {
    return async (dispatch, getState) => {
      try {
        const res = await findAllPublications();
        dispatch(getPublicationsSuccess(res.data.publications));
      } catch (error) {
        dispatch(handleError(error));
      }
    };
}