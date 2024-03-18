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
      <PluginFormTitle>{t('config.condition.isDetailPageEnabled.title')}</PluginFormTitle>
      <PluginFormDescription last>
        {t('config.condition.isDetailPageEnabled.description')}
      </PluginFormDescription>
      <RecoilSwitch
        state={getConditionPropertyState('isDetailPageEnabled')}
        label={t('config.condition.isDetailPageEnabled.label')}
      />
    </PluginFormSection>
    <PluginFormSection>
      <PluginFormTitle>{t('config.condition.detailPageButtonLabel.title')}</PluginFormTitle>
      <PluginFormDescription last>
        {t('config.condition.detailPageButtonLabel.description')}
      </PluginFormDescription>
      <RecoilText
        state={getConditionPropertyState('detailPageButtonLabel')}
        label={t('config.condition.detailPageButtonLabel.label')}
      />
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
    <DeleteButton />
  </div>
);

export default Component;
