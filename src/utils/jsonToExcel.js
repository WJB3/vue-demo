import XLSX from 'xlsx';

function openDownloadDialog(url, saveName) {
    if (typeof url === 'object' && url instanceof Blob) {
        url = URL.createObjectURL(url); // 创建blob地址
    }
    const aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    let event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
}

function sheet2blob(sheet, sheetName) {
    sheetName = sheetName || 'sheet1';
    const workbook = {
        SheetNames: [sheetName],
        Sheets: {}
    };
    workbook.Sheets[sheetName] = sheet; // 生成excel的配置项

    const wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
    };
    const wbout = XLSX.write(workbook, wopts);
    const blob = new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
    }); // 字符串转ArrayBuffer
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

    return blob;
}

/**
 * JSON导出为Excel
 * @param data-导出的数据
 * @param entozh-表头名称的转换{“原表头”：“转换后的表头”}
 * @param title-导出的文件名
 * @constructor
 */

function JsonToExcel(data, entozh, title) {
    const nowdata = data;
    const jsona = nowdata.map((item) => Object.keys(item).reduce((newData, key) => {
        const newKey = entozh[key]
        newData[newKey] = item[key]
        return newData
    }, {}));

    const json = jsona.map((item, index) => {
        if (item.hasOwnProperty("undefined")) {
            delete item.undefined
        }
        return { ...item };
    });

    const sheet = XLSX.utils.json_to_sheet(json);

    openDownloadDialog(sheet2blob(sheet), `${title}.xls`);

}

function columns2Object(columns){
    const obj = {};
    if (Array.isArray(columns)) {
      columns.forEach(item => {
        obj[item.dataIndex] = item.title;
      })
    }
    return obj;
  
}
  
export {
    JsonToExcel,
    columns2Object
}