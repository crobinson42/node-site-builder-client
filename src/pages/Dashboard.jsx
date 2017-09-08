import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import { Button } from 'material-ui'

const styles = theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
})

let id = 0
function createData(name, date, views, author) {
  id += 1
  return { id, name, date, views, author }
}

const data = [
  createData('Blog Post #1', new Date().toDateString(), 6, 'Cory'),
  createData('Blog Post #2', new Date().toDateString(), 9, 'Cory'),
  createData('Blog Post #3', new Date().toDateString(), 16, 'Cory'),
  createData('Blog Post #4', new Date().toDateString(), 3, 'Cory'),
  createData('Blog Post #5', new Date().toDateString(), 16, 'Cory'),
]

function BasicTable(props) {
  const classes = props.classes

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Posts</TableCell>
            <TableCell numeric>Date</TableCell>
            <TableCell numeric>Views</TableCell>
            <TableCell numeric>Author</TableCell>
            <TableCell numeric />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell>{n.name}</TableCell>
              <TableCell numeric>{n.date}</TableCell>
              <TableCell numeric>{n.views}</TableCell>
              <TableCell>{n.author}</TableCell>
              <TableCell>
                <Button dense>Delete</Button>

                <Button color="contrast" raised>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BasicTable)
