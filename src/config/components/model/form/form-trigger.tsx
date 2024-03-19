import { getConditionPropertyState } from '@/config/states/plugin';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { Checkbox, FormControlLabel } from '@mui/material';
import { produce } from 'immer';
import { t } from '@/lib/i18n';

const CHECKBOXS = [
  { key: 'create', label: t('config.condition.trigger.label.create') },
  { key: 'edit', label: t('config.condition.trigger.label.edit') },
] satisfies { key: Plugin.ConditionTrigger; label: string }[];

const state = getConditionPropertyState('trigger');

const Component: FC = () => {
  const values = useRecoilValue(state);

  const onChange = useRecoilCallback(
    ({ set }) =>
      (key: Plugin.ConditionTrigger, checked: boolean) => {
        set(state, (prev) =>
          produce(prev, (draft) => {
            if (checked) {
              draft.push(key);
            } else {
              draft.splice(draft.indexOf(key), 1);
            }
          })
        );
      },
    []
  );

  return (
    <div className='flex gap-4'>
      {CHECKBOXS.map(({ key, label }) => {
        return (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={values.includes(key)}
                onChange={(_, checked) => onChange(key, checked)}
              />
            }
            label={label}
          />
        );
      })}
    </div>
  );
};

export default Component;
