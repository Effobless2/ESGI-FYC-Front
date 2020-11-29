import { applyMiddleware } from '@reduxjs/toolkit';
import LogingMiddleWare from './LogingMiddleware';

export default applyMiddleware(LogingMiddleWare);