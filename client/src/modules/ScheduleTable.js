import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import WatcherModal from './WatcherModal'

const useStyles = makeStyles({
  table: {
    minWidth: 320
  },
  row: {
    '&:hover': {
      backgroundColor: 'rgb(240, 240, 240)',
      transition: 'background-color 0.1s',
      cursor: 'pointer'
    }
  }
})

function sortByDate (first, second) {
  return (first[0] + first[1] * 100) - (second[0] + second[1] * 100)
}

function prepareData (data) {
  const prepared = []
  for (const person of data) {
    for (const date of person.schedule) {
      prepared.push({
        name: person.name,
        date: date.split('.'),
        difficulty: 'Пока не ясно',
        img: person.img
      })
    }
  }
  return prepared.sort((a, b) =>
    sortByDate(a.date, b.date)
  ).map(row => ({
    ...row,
    date: row.date.join('.')
  }))
}

export default function SimpleTable ({ data, className }) {
  const classes = useStyles()
  const rows = prepareData(data)

  const [modal, setModal] = React.useState({
    isOpen: false,
    data: {}
  })

  const handleClickOpen = (row) => {
    setModal({
      isOpen: true,
      data: row
    })
  }

  const handleClose = () => {
    setModal({
      isOpen: false,
      data: {}
    })
  }

  return (
    <>
      <TableContainer component={Paper} className={className}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell align='left'>Смотрящий</TableCell>
              <TableCell align='left'>Сложность</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.date} onClick={() => handleClickOpen(row)} className={classes.row}>
                <TableCell component='th' scope='row'>
                  {row.date}
                </TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='left'>{row.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <WatcherModal open={modal.isOpen} data={modal.data} onClose={handleClose} />
    </>
  )
}
