//@ts-check
const hp = 'https://konomi.app';
const cdn = 'https://kintone-plugin.konomi.app';
const key = 'redirect-after-save';

/** @satisfies { Plugin.Meta.Config } */
export default /** @type { const } */ ({
  id: `ribbit-kintone-plugin-${key}`,
  pluginReleasePageUrl: `https://ribbit.konomi.app/kintone-plugin/`,
  server: {
    port: 34801,
  },
  lint: {
    build: false,
  },
  manifest: {
    base: {
      manifest_version: 1,
      version: '1.2.0',
      type: 'APP',
      name: {
        en: 'Record Redirect After Save Plugin',
        ja: 'レコード保存後ページ遷移プラグイン',
        zh: '记录保存后重定向插件',
        'zh-TW': '記錄保存後重定向插件',
        es: 'Complemento de redirección después de guardar el registro',
        'pt-BR': 'Plugin de redirecionamento após salvar o registro',
        th: 'ปลั๊กอินเปลี่ยนเส้นทางหลังบันทึกระเบียน',
      },
      description: {
        en: 'A plugin that displays a dialog to redirect to a different page after saving a record, instead of the record detail page.',
        ja: 'レコードの保存が完了した際に、レコード詳細画面ではなく別の画面へ遷移するダイアログを表示するプラグインです',
        zh: '一个在保存记录后显示对话框以重定向到其他页面的插件，而不是记录详细页面。',
        'zh-TW': '一個在保存記錄後顯示對話框以重定向到其他頁面的插件，而不是記錄詳細頁面。',
        es: 'Un complemento que muestra un cuadro de diálogo para redirigir a una página diferente después de guardar un registro, en lugar de la página de detalles del registro.',
        'pt-BR':
          'Um plugin que exibe uma caixa de diálogo para redirecionar para uma página diferente após salvar um registro, em vez da página de detalhes do registro.',
        th: 'ปลั๊กอินที่แสดงกล่องโต้ตอบเพื่อเปลี่ยนเส้นทางไปยังหน้าอื่นหลังจากบันทึกระเบียน แทนที่จะเป็นหน้ารายละเอียดระเบียน',
      },
      icon: 'icon.png',
      homepage_url: { ja: hp, en: hp },
      desktop: { js: [`${cdn}/common/desktop.js`], css: [`${cdn}/common/desktop.css`] },
      mobile: { js: [`${cdn}/common/desktop.js`], css: [`${cdn}/common/desktop.css`] },
      config: {
        html: 'config.html',
        js: [`${cdn}/common/config.js`],
        css: [`${cdn}/common/config.css`],
        required_params: [],
      },
    },
    prod: {
      desktop: { js: [`${cdn}/${key}/desktop.js`], css: [`${cdn}/${key}/desktop.css`] },
      mobile: { js: [`${cdn}/${key}/desktop.js`], css: [`${cdn}/${key}/desktop.css`] },
      config: { js: [`${cdn}/${key}/config.js`], css: [`${cdn}/${key}/config.css`] },
    },
    standalone: {
      desktop: { js: ['desktop.js'], css: ['desktop.css'] },
      mobile: { js: ['desktop.js'], css: ['desktop.css'] },
      config: { js: ['config.js'], css: ['config.css'] },
    },
  },
});
