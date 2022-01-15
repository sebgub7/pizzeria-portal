import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PageNav from '../../layout/PageNav/PageNav';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.array,
    updateStatus: PropTypes.func,
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status, order) {
    const { updateStatus } = this.props;

    switch (status) {
      case 'free':
        return (<Button onClick={() => updateStatus(id, 'thinking', order)}>thinking</Button>);
      case 'thinking':
        return (<Button onClick={() => updateStatus(id, 'ordered', order)}>ordered</Button>);
      case 'ordered':
        return (<Button onClick={() => updateStatus(id, 'prepared', order)}>prepaired</Button>);
      case 'prepared':
        return (<Button onClick={() => updateStatus(id, 'paid', order)}>paid</Button>);
      case 'paid':
        return (<Button onClick={() => updateStatus(id, 'delivered', order)}>delivered</Button>);
      case 'delivered':
        return (<Button onClick={() => updateStatus(id, 'free', order)}>free</Button>);
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(table => (
                <TableRow key={table.id}>
                  <TableCell component="th" scope="row">
                    {table.id}
                  </TableCell>
                  <TableCell>
                    {table.status}
                  </TableCell>
                  <TableCell>
                    {table.order && (
                      <Button className={styles.button} to={`${process.env.PUBLIC_URL}/waiter/order/${table.order}`}>
                        {table.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(table.id, table.status, table.order)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;