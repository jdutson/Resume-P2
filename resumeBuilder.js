// JavaScript Document
var bio = {
    "name": 'Jamie Dutson',
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "(435) 979-0894",
        "mobileURL": "",
        "email": "jamiedutson2@gmail.com",
        "emailURL": "mailto:jamiedutson2@gmail.com",
        "github": "jdutson",
        "githubURL": "https://github.com/jdutson",
        "linkedin": "Jamie L Dutson",
        "linkedinURL": "https://www.linkedin.com/in/jamiedutson",
        "location": "Salt Lake City, Utah",
        "locationURL": "http://www.ci.slc.ut.us/"
    },
    "bioPic": "images/Me.jpg",
    "welcomeMessage": "Adaptive, Dynamic, and Multi-faceted; I have a diverse background and am passionate about customer satisfaction and responsive design. I was drawn to Web Development because of its mix of code and design. I'm creative and efficient, right and left brained, and I love figuring things out and making something both beautiful and practical.",
    "skills": ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap", "Git", "GitHub", "Windows", "DreamWeaver", "WordPress", "Excel"],
};
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedbioMobile);
    $("#footerContacts").append(formattedbioMobile);
    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedbioEmail = formattedbioEmail.replace("#", bio.contacts.emailURL);
    $("#topContacts").append(formattedbioEmail);
    $("#footerContacts").append(formattedbioEmail);
    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedbioGithub = formattedbioGithub.replace("#", bio.contacts.githubURL);
    $("#topContacts").append(formattedbioGithub);
    $("#footerContacts").append(formattedbioGithub);
    var formattedbioLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedbioLinkedin = formattedbioLinkedin.replace("#", bio.contacts.linkedinURL);
    $("#topContacts").append(formattedbioLinkedin);
    $("#footerContacts").append(formattedbioLinkedin);
    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioLocation = formattedbioLocation.replace("#", bio.contacts.locationURL);
    $("#topContacts").append(formattedbioLocation);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
        $("#skills").append(formattedSkill);
    }
};

var work = {
    "jobs": [{
        "employer": "OneExchange",
        "title": "Customer Care Coordinator",
        "location": "South Jordan, Utah",
        "dates": "2015-current",
        "description": "I work on projects to improve customer service satisfaction. We build and report on surveys, review processes, and improve quality management"
    }, {
        "employer": "Pappa John's Pizza",
        "title": "Delivery Driver",
        "location": "Riverton, Utah",
        "dates": "2014-2015",
        "description": "I delivered Pizza!"
    }, {
        "employer": "Vivint.",
        "title": "Team Leader, Supervisor, Lead Supervisor",
        "location": "Provo, Utah",
        "dates": "2013-2014",
        "description": "I worked in the scheduling department as a Scheduling Professional. I was promoted to a Team Leader, then to a Supervisor, and eventually a Lead Supervisor. I led team meeting, individual coachings, conducted meetings with other business leaders, and helped create policy and procedure for our department."
    }, {
        "employer": "Utah Department of Agriculture",
        "title": "Egg Inspector",
        "location": "Delta, Utah",
        "dates": "2012",
        "description": "I traveled to Egg Farms across the State of Utah and performed quality checks to ensure the eggs met USDA standards.",
    }]
};
work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
};

var education = {
    "schools": [{
        "name": "Snow College",
        "location": "Ephraim, UT",
        "degree": "Associate of Science",
        "major": "General Studies",
        "dates": "2005-2006",
        "url": "https://www.snow.edu/"
    }, {
        "name": "Western Governors University",
        "location": "Salt Lake City, UT",
        "degree": "Bachelor's Degree",
        "major": "Business Management",
        "dates": "2012-2015",
        "url": "http://www.wgu.edu/"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd/"
    }, {
        "title": "Responsive Web Design Fundementals",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893-nd/"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/responsive-images--ud882-nd/"
    }, {
        "title": "JavaScript Fundamentals",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/javascript-basics--ud804-nd/"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015-Current",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }]
};
education.display = function() {
    for (school in education.schools) {
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchool = formattedSchool.replace("#", education.schools[school].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDegree = formattedSchool + formattedDegree;
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (onlineCourse in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[onlineCourse].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedURL);

    }
};

var projects = {
    "projects": [{
        "title": "Build a Personal Portfolio",
        "dates": "2015",
        "description": "This resume was one of my very first projects. It shows my ability to code HTML, CSS, and JavaScript. I created a responsive site with clean code.",
        "images": [""],
        "url": ""
    }]
};
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();
