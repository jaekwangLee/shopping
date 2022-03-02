import {createAction} from 'typesafe-actions';
import actionTypes from './types';


export const openMeetingModal = createAction(actionTypes.OPEN_MEET_MODAL, (meetInfo) => meetInfo)();

export type appActions =
    | ReturnType<typeof openMeetingModal>;
