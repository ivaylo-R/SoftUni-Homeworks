function solve(input) {
    let students = JSON.parse(input);

    let properties = students[0];

    let html = '&lt;table&gt;';
    html += `<tr>${Object.keys(properties).map(x => `<th>${x}</th>`).join('')}</tr>`;
    students.map(student => {
        html += `<tr>`;
        html += Object.values(student).map(x => `<td>${x}</td>`).join('');
        html += `</tr>`;
    });
    html += '&lt;table&gt;';

    html.replace('&lt;','<');
    html.replace('&gt;','>');
    console.log(html);
    return html;
}



solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
