import { combineReducers } from "redux";
import errorsReducers from "./errorsReducers";
import ProjectTaskReducers from "./projectTaskReducers";

export default combineReducers ({
    //
    errors: errorsReducers,
    project_task: ProjectTaskReducers
});