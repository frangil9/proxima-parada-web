const nextsStops = (stops) => {
  return {
      type: 'NEXTS_STOPS',
      payload: stops
  };
};

export default nextsStops;