async function getData(selected_major) {
    var response = await fetch('cit5students.json');
    if(response.ok) {
        var data = await response.json();

        // filter data //
        majors = data.filter( (item) => item.major == selected_major );

        var templateText = document.getElementById('tableTemplate').innerHTML;
        var compiledTemplateText = Handlebars.compile(templateText);
        compiledHtml = compiledTemplateText({ rows: data })
        document.getElementById('studentTable').innerHTML = compiledHtml;
    }
    else {
         document.querySelector('#studentTable').innerHTML = "Data not found";
    }
  }
