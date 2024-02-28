var yearFilter = "";
var subjectFilter = "";
var projectFilter = "";

function updateList() {
    var filter, a, txtValue, projectitems, projectbadges, projectyear, projectsubject, projecttype;
    // Update the filter list to display which ones are selected ------------------------------------
    // Year filter
    filter = document.querySelectorAll('#year-filter ul>li>a');
    for (i=0; i<filter.length; i++) {
        if (filter[i].textContent == yearFilter) {
            filter[i].classList.add("filterfocus")
        } else {
            filter[i].classList.remove("filterfocus")
        }
    }
    // Subject filter
    filter = document.querySelectorAll('#subject-filter ul>li>a');
    for (i=0; i<filter.length; i++) {
        if (filter[i].textContent == subjectFilter) {
            filter[i].classList.add("filterfocus")
        } else {
            filter[i].classList.remove("filterfocus")
        }
    }
    // Project filter
    filter = document.querySelectorAll('#project-filter ul>li>a');
    for (i=0; i<filter.length; i++) {
        if (filter[i].textContent == projectFilter) {
            filter[i].classList.add("filterfocus")
        } else {
            filter[i].classList.remove("filterfocus")
        }
    }
    // Only display projects according to filter ------------------------------------
    projectitems = document.getElementsByClassName("project-item");
    for (i=0; i<projectitems.length; i++) {
        projectbadges = projectitems[i].getElementsByClassName("project-item-badges")[0];
        projectyear = projectbadges.getElementsByClassName("projectyear")[0].textContent;
        projectsubject = projectbadges.getElementsByClassName("projectsubject")[0].textContent;
        projecttype = projectbadges.getElementsByClassName("projecttype")[0].textContent;
        if ((yearFilter == "" || projectyear == yearFilter) && (subjectFilter == "" || projectsubject == subjectFilter) && (projectFilter == "" || projecttype == projectFilter)) {
            projectitems[i].style.display = "";
        } else {
            projectitems[i].style.display = "none";
        }
    }
}

function filterProjects(filterType, filterValue) {
    if (filterType == "year") {
        if (yearFilter == filterValue) {
            yearFilter = "";
        } else {
            yearFilter = filterValue;
        }
    } else if (filterType == "subject") {
        if (subjectFilter == filterValue) {
            subjectFilter = "";
        } else {
            subjectFilter = filterValue;
        }
    } else {
        if (projectFilter == filterValue) {
            projectFilter = "";
        } else {
            projectFilter = filterValue;
        }
    }
    updateList();
}