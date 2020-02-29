import React from 'react'
import useSWR from 'swr'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import ScheduleTable from '../modules/Watchers'
import fetcher from '../utils/fetcher'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'grid'
  }
}))

function Schedule () {
  const classes = useStyles()
  const { data } = useSWR('/api/schedule', fetcher)
  const content = data || []
  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography variant='h5' gutterBottom>
        Расписание
      </Typography>
      <Typography variant='body1' gutterBottom>
        Таблица с информацией о смотрящих в ЦДО на ближайшие 2 недели.
      </Typography>
      <ScheduleTable data={content} />
    </Container>
  )
}

export default Schedule