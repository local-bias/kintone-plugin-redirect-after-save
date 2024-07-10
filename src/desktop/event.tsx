import { getTransitionUrl, restorePluginConfig } from '@/lib/plugin';
import { manager } from '@/lib/event-manager';
import { Root, createRoot } from 'react-dom/client';
import React from 'react';
import config from 'plugin.config.mjs';
import { kintoneAPI } from '@konomi-app/kintone-utilities';
import App from './app';

const ROOT_ID = `🐸${config.id}-root`;

const { conditions } = restorePluginConfig();

for (const condition of conditions) {
  const events: kintoneAPI.js.EventType[] = [];

  condition.trigger.includes('create') && events.push('app.record.create.submit.success');
  condition.trigger.includes('edit') && events.push('app.record.edit.submit.success');

  manager.add(events, async (event) => {
    const { isDialogHidden } = condition;

    if (isDialogHidden) {
      const url = getTransitionUrl(condition.transitions[0]);
      if (url) {
        event.url = url;
      }
      return event;
    }

    const result = await new Promise<string | null>((resolve, reject) => {
      let rootElement = document.getElementById(ROOT_ID);
      if (!rootElement) {
        rootElement = document.createElement('div');
        rootElement.id = ROOT_ID;
        document.body.append(rootElement);
      }
      const root = createRoot(rootElement);
      root.render(<App condition={condition} promiseResolver={resolve} promiseRejecter={reject} />);
    });

    if (result) {
      event.url = result;
    }

    return event;
  });
}
