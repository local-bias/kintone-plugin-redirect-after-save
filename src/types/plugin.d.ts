declare namespace Plugin {
  /** 🔌 プラグインがアプリ単位で保存する設定情報 */
  type Config = ConfigV1;

  /** 🔌 プラグインの詳細設定 */
  type Condition = Config['conditions'][number];

  type ConditionTrigger = Condition['trigger'][number];

  /** 🔌 過去全てのバージョンを含むプラグインの設定情報 */
  type AnyConfig = ConfigV1; // | ConfigV2 | ...;

  type ConfigV1 = {
    version: 1;
    conditions: {
      trigger: ('create' | 'edit')[];
      transitions: {
        href: string;
        label: string;
      }[];
      isDetailPageEnabled: boolean;
      detailPageButtonLabel: string;
      isDialogHidden: boolean;
    }[];
  };
}
