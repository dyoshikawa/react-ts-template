import { connect } from 'react-redux'

import About from '../components/Tasks'
import { addTask } from '../actions/tasks'
import { Dispatch } from 'redux'

import reducer from '../reducer'

function mapStateToProps(state: any) {
  return state
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatchAddTask: (task: string) => {
      dispatch(addTask(task))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
