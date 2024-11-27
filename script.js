window.onload = function () {
    document.getElementById('CIT').onclick = async function () {
        var json = "cit5students.json";
        var response = await fetch(json);
        if(response.ok) {
            var studentsArray = await response.json();
            var citStudents = studentsArray.filter(student => student.major === 'CIT');
            var templateText = document.getElementById('text-template').innerHTML;
            var compiledTemplateText = Handlebars.compile(templateText);
            compiledHTML = compiledTemplateText({rows: citStudents});
            document.getElementById('arraytable').innerHTML = compiledHTML;

        }
        else {
            document.querySelector('#arraytable').innerHTML = "Data not found";
        }
        /*
        var arraytable = document.getElementById('arraytable');//make variable to append the table
        arraytable.innerHTML = '';//clear the div for anti-concatenation purposes
        */
    }



    document.getElementById('BUS').onclick = async function () {
        var json = "cit5students.json";
        var response = await fetch(json);
        if(response.ok) {
            var studentsArray = await response.json();
            var busStudents = studentsArray.filter(student => student.major === 'BUS');
            var templateText = document.getElementById('text-template').innerHTML;
            var compiledTemplateText = Handlebars.compile(templateText);
            compiledHTML = compiledTemplateText({rows: busStudents});
            document.getElementById('arraytable').innerHTML = compiledHTML;
    
        }
        /*
        var arraytable = document.getElementById('arraytable');//make variable to append the table
        arraytable.innerHTML = '';//clear the div for anti-concatenation purposes
        */
    }
}
