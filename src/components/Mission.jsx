import React from 'react';
import { getMissions } from '../utils/api';

function Mission() {
  getMissions();
  return <div>Mission</div>;
}

export default Mission;
