import { getConditionPropertyState } from '@/config/states/plugin';
import React, { FC } from 'react';
import { useRecoilRow } from '@konomi-app/kintone-utilities-react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { IconButton, MenuItem, TextField, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { t } from '@/lib/i18n';
import { produce } from 'immer';

const state = getConditionPropertyState('transitions');

const TRANSITION_TYPES = [
  { key: 'custom', label: t('condition.transitions.type.option.label.custom') },
  { key: 'create', label: t('condition.transitions.type.option.label.create') },
  { key: 'portal', label: t('condition.transitions.type.option.label.portal') },
  { key: 'default', label: t('condition.transitions.type.option.label.default') },
] satisfies { key: Plugin.TransitionType; label: string }[];

const Component: FC = () => {
  const values = useRecoilValue(state);
  const { addRow, deleteRow } = useRecoilRow({
    state,
    getNewRow: () =>
      ({ type: 'custom', value: '', label: '' }) as Plugin.Condition['transitions'][number],
  });

  const onTypeChange = useRecoilCallback(
    ({ set }) =>
      (value: Plugin.TransitionType, index: number) => {
        set(state, (prev) =>
          produce(prev, (draft) => {
            draft[index].type = value;
          })
        );
      },
    []
  );

  const onValueChange = useRecoilCallback(
    ({ set }) =>
      (value: string, index: number) => {
        set(state, (prev) =>
          produce(prev, (draft) => {
            draft[index].value = value;
          })
        );
      },
    []
  );

  const onLabelChange = useRecoilCallback(
    ({ set }) =>
      (value: string, index: number) => {
        set(state, (prev) =>
          produce(prev, (draft) => {
            draft[index].label = value;
          })
        );
      },
    []
  );

  return (
    <div className='space-y-4'>
      {values.map((value, i) => {
        return (
          <div key={i} className='flex items-center gap-4'>
            <TextField
              value={value.label}
              onChange={(e) => onLabelChange(e.target.value, i)}
              label={t('config.condition.transitions.label.label')}
              placeholder={t('config.condition.transitions.label.placeholder')}
            />
            <TextField
              select
              value={value.type}
              onChange={(e) => onTypeChange(e.target.value as Plugin.TransitionType, i)}
              label={t('config.condition.transitions.type.label')}
            >
              {TRANSITION_TYPES.map((type) => (
                <MenuItem key={type.key} value={type.key}>
                  {type.label}
                </MenuItem>
              ))}
            </TextField>
            {value.type === 'custom' && (
              <TextField
                value={value.value}
                onChange={(e) => onValueChange(e.target.value, i)}
                label={t('config.condition.transitions.href.label')}
                placeholder={t('config.condition.transitions.href.placeholder')}
              />
            )}
            <Tooltip title={t('config.condition.transitions.rows.add')}>
              <IconButton size='small' onClick={() => addRow(i)}>
                <AddIcon fontSize='small' />
              </IconButton>
            </Tooltip>
            {values.length > 1 && (
              <Tooltip title={t('config.condition.transitions.rows.delete')}>
                <IconButton size='small' onClick={() => deleteRow(i)}>
                  <DeleteIcon fontSize='small' />
                </IconButton>
              </Tooltip>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Component;
