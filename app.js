$('#searchButton').on('click', function () {
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
param = {
'api-key': "923e6d309f1c4014a1ec1d6cc815f321",
};
if ($('#searchTerm').val()) {
param['q'] = $('#searchTerm').val();
}
 
if ($('#startYear').val()) {
param['begin_date'] = $('#startYear').val();
}
if ($('#endYear').val()) {
param['end_date'] = $('#endYear').val();
}
 
url += '?' + $.param(param);
$.ajax({
url: url,
method: 'GET',
}).done(function (result) {
console.log(result.response.docs.length);
for(let i = 0; i < result.response.docs.length; i++){
$('#listContent').append(
`<br>
<div class="card">
<div class="card-header">${result.response.docs[i].snippet}</div>
<div class="card-body">
<blockquote class="blockquote mb-0">
<p>text here</p>
</blockquote>
</div>
<div class="card-footer">
<a href="${result.response.docs[i].web_url}" target="_blank" class="card-link">Read more</a>
</div>
</div>
`);
}
//$('#listContent').text(JSON.stringify(result));
}).fail(function(err) {
throw err;
});
})
 
$('#clearResults').on('click', function () {
$('listContent').empty();
})