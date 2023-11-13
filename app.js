<script>
async function getData(selected_major) {
    var response = await fetch('cit5students.json');
    
    if(response.ok) {
        var data = await response.json();

        // filter data //
        //major_choices = data.filter( (item) => Name.major == selected_major );
        major_choices = [] // new array to hold filtered data
        for(i=0, i < data.length; i++) {
            if(data[i].major == selected_major) {major_choices.push(data[i].major);}}
        
       var templateText = document.getElementById('tableTemplate').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);
       compiledHtml = compiledTemplateText({ rows: major_choices })
       document.getElementById('studentTable').innerHTML = compiledHtml;
    }
    else {
        document.querySelector('#studentTable').innerHTML = "Data not found";
    }
  }
    </script>
