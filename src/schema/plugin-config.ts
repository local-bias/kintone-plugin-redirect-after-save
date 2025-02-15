import { z } from 'zod';

export const PluginConditionV1Schema = z.object({
  trigger: z.array(z.enum(['create', 'edit'])),
  transitions: z.array(
    z.object({
      label: z.string(),
      type: z.enum(['create', 'portal', 'app', 'space', 'custom', 'default']),
      value: z.string(),
    })
  ),
  isDialogHidden: z.boolean(),
  dialogTitle: z.string(),
  dialogDescription: z.string(),
});
export const PluginConfigV1Schema = z.object({
  version: z.literal(1),
  conditions: z.array(PluginConditionV1Schema),
});
type PluginConfigV1 = z.infer<typeof PluginConfigV1Schema>;

export const PluginConditionV2Schema = z.object({
  // - 追加 -------------------------
  id: z.string(),
  // -------------------------------

  // - 引継　-------------------------
  trigger: z.array(z.enum(['create', 'edit'])),
  transitions: z.array(
    z.object({
      label: z.string(),
      type: z.enum(['create', 'portal', 'app', 'space', 'custom', 'default']),
      value: z.string(),
    })
  ),
  isDialogHidden: z.boolean(),
  dialogTitle: z.string(),
  dialogDescription: z.string(),
});
export const PluginConfigV2Schema = z.object({
  version: z.literal(2),
  conditions: z.array(PluginConditionV2Schema),
});
type PluginConfigV2 = z.infer<typeof PluginConfigV2Schema>;

export type PluginConfig = PluginConfigV2;
export type PluginCondition = PluginConfig['conditions'][number];

export const LatestPluginConditionSchema = PluginConditionV2Schema;

/**
 * 🔌 過去全てのバージョンを含むプラグインの設定情報
 *
 * 設定情報は各ユーザーのkintoneに格納されるため、必ずしも最新バージョンの設定情報が格納されているとは限りません。
 * そのため、設定情報を復元する際には、全てのバージョンに対応した型を使用する必要があります。
 */
export type AnyPluginConfig = PluginConfigV1 | PluginConfigV2;

export type TransitionType = PluginCondition['transitions'][number]['type'];

export type ConditionTrigger = PluginCondition['trigger'][number];
