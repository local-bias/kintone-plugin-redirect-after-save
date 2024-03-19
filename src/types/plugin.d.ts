declare namespace Plugin {
  /** 🔌 プラグインがアプリ単位で保存する設定情報 */
  type Config = ConfigV1;

  /** 🔌 プラグインの詳細設定 */
  type Condition = Config['conditions'][number];

  type ConditionTrigger = Condition['trigger'][number];

  type TransitionType = Condition['transitions'][number]['type'];

  /** 🔌 過去全てのバージョンを含むプラグインの設定情報 */
  type AnyConfig = ConfigV1; // | ConfigV2 | ...;

  type ConfigV1 = {
    version: 1;
    conditions: {
      trigger: ('create' | 'edit')[];
      transitions: {
        label: string;
        type: 'create' | 'portal' | 'app' | 'space' | 'custom' | 'default';
        value: string;
      }[];
      isDialogHidden: boolean;
      dialogTitle: string;
      dialogDescription: string;
    }[];
  };
}
