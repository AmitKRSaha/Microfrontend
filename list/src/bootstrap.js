let appName="List Application";
import dataList from '../../DB/data.json';
import _ from 'lodash';

let size = _.size(dataList.list);

for(let i = 0; i< 3; i++){
    appName += `<div onclick="javascript:window.location.href='?list_id=${dataList.list[i].id}'">${dataList.list[i].title}</div>`

}

appName += `Size   ${size}`

document.getElementById('dev-list').innerHTML = appName;