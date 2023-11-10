<script>
  window.onlaod = async.function() {
    var url = "cit5students.json";
    var response = await fetch(url);
    if(response.ok) {
        var data = await response.json();

        var templateText = document.getElementById('tableTemplate').innerHTML;
        var compiledTemplateText = Handlebars.compile(templateText);
        compiledHtml = compiledTemplateText({ rows: data })
        document.getElementById('studentTable').innerHTML = compiledHtml;
    }
    else {
         document.querySelector('#studentTable').innerHTML = "Data not found";
    }
  }
</script>
