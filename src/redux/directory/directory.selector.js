import {createSelector} from 'reselect';
import directoryreducer from './directory.reducer';
const selectdirectory=state=>state.directory;

export const selectdirectorysections=createSelector(

    [selectdirectory],
    directory=>directory.sections



)


export default selectdirectorysections