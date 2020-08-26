import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import ArchiveIcon from '@material-ui/icons/Archive';
import { lighten, makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.9),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  const renderSwitch = (param) => {
    switch (param) {
      case 0:
        return (
          <Tooltip title="Add">
            <IconButton aria-label="add item">
              <AddIcon />
            </IconButton>
          </Tooltip>
        );
      case 1:
        return (
          <>
            <Tooltip title="EditIcon">
              <IconButton aria-label="editIcon">
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Archive">
              <IconButton aria-label="archiveIcon">
                <ArchiveIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open">
              <IconButton aria-label="Open">
                <RemoveRedEyeIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      default:
        return (
          <>
            <Tooltip title="Archive">
              <IconButton aria-label="archiveIcon">
                <ArchiveIcon />
              </IconButton>
            </Tooltip>
          </>
        );
    }
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 > 2 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Tasks
        </Typography>
      )}

      {renderSwitch(numSelected)}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
