import React from 'react'
import { bool, func, node, shape } from 'prop-types'
import { IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from 'mdi-react/CloseIcon'
import connector from './connector'

class Alert extends React.Component {
  handleClose = () => {
    const { actions } = this.props
    actions.hide()
  }

  render() {
    const { isVisible, message } = this.props
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isVisible}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    )
  }
}

Alert.propTypes = {
  message: node.isRequired,
  isVisible: bool.isRequired,
  actions: shape({
    hide: func.isRequired,
  }),
}

export default connector(Alert)
