const uploadCurrent = (current) => {
  return {
      type: 'UPLOAD_CURRENT',
      payload: current
  };
};

export default uploadCurrent;