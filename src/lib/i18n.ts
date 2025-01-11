import { LANGUAGE } from './global';

export const ui = {
  ja: {
    'config.condition.trigger.label.create': 'レコード作成時',
    'config.condition.trigger.label.edit': 'レコード編集時',
    'config.condition.trigger.title': '発生タイミング',
    'config.condition.trigger.description':
      'このプラグインを有効にするタイミングを設定してください',
    'config.condition.trigger.label': '発生タイミング',
    'config.condition.transitions.title': '遷移先',
    'config.condition.transitions.description': 'レコード保存時に、選択できる移動先を設定します。',
    'config.condition.transitions.type.label': '移動タイプ',
    'config.condition.transitions.href.label': '移動先URL',
    'config.condition.transitions.href.placeholder': '/k/',
    'config.condition.transitions.label.init': 'ポータル画面へ',
    'config.condition.transitions.label.label': 'ボタンに表示するラベル',
    'config.condition.transitions.label.placeholder': 'ポータル画面へ',
    'config.condition.transitions.rows.add': '移動先を追加する',
    'config.condition.transitions.rows.delete': 'この移動先を削除する',
    'config.condition.isDetailPageEnabled.title': '標準の移動先(レコード詳細画面)の設定',
    'config.condition.isDetailPageEnabled.description':
      'この設定を有効にした場合、設定した遷移先に加えて、標準の移動先(レコード詳細画面)も選択できるようになります。',
    'config.condition.isDetailPageEnabled.label': '標準の移動先を有効にする',
    'config.condition.detailPageButtonLabel.title': '標準の移動先のラベル',
    'config.condition.detailPageButtonLabel.description':
      '標準の移動先(レコード詳細画面)のボタンに表示するラベルを設定します。',
    'config.condition.detailPageButtonLabel.label': 'ボタンのラベル',
    'config.condition.detailPageButtonLabel.placeholder': 'レコード詳細画面へ',
    'config.condition.isDialogHidden.title': '選択ダイアログの非表示化',
    'config.condition.isDialogHidden.description':
      'この設定を有効にした場合、レコード保存時に移動する先を選択するダイアログを表示しません。必ず1つ目に設定したURLへ移動します。',
    'config.condition.isDialogHidden.label': '選択ダイアログを表示しない',
    'config.condition.dialogTitle.init': 'レコードの保存が完了しました',
    'config.condition.dialogTitle.title': 'ダイアログのタイトル',
    'config.condition.dialogTitle.description':
      'ページ移動先の選択ダイアログに表示するタイトルを設定します。',
    'config.condition.dialogTitle.label': 'ダイアログのタイトル',
    'config.condition.dialogDescription.init':
      'レコードの保存が完了しました。移動先を選択してください。',
    'config.condition.dialogDescription.title': 'ダイアログの説明文',
    'config.condition.dialogDescription.description':
      'ページ移動先の選択ダイアログに表示する説明文を設定します。',
    'config.condition.dialogDescription.label': '説明文',

    'condition.transitions.type.option.label.custom': 'カスタムURL',
    'condition.transitions.type.option.label.create': 'レコード新規作成画面',
    'condition.transitions.type.option.label.portal': 'ポータル画面',
    'condition.transitions.type.option.label.default': '作成したレコードの詳細画面',

    'config.sidebar.tab.label': '設定',
    'config.button.save': '設定を保存',
    'config.button.return': 'プラグイン一覧へ戻る',
    'config.toast.save': '設定を保存しました',
    'config.toast.reset': '設定をリセットしました',
    'config.toast.import': '設定情報をインポートしました',
    'config.toast.export': 'プラグインの設定情報をエクスポートしました',
    'config.error.root':
      'プラグインのHTMLに、ルート要素が存在しません。プラグイン設定をレンダリングするためには、id="settings"の要素が必要です。',
    'config.error.import':
      '設定情報のインポートに失敗しました、ファイルに誤りがないか確認してください',
    'config.error.export':
      'プラグインの設定情報のエクスポートに失敗しました。プラグイン開発者にお問い合わせください。',
    'desktop.dialogtrigger.title': 'プラグインが有効です',
    'desktop.dialogtrigger.content': 'クリックするとイベントの詳細を確認できます',
    'desktop.dialog.title': 'プラグインの設定情報',
  },
  en: {
    'config.condition.trigger.title': 'Trigger Title',
    'config.condition.trigger.description': 'Set the timing to enable this plugin',
    'config.condition.trigger.label': 'Trigger',
    'config.condition.transitions.title': 'Transitions',
    'config.condition.transitions.description':
      'Set the selectable destinations when saving a record',
    'config.condition.transitions.type.label': 'Transition Type',
    'config.condition.transitions.href.label': 'Destination URL',
    'config.condition.transitions.href.placeholder': '/k/',
    'config.condition.transitions.label.label': 'Button Label',
    'config.condition.transitions.label.placeholder': 'Go to Portal',
    'config.condition.isDetailPageEnabled.title': 'Enable Default Destination (Record Detail Page)',
    'config.condition.isDetailPageEnabled.description':
      'When enabled, the default destination (record detail page) can also be selected in addition to the configured destinations.',
    'config.condition.isDetailPageEnabled.label': 'Enable Default Destination',
    'config.condition.detailPageButtonLabel.title': 'Label for Default Destination',
    'config.condition.detailPageButtonLabel.description':
      'Set the label to display on the button for the default destination (record detail page).',
    'config.condition.detailPageButtonLabel.label': 'Button Label',
    'config.condition.detailPageButtonLabel.placeholder': 'Go to Record Detail',
    'config.condition.isDialogHidden.title': 'Hide Selection Dialog',
    'config.condition.isDialogHidden.description':
      'When enabled, the dialog to select the destination when saving a record will not be displayed. The record will always be redirected to the first configured URL.',
    'config.condition.isDialogHidden.label': 'Hide Selection Dialog',
    'config.condition.dialogTitle.title': 'Dialog Title',
    'config.condition.dialogTitle.description':
      'Set the title to display in the destination selection dialog.',
    'config.condition.dialogTitle.label': 'Dialog Title',
    'config.condition.dialogDescription.title': 'Dialog Description',
    'config.condition.dialogDescription.description':
      'Set the description to display in the destination selection dialog.',
    'config.condition.dialogDescription.label': 'Description',

    'config.sidebar.tab.label': 'Settings',
    'config.button.save': 'Save Settings',
    'config.button.return': 'Return to Plugin List',
    'config.toast.save': 'Settings saved',
    'config.toast.reset': 'Settings reset',
    'config.toast.import': 'Settings imported',
    'config.toast.export': 'Plugin settings exported',
    'config.error.root':
      'The root element does not exist in the plugin HTML. To render the plugin settings, an element with id="settings" is required.',
    'config.error.import': 'Failed to import settings. Please check the file for any errors.',
    'config.error.export': 'Failed to export plugin settings. Please contact the plugin developer.',
    'desktop.dialogtrigger.title': 'Plugin is enabled',
    'desktop.dialogtrigger.content': 'Click to view event details',
    'desktop.dialog.title': 'Plugin Settings',
  },
  es: {
    'config.condition.trigger.title': 'Título del disparador',
    'config.condition.trigger.description': 'Establecer el momento para habilitar este complemento',
    'config.condition.trigger.label': 'Disparador',
    'config.condition.transitions.title': 'Transiciones',
    'config.condition.transitions.description':
      'Establecer los destinos seleccionables al guardar un registro',
    'config.condition.transitions.type.label': 'Tipo de transición',
    'config.condition.transitions.href.label': 'URL de destino',
    'config.condition.transitions.href.placeholder': '/k/',
    'config.condition.transitions.label.label': 'Etiqueta del botón',
    'config.condition.transitions.label.placeholder': 'Ir al portal',
    'config.condition.isDetailPageEnabled.title':
      'Habilitar destino predeterminado (página de detalles del registro)',
    'config.condition.isDetailPageEnabled.description':
      'Cuando está habilitado, también se puede seleccionar el destino predeterminado (página de detalles del registro) además de los destinos configurados.',
    'config.condition.isDetailPageEnabled.label': 'Habilitar destino predeterminado',
    'config.condition.detailPageButtonLabel.title': 'Etiqueta para el destino predeterminado',
    'config.condition.detailPageButtonLabel.description':
      'Establecer la etiqueta para mostrar en el botón del destino predeterminado (página de detalles del registro).',
    'config.condition.detailPageButtonLabel.label': 'Etiqueta del botón',
    'config.condition.detailPageButtonLabel.placeholder': 'Ir a detalles del registro',
    'config.condition.isDialogHidden.title': 'Ocultar diálogo de selección',
    'config.condition.isDialogHidden.description':
      'Cuando está habilitado, no se mostrará el diálogo para seleccionar el destino al guardar un registro. El registro siempre se redirigirá a la primera URL configurada.',
    'config.condition.isDialogHidden.label': 'Ocultar diálogo de selección',
    'config.condition.dialogTitle.title': 'Título del diálogo',
    'config.condition.dialogTitle.description':
      'Establecer el título para mostrar en el diálogo de selección de destino.',
    'config.condition.dialogTitle.label': 'Título del diálogo',
    'config.condition.dialogDescription.title': 'Descripción del diálogo',
    'config.condition.dialogDescription.description':
      'Establecer la descripción para mostrar en el diálogo de selección de destino.',
    'config.condition.dialogDescription.label': 'Descripción',

    'config.sidebar.tab.label': 'Configuración',
    'config.button.save': 'Guardar configuración',
    'config.button.return': 'Volver a la lista de complementos',
    'config.toast.save': 'Configuración guardada',
    'config.toast.reset': 'Configuración restablecida',
    'config.toast.import': 'Configuración importada',
    'config.toast.export': 'Configuración del complemento exportada',
    'config.error.root':
      'El elemento raíz no existe en el HTML del complemento. Para renderizar la configuración del complemento, se requiere un elemento con id="settings".',
    'config.error.import':
      'Error al importar la configuración. Por favor, revise el archivo en busca de errores.',
    'config.error.export':
      'Error al exportar la configuración del complemento. Por favor, contacte al desarrollador del complemento.',
    'desktop.dialogtrigger.title': 'El complemento está habilitado',
    'desktop.dialogtrigger.content': 'Haz clic para ver los detalles del evento',
    'desktop.dialog.title': 'Configuración del complemento',
  },
  zh: {
    'config.condition.trigger.title': '触发器标题',
    'config.condition.trigger.description': '设置启用此插件的时机',
    'config.condition.trigger.label': '触发器',
    'config.condition.transitions.title': '转换目标',
    'config.condition.transitions.description': '设置保存记录时可选择的目标',
    'config.condition.transitions.type.label': '转换类型',
    'config.condition.transitions.href.label': '目标URL',
    'config.condition.transitions.href.placeholder': '/k/',
    'config.condition.transitions.label.label': '按钮标签',
    'config.condition.transitions.label.placeholder': '转到门户',
    'config.condition.isDetailPageEnabled.title': '启用默认目标（记录详细页面）',
    'config.condition.isDetailPageEnabled.description':
      '启用后，除了配置的目标外，还可以选择默认目标（记录详细页面）。',
    'config.condition.isDetailPageEnabled.label': '启用默认目标',
    'config.condition.detailPageButtonLabel.title': '默认目标标签',
    'config.condition.detailPageButtonLabel.description':
      '设置在默认目标（记录详细页面）按钮上显示的标签。',
    'config.condition.detailPageButtonLabel.label': '按钮标签',
    'config.condition.detailPageButtonLabel.placeholder': '转到记录详细页面',
    'config.condition.isDialogHidden.title': '隐藏选择对话框',
    'config.condition.isDialogHidden.description':
      '启用后，保存记录时不会显示选择目标的对话框。记录将始终重定向到第一个配置的URL。',
    'config.condition.isDialogHidden.label': '隐藏选择对话框',
    'config.condition.dialogTitle.title': '对话框标题',
    'config.condition.dialogTitle.description': '设置在目标选择对话框中显示的标题。',
    'config.condition.dialogTitle.label': '对话框标题',
    'config.condition.dialogDescription.title': '对话框描述',
    'config.condition.dialogDescription.description': '设置在目标选择对话框中显示的描述。',
    'config.condition.dialogDescription.label': '描述',

    'config.sidebar.tab.label': '设置',
    'config.button.save': '保存设置',
    'config.button.return': '返回插件列表',
    'config.toast.save': '设置已保存',
    'config.toast.reset': '设置已重置',
    'config.toast.import': '导入设置信息',
    'config.toast.export': '导出插件设置信息',
    'config.error.root': '插件的HTML中不存在根元素。要渲染插件设置，需要一个id="settings"的元素。',
    'config.error.import': '导入设置信息失败，请检查文件是否有误。',
    'config.error.export': '导出插件设置信息失败。请联系插件开发者。',
    'desktop.dialogtrigger.title': '插件已启用',
    'desktop.dialogtrigger.content': '单击以查看事件详细信息',
    'desktop.dialog.title': '插件设置信息',
  },
} as const;

export type Language = keyof typeof ui;

export const defaultLang = 'ja' satisfies Language;

const isSupportedLang = (lang: string): lang is Language => lang in ui;

/**
 * 指定された言語に対応する翻訳関数を返します。
 * @param lang - 言語のキー
 * @returns 指定された言語に対応する翻訳関数
 */
export function useTranslations(lang: string = defaultLang) {
  const validLang = isSupportedLang(lang) ? lang : defaultLang;

  return function t(key: keyof (typeof ui)[typeof defaultLang], ...args: string[]): string {
    /* eslint @typescript-eslint/ban-ts-comment: 0 */
    // @ts-ignore デフォルト言語以外の設定が不十分な場合は、デフォルト言語の設定を使用します
    let translation: string = ui[validLang][key] ?? ui[defaultLang][key];

    args.forEach((arg, index) => {
      translation = translation.replace(`{${index}}`, arg);
    });

    return translation;
  };
}

export const t = useTranslations(LANGUAGE as Language);
