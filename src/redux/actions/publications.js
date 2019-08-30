import { createPublication, findAllPublications, updatePublication, deletePublication } from '../../api/publication';
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

export const updatePublicationSuccess = (publication) => {
  return {
      type: 'UPDATE_PUBLICATION_SUCCESS',
      payload: publication
  };
};

export const deletePublicationSuccess = (publication) => {
  return {
      type: 'DELETE_PUBLICATION_SUCCESS',
      payload: publication
  };
};


export const addPublicationThunk = (data) => {
  return async (dispatch, getState) => {
    try {
      const res = await createPublication(data);
      dispatch(addPublicationSuccess(res.data.publication));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export const updatePublicationThunk = (id, data) => {
  return async (dispatch, getState) => {
    try {
      const res = await updatePublication(id, data);
      dispatch(updatePublicationSuccess(res.data.publication));
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

export const deletePublicationThunk = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await deletePublication(id);
      dispatch(deletePublicationSuccess(res.data.publication));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}