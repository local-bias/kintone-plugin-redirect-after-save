import { getConditionPropertyState } from '@/config/states/plugin';
import React, { FC } from 'react';
import { useRecoilRow } from '@konomi-app/kintone-utilities-react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { IconButton, TextField, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { t } from '@/lib/i18n';
import { produce } from 'immer';

const state = getConditionPropertyState('transitions');

const Component: FC = () => {
  const values = useRecoilValue(state);
  const { addRow, deleteRow } = useRecoilRow({ state, getNewRow: () => ({ href: '', label: '' }) });

  const onHrefChange = useRecoilCallback(
    ({ set }) =>
      (value: string, index: number) => {
        set(state, (prev) =>
          produce(prev, (draft) => {
            draft[index].href = value;
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
              value={value.href}
              onChange={(e) => onHrefChange(e.target.value, i)}
              label={t('config.condition.transitions.href.label')}
              placeholder={t('config.condition.transitions.href.placeholder')}
            />
            <TextField
              value={value.label}
              onChange={(e) => onLabelChange(e.target.value, i)}
              label={t('config.condition.transitions.label.label')}
              placeholder={t('config.condition.transitions.label.placeholder')}
            />
            <Tooltip title='移動先を追加する'>
              <IconButton size='small' onClick={() => addRow(i)}>
                <AddIcon fontSize='small' />
              </IconButton>
            </Tooltip>
            {values.length > 1 && (
              <Tooltip title='移動先を削除する'>
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
