// SPDX-FileCopyrightText: Facebook, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import { makeStyles } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';
import { PackageInfo } from '../../../shared/shared-types';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import MuiTypography from '@material-ui/core/Typography';
import {
  getContextMenuButtonConfigs,
  getMainButtonConfigs,
} from './attribution-column-helpers';

const preSelectedLabel = 'Attribution was pre-selected';

const useStyles = makeStyles({
  preSelectedLabel: {
    marginLeft: 10,
    marginTop: 12,
  },
  buttonRow: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 8,
    marginBottom: 16,
    marginLeft: 'auto',
  },
  resolveButton: {
    marginTop: 0,
    marginRight: 0,
  },
});

interface ButtonRowProps {
  showButtonGroup: boolean;
  areButtonsHidden?: boolean;
  temporaryPackageInfo: PackageInfo;
  isSavingDisabled: boolean;
  showSaveForAllButton?: boolean;
  packageInfoWereModified: boolean;
  initialPackageInfo: PackageInfo;
  hideDeleteButtons?: boolean;
  selectedPackageIsResolved: boolean;
  hideMarkForReplacementButton: boolean;
  hideUnmarkForReplacementButton: boolean;
  hideOnReplaceMarkedByButton: boolean;
  deactivateReplaceMarkedByButton: boolean;
  onSaveButtonClick(): void;
  onSaveForAllButtonClick(): void;
  onDeleteButtonClick(): void;
  onDeleteForAllButtonClick(): void;
  onUndoButtonClick(): void;
  resolvedToggleHandler(): void;
  onMarkForReplacementButtonClick(): void;
  onUnmarkForReplacementButtonClick(): void;
  onReplaceMarkedByButtonClick(): void;
}

export function ButtonRow(props: ButtonRowProps): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.preSelectedLabel}>
      {props.temporaryPackageInfo.preSelected ? (
        <MuiTypography variant={'subtitle1'}>{preSelectedLabel}</MuiTypography>
      ) : null}
      <div className={classes.buttonRow}>
        {props.showButtonGroup ? (
          <ButtonGroup
            isHidden={props.areButtonsHidden}
            mainButtonConfigs={getMainButtonConfigs(
              props.temporaryPackageInfo,
              props.isSavingDisabled,
              props.onSaveButtonClick,
              props.onSaveForAllButtonClick,
              Boolean(props.showSaveForAllButton)
            )}
            contextMenuButtonConfigs={getContextMenuButtonConfigs(
              props.packageInfoWereModified,
              props.onDeleteButtonClick,
              props.onDeleteForAllButtonClick,
              Boolean(props.hideDeleteButtons),
              props.onUndoButtonClick,
              Boolean(props.showSaveForAllButton),
              props.onMarkForReplacementButtonClick,
              Boolean(props.hideMarkForReplacementButton),
              props.onUnmarkForReplacementButtonClick,
              Boolean(props.hideUnmarkForReplacementButton),
              props.onReplaceMarkedByButtonClick,
              Boolean(props.hideOnReplaceMarkedByButton),
              Boolean(props.deactivateReplaceMarkedByButton)
            )}
          />
        ) : (
          <ToggleButton
            buttonText={'hide'}
            className={classes.resolveButton}
            selected={props.selectedPackageIsResolved}
            handleChange={props.resolvedToggleHandler}
            ariaLabel={'resolve attribution'}
          />
        )}
      </div>
    </div>
  );
}
