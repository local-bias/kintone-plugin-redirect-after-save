import {
  AnyPluginConfig,
  PluginCondition,
  PluginConditionV1Schema,
  PluginConfig,
} from '@/schema/plugin-config';
import { getAppId, restoreStorage } from '@konomi-app/kintone-utilities';
import { produce } from 'immer';
import { nanoid } from 'nanoid';
import { GUEST_SPACE_ID, PLUGIN_ID } from './global';
import { t } from './i18n';

export const getNewCondition = (): PluginCondition => ({
  id: nanoid(),
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
export const createConfig = (): PluginConfig => ({
  version: 2,
  conditions: [getNewCondition()],
});

/**
 * 古いバージョンの設定情報を新しいバージョンに変換します
 * 各バージョンは次のバージョンへの変換処理を持ち、再帰的なアクセスによって最新のバージョンに変換されます
 *
 * @param anyConfig 保存されている設定情報
 * @returns 新しいバージョンの設定情報
 */
export const migrateConfig = (anyConfig: AnyPluginConfig): PluginConfig => {
  const { version } = anyConfig;
  switch (version) {
    case undefined: {
      const config = anyConfig as unknown as any;
      if (
        typeof config !== 'object' ||
        (!('conditions' in config) && !Array.isArray(config.conditions))
      ) {
        return migrateConfig(createConfig());
      }

      // condition単位でバリデーションを行い、エラーがあれば新しいバージョンに変換する
      const newCondition = config.conditions.map((condition: unknown) => {
        const parsed = PluginConditionV1Schema.safeParse(condition);
        if (parsed.success) {
          return parsed.data;
        }
        return getNewCondition();
      });

      return migrateConfig({
        version: 1,
        conditions: newCondition,
      });
    }
    case 1: {
      return migrateConfig({
        ...anyConfig,
        version: 2,
        conditions: anyConfig.conditions.map((condition) => ({
          id: nanoid(),
          ...condition,
        })),
      });
    }
    case 2:
    default: {
      return anyConfig;
    }
  }
};

/**
 * プラグインの設定情報を復元します
 */
export const restorePluginConfig = (): PluginConfig => {
  const config = restoreStorage<AnyPluginConfig>(PLUGIN_ID) ?? createConfig();
  return migrateConfig(config);
};

export const getUpdatedStorage = <T extends keyof PluginCondition>(
  storage: PluginConfig,
  props: {
    conditionIndex: number;
    key: T;
    value: PluginCondition[T];
  }
) => {
  const { conditionIndex, key, value } = props;
  return produce(storage, (draft) => {
    draft.conditions[conditionIndex][key] = value;
  });
};

export const getConditionField = <T extends keyof PluginCondition>(
  storage: PluginConfig,
  props: {
    conditionIndex: number;
    key: T;
    defaultValue: NonNullable<PluginCondition[T]>;
  }
): NonNullable<PluginCondition[T]> => {
  const { conditionIndex, key, defaultValue } = props;
  if (!storage.conditions[conditionIndex]) {
    return defaultValue;
  }
  return storage.conditions[conditionIndex][key] ?? defaultValue;
};

export const getTransitionUrl = (
  transition: PluginCondition['transitions'][number]
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
