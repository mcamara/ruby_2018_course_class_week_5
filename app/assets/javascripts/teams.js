$(document).on('turbolinks:load', function () {
  // alert("page has loaded!");
  reloadTeamsTable();
  $('#team-form').on('ajax:success', function (event) {
    var data, ref;
    ref = event.detail, data = ref[0];
    debugger
    addTeamToTable(data);
    $('#team-form').find("input[type=text], textarea").val("");
  }).on('ajax:error', function (event) {
    var data, ref;
    ref = event.detail, data = ref[0];
    debugger
    alert(data);
  });
});

function reloadTeamsTable() {
  $.get({
    url: '/teams.json'
  }).done(function(teamList) {
    teamList.forEach(element => {
      addTeamToTable(element);
    });
  })
}

function addTeamToTable(team) {
  $('.team-list').append(`<div class="row mt-4">
    <div class="col-md-4">
      <img src="${team.image_url}" alt="${team.name}" class="rounded float-left img-fluid">
    </div>
    <div class="col-md-7 offset-md-1">
      ${team.name}
    </div>
  </div>`);
}
