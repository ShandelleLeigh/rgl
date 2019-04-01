import {createStandardAction} from 'typesafe-actions';

export const setActiveItem = createStandardAction('grid/SetActiveItem')<string>();

