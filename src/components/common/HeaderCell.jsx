import React from 'react'
import classNames from 'classnames'
import { bool, func, object, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import CheckIcon from 'mdi-react/CheckIcon'

const styles = ({
  root: {
    textTransform: 'uppercase',
  },
  icon: {
    marginLeft: 5,
  },
})

const HeaderCell = ({ classes, isFullDay, date, dayFormat, onClick }) => (
  <div className={classNames('title', classes.root)} onClick={onClick(date)}>
    {date.format(dayFormat)}
    {isFullDay && <CheckIcon size={15} className={classes.icon} />}
  </div>
)

HeaderCell.propTypes = {
  classes: object.isRequired,
  date: object.isRequired,
  onClick: func.isRequired,
  isFullDay: bool.isRequired,
  dayFormat: string.isRequired,
}

export default withStyles(styles)(HeaderCell)
