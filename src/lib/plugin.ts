import { getAppId, restoreStorage } from '@konomi-app/kintone-utilities';
import { produce } from 'immer';
import { GUEST_SPACE_ID, PLUGIN_ID } from './global';
import { t } from './i18n';

export const getNewCondition = (): Plugin.Condition => ({
  trigger: ['create', 'edit'],
  transitions: [
    { type: 'custom', value: '/k/', label: t('config.condition.transitions.label.init') },
  ],
  isDialogHidden: false,
  dialogTitle: t('config.condition.dialogTitle.init'),
  dialogDescription: t('config.condition.dialogDescription.init'),
});

/**
 * プラグインの設定情報のひな形を返却します
 */
export const createConfig = (): Plugin.Config => ({
  version: 1,
  conditions: [getNewCondition()],
});

/**
 * 古いバージョンの設定情報を新しいバージョンに変換します
 * 各バージョンは次のバージョンへの変換処理を持ち、再帰的なアクセスによって最新のバージョンに変換されます
 *
 * @param anyConfig 保存されている設定情報
 * @returns 新しいバージョンの設定情報
 */
export const migrateConfig = (anyConfig: Plugin.AnyConfig): Plugin.Config => {
  const { version } = anyConfig;
  switch (version) {
    case undefined:
      //@ts-expect-error
      return migrateConfig({ version: 1, ...anyConfig });
    case 1:
    default:
      // もし新しいバージョンを追加したらここに追加する
      // return migrateConfig({ version: 2, ...anyConfig });
      return anyConfig;
  }
};

/**
 * プラグインの設定情報を復元します
 */
export const restorePluginConfig = (): Plugin.Config => {
  const config = restoreStorage<Plugin.AnyConfig>(PLUGIN_ID) ?? createConfig();
  return migrateConfig(config);
};

export const getUpdatedStorage = <T extends keyof Plugin.Condition>(
  storage: Plugin.Config,
  props: {
    conditionIndex: number;
    key: T;
    value: Plugin.Condition[T];
  }
) => {
  const { conditionIndex, key, value } = props;
  return produce(storage, (draft) => {
    draft.conditions[conditionIndex][key] = value;
  });
};

export const getConditionField = <T extends keyof Plugin.Condition>(
  storage: Plugin.Config,
  props: {
    conditionIndex: number;
    key: T;
    defaultValue: NonNullable<Plugin.Condition[T]>;
  }
): NonNullable<Plugin.Condition[T]> => {
  const { conditionIndex, key, defaultValue } = props;
  if (!storage.conditions[conditionIndex]) {
    return defaultValue;
  }
  return storage.conditions[conditionIndex][key] ?? defaultValue;
};

export const getTransitionUrl = (
  transition: Plugin.Condition['transitions'][number]
): string | null => {
  const appId = getAppId()!;
  const guestUrl = GUEST_SPACE_ID ? `guest/${GUEST_SPACE_ID}/` : '';

  const baseUrl = `/k/${guestUrl}`;

  switch (transition.type) {
    case 'app':
      return `${baseUrl}${transition.value}`;
    case 'space':
      return `${baseUrl}#/space/${transition.value}`;
    case 'create':
      return `${baseUrl}${appId}/edit`;
    case 'portal':
      return `${baseUrl}`;
    case 'custom':
      return transition.value;
    case 'default':
    default:
      return null;
  }
};
