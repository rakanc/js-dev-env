import './index.css';
import numeral from 'numeral';
/* eslint-disable no-console */
const couseVal = numeral(1000).format('$0,0.00');
console.log(`I would pay ${couseVal} for this course!`);
