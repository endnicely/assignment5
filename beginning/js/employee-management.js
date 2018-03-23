/*eslint-env browser*/
var employee_list;

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function display(employee_list) {
    "use strict";
    var i, html = '';
    $("employeeTableHeader").innerHTML = "Showing " + employee_list.length + " employees";
  

    for (i = 0; i < employee_list.length; i = i + 1) {
       
        html += "<tr><td>" + employee_list[i][0] + "</td><td>" + employee_list[i][1] + "<td>" +  employee_list[i][2] + "</td><td>" +
                "<button class='delete_btn' id='" + i + "'  >" + "delete" + "</button></td></tr>";

    }
    $("employeeTblBody").innerHTML = html;
   
}
var add = function () {
    "use strict";
    var employee = [];
    //Basic validation
    if ($("name").value === "") {
        $("requireName").innerHTML = "Name is required";
        return;
    } else {
        $("requireName").innerHTML = "";
        employee.push($("name").value);
    }
    
    if ($("title").value === "") {
        $("requireTitle").innerHTML = "Title is required";
        return;
    } else {
        $("requireTitle").innerHTML = "";
        employee.push($("title").value);
    }
    
    if ($("extension").value === "") {
        $("requireExt").innerHTML = "Extension is required";
        return;
    } else {
        $("requireExt").innerHTML = "";
        employee.push($("extension").value);
    }
    if (employee.length > 0) {  employee_list.push(employee); }
  
    display(employee_list);
    
};

function del(id) {
    "use strict";
    var index = parseInt(id, 10);
    employee_list.splice(index, 1);
    display(employee_list);
}

      
window.addEventListener("load", function () {
    "use strict";
   
    employee_list = [["Zak Ruvalcaba", "CEO", 3888 ],
                     ["Sally Smith", "VP Sale", 3346 ],
                     [ "Fred Franklin", "Marketing", 3232 ],
                     [ "John Smith", "IT Technician", 3030 ],
                     [ "Jane Caruthers", "Human Resource", 3550]
                    ];
    
    display(employee_list);
    
    $("add").addEventListener("click", add);
    
    $("employeeTblBody").addEventListener("click", function (e) {
        if (e.target.className.match(/delete_btn/)) {
            del(e.target.id);
        }
    });
    
});


