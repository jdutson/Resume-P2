// JavaScript Document
var bio = {
    "name": 'Jamie Dutson',
    "role": "Front-End Web Developer",
   " contacts": {
       " mobile": "(435)979-0894",
        "email": "jamiedutson2@gmail.com",
        "github": "jdutson",
        "linkedin": "Jamie L Dutson",
        "location": "Salt Lake City, Utah"
	},
    "bioPic": "images/Me.jpg",
    "welcomeMessage": "Adaptive, Dynamic, and Multi-faceted; I have a diverse background and am passionate about customer satisfaction and responsive design. I was drawn to Web Development because of its mix of code and design. I'm creative and efficient, right and left brained, and I love figuring things out and making something both beautiful and practical.",
    "skills": ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap", "Git", "GitHub", "Windows", "DreamWeaver", "WordPress", "Excel"],
	"display": function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for(skill in bio.skills){
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skillsItem").append(formattedSkill);    
            }
		};
		var cntfoMobile = HTMLmobile.replace(/%data%/gi, bio.contacts.mobile);
		var cntfoTwitter = HTMLtwitter.replace(/%data%/gi, bio.contacts.mobile);
		var cntfoGithub = HTMLgithub.replace(/%data%/gi, bio.contacts.github);
        var cntfoLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var cntfoLinkedin = HTMLlinkedin.replace('%data%', bio.contacts.linkedin);
        var cntfoEmail = HTMLemail.replace(/%data%/gi, bio.contacts.email);
        var formattedContactnfo = cntfoMobile + cntfoEmail + cntfoLinkedin + cntfoGithub + cntfoTwitter + cntfoLocation;
		$("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedwelcomeMsg);
		$("#topContacts, #footerContacts").append(formattedContactnfo);
		$("#footerContacts li a").removeClass("contact-tpp");
	}
};

var work = {
        "jobs": [
		{
            "employer": "OneExchange",
            "title": "Customer Care Coordinator",
            "location": "South Jordan, Utah",
            "dates": "2015",
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
        }],
		"display": function() {
		for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work=entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		if(work.jobs[job].duties.length > 0) {
			$(".work-entry: last").append(HTMLworkdutiesStart);
			for(duty in work.jobs[job].duties){
				var formattedDuties = HTMLworkDuties.replace("%data%", work.jobs[job].duties[duty]);
				}
            };
            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);          
            $('.work-entry:last').append(formattedDescription);
        }
    }
};
				
var education = {
    "schools": [{
        "name": "Snow College",
        "location": "Ephraim, UT, US",
        "degree": "Associate of Science",
        "major": "General Studies"
    }, {
        "name": "Western Governors University",
        "location": "online",
        "degree": "Bachelor's Business Management"
    }],
	"onlineCourses": [{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "2015",
		'url': 'https://www.udacity.com/course/intro-to-html-and-css--ud304-nd'
        },
        {
            'title': 'Responsive Web Design Fundementals',
            'school': 'Udacity',
            'dates': '2015',
            'url': 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893-nd'
        },
        {
            'title': 'Responsive Images',
            'school': 'Udacity',
            'dates': '2015',
            'url': 'https://www.udacity.com/course/responsive-images--ud882-nd'
        },
		{
            'title': 'JavaScript Syntax',
            'school': 'Udacity',
            'dates': '2015',
            'url': 'https://www.udacity.com/course/javascript-basics--ud804-nd'
        },
		{
            'title': 'Front-End Web Developer Nanodegree',
            'school': 'Udacity',
            'dates': '2015-Current',
            'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
],
	"display": function() {
        for (school in education.schools) {
            var formattedSchool = HTMLschoolName.replace
            ("%data%", education.schools[school].name);
            var formattedSchool = formattedSchool.replace
            ("#", education.schools[school].url);
            var formattedDegree = HTMLschoolDegree.replace
            ("%data%", education.schools[school].degree);
            var formattedSchoolDegree = formattedSchool + formattedDegree;
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolDegree);            
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedMajor);
        };
            $("#education").append(HTMLonlineClasses);

        for (course in education.onlineCourses) {
            var formattedSchool = HTMLonlineSchool.replace
            ("%data%", education.onlineCourses[course].school);
            var formattedTitle = HTMLonlineTitle.replace
            ("%data%", education.onlineCourses[course].title);
            var formattedTitle = formattedTitle.replace
            ("#", education.onlineCourses[course].url);
            var formattedSchoolTitle = formattedTitle + formattedSchool;
            var formattedDates = HTMLonlineDates.replace
            ("%data%", education.onlineCourses[course].dates);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolTitle);
            $(".education-entry:last").append(formattedDates);        
        }
    }
};

var projects = {
    "projects": [
	{
        "title": "Build a Personal Portfolio",
        "dates": "2015",
        "description": "This was one of my very first projects. It shows my ability to code HTML, CSS, and JavaScript. I created a responsive site with clean code.",
        "images": [""],
        "url": ""
	}
    ],
	"display": function() {
        for (project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace
        ("%data%", projects.projects[project].title);
        var formattedTitle = formattedTitle.replace
        ("#", projects.projects[project].url);      
        var formattedDates = HTMLprojectDates.replace
        ("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace
        ("%data%", projects.projects[project].description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);            
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage =HTMLprojectImage.replace
                ("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
    }
};

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});
bio.display();
work.display();
education.display();
projects.display();
