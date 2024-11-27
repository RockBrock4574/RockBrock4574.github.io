window.onload = async function () {
    var json = "cit5students.json";
    var response = await fetch(json);
    if(response.ok) {
        
        
        var studentsArray = await response.json();
        
        document.getElementById('CIT').onclick = function () {
            var arraytable = document.getElementById('arraytable');//make variable to append the table
            arraytable.innerHTML = '';//clear the div for anti-concatenation purposes
            
            var citStudents = studentsArray.filter(student => student.major === 'CIT');
            var templateText = document.getElementById('text-template').innerHTML;
            var compiledTemplateText = Handlebars.compile(templateText);
            compiledHTML = compiledTemplateText({rows: citStudents});
            document.getElementById('arraytable').innerHTML = compiledHTML;
        }



        document.getElementById('BUS').onclick = function () {
            var arraytable = document.getElementById('arraytable');//make variable to append the table
            arraytable.innerHTML = '';//clear the div for anti-concatenation purposes
            
            var busStudents = studentsArray.filter(student => student.major === 'BUS');
            var templateText = document.getElementById('text-template').innerHTML;
            var compiledTemplateText = Handlebars.compile(templateText);
            compiledHTML = compiledTemplateText({rows: busStudents});
            document.getElementById('arraytable').innerHTML = compiledHTML;
        }
    }
    else {
        document.querySelector('#arraytable').innerHTML = "Data not found";
    }

}

/*
window.onload = async function () {
 
    fetch('cit5students.json')
    .then(response => response.json())
    .then(data => {
        const studentsArray = data;

        console.log(studentsArray);

        const source = document.getElementById('text-template').innerHTML;
        const template = Handlebars.compile(source); // compile the template

        
        function renderStudents(filteredStudents) {
            const context = { students: filteredStudents };  // passing the array to the template
            const html = template(context);  // generate HTML using the Handlebars template
            document.getElementById('arraytable').innerHTML = html;  // insert HTML into the div
        }

        renderStudents(studentsArray);

        
        document.getElementById('CIT').onclick = function () {
            const citStudents = studentsArray.filter(student => student.major === 'CIT');
            renderStudents(citStudents);  // render only CIT students
        }

        
        document.getElementById('BUS').onclick = function () {
            const busStudents = studentsArray.filter(student => student.major === 'BUS');
            renderStudents(busStudents);  // render only BUS students
        }
    })
    .catch(err => console.log(err));
}
*/
/*
window.onload = function () {
    fetch('cit5students.json')
    .then(response => response.json())
    .then(data => {
        const studentsArray = data;
        console.log(studentsArray);
    })
    .catch(err => console.log(err));
    
    const source = document.getElementById('text-template').innerHTML; //get the handlebars template

    const template = Handlebars.compile(source); //compile template
    function renderStudents(filteredStudents) {
        const context = { students: filteredStudents };  // gives the filtered array to the templaye
        const html = template(context);  //create an html using Handlebars
        document.getElementById('arraytable').innerHTML = html;  // insert the html into the div container
    }
    
    renderStudents(studentsArray);
    
    
    
    document.getElementById('CIT').onclick = function () {
        const citStudents = studentsArray.filter(student => student.major === 'CIT');
        renderStudents(citStudents);  // render only CIT students




        var arraytable = document.getElementById('arraytable');//make variable to append the table
        arraytable.innerHTML = '';//clear the div for anti-concatenation purposes
        
    }
   
    document.getElementById('BUS').onclick = function () {
        const busStudents = studentsArray.filter(student => student.major === 'BUS');
        renderStudents(busStudents);  // render only business students



        var arraytable = document.getElementById('arraytable');//make variable to append the table
        arraytable.innerHTML = '';//clear the div for anti-concatenation purposes
        
    }
}
*/