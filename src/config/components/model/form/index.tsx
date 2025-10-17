import React, { FC } from 'react';

import {
  PluginFormSection,
  PluginFormTitle,
  PluginFormDescription,
  RecoilText,
  RecoilSwitch,
} from '@konomi-app/kintone-utilities-react';
import DeleteButton from './condition-delete-button';
import { getConditionPropertyState } from '@/config/states/plugin';
import { t } from '@/lib/i18n';
import TransitionsForm from './form-transitions';
import TriggerForm from './form-trigger';

const Component: FC = () => (
  <div className='p-4'>
    <PluginFormSection>
      <PluginFormTitle>{t('config.condition.trigger.title')}</PluginFormTitle>
      <PluginFormDescription last>
        {t('config.condition.trigger.description')}
      </PluginFormDescription>
      <TriggerForm />
    </PluginFormSection>
    <PluginFormSection>
      <PluginFormTitle>{t('config.condition.transitions.title')}</PluginFormTitle>
      <PluginFormDescription last>
        {t('config.condition.transitions.description')}
      </PluginFormDescription>
      <TransitionsForm />
    </PluginFormSection>
    <PluginFormSection>
      <PluginFormTitle>{t('config.condition.isDialogHidden.title')}</PluginFormTitle>
      <PluginFormDescription last>
        {t('config.condition.isDialogHidden.description')}
      </PluginFormDescription>
      <RecoilSwitch
        state={getConditionPropertyState('isDialogHidden')}
        label={t('config.condition.isDialogHidden.label')}
      />
    </PluginFormSection>
    <PluginFormSection>
      <PluginFormTitle>{t('config.condition.dialogTitle.title')}</PluginFormTitle>
      <PluginFormDescription last>
        {t('config.condition.dialogTitle.description')}
      </PluginFormDescription>
      <RecoilText
        className='w-full'
        state={getConditionPropertyState('dialogTitle')}
        label={t('config.condition.dialogTitle.label')}
      />
    </PluginFormSection>
    <PluginFormSection>
      <PluginFormTitle>{t('config.condition.dialogDescription.title')}</PluginFormTitle>
      <PluginFormDescription last>
        {t('config.condition.dialogDescription.description')}
      </PluginFormDescription>
      <RecoilText
        multiline
        rows={4}
        className='w-full'
        state={getConditionPropertyState('dialogDescription')}
        label={t('config.condition.dialogDescription.label')}
      />
    </PluginFormSection>
    <DeleteButton />
  </div>
);

export default Component;
