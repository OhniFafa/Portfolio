var ResumeData = {
  Name: "Ohni Tsai", 
  Title: "Software Engineer", 
  Summary: "I possess experience with full stack web developement. <br>As a programmer, I enjoy solving problems and creating new things by coding. At the same time, I devote myself to coding cleanly. <br>The following are my faiths: <br>\"Do things interesting or useful.\" - In leisure time, I love learning new things out of interest or usefulness.<br>\"More sensible partner, much easier communication.\" - In company, I usally shared knowledge and mentored freshmen. <br>\"Do right things, then do things right. And ensure the 'right' is right.\" -  So, I become a novice of Test-Driven-Development recently.", 
  Email: "leontsai218@outlook.com", 
  LinkedInUrl: "https://www.google.com", 
  Skills: {
    Languages: {
      Title: "Program Languages", 
      Topic: "lang", 
      List: [
        { Name: "C#.NET", Level: 4.5, LevelDesc: "Proficient" }, 
        { Name: "JavaScript", Level: 4, LevelDesc: "Proficient" }, 
        { Name: "jQuery", Level: 4.5, LevelDesc: "Proficient" }, 
        { Name: "HTML / Pug", Level: 4, LevelDesc: "Proficient" }, 
        { Name: "CSS / Sass", Level: 4, LevelDesc: "Proficient" }, 
        { Name: "SQL / T-SQL", Level: 3.5, LevelDesc: "Skilled" }, 
        { Name: "Java", Level: 2.5, LevelDesc: "Skilled" }, 
        { Name: "C", Level: 1.5, LevelDesc: "Used" }, 
      ]
    }, 
    Techniques: {
      Title: "Techniques", 
      Topic: "tech", 
      List: [
        { Name: "ASP.NET MVC" }, 
        { Name: "Bootstrap" }, 
        { Name: "Vue.js" }, 
        { Name: "Kendo UI" }, 
        { Name: "WinForm" }, 
        { Name: "Test-Driven-Development" }
      ]
    }, 
    Tools: {
      Title: "Tools", 
      Topic: "tool", 
      List: [
        { Name: "MS SQL Server", Type: "DB" },
        { Name: "MySQL", Type: "DB" }, 
        { Name: "SonarQube", Type: "QA" }, 
        { Name: "SonarLint", Type: "QA" }, 
        { Name: "Resharper", Type: "QA" }, 
        { Name: "Jenkins", Type: "CI" }, 
        { Name: "SVN", Type: "Revision Control" }, 
        { Name: "Git", Type: "Revision Control" }, 
        { Name: "Visual Studio", Type: "Editor" }, 
        { Name: "Visual Studio Code", Type: "Editor" }, 
        { Name: "Codepen.io", Type: "Editor" }, 
      ]
    }
  }, 
  Experiences: [
    {
      Year: 2008, 
      Events: [
        {
          Description: "President",
          Organization: "Pop Dance Club, National Cheng Kung University", 
          Location: "Taiwan", 
          Display: false
        }
      ]
    }, 
    {
      Year: 2009, 
      Events: [
      ]
    }, 
    {
      Year: 2011, 
      Events: [
        {
          IconClass: "fa fa-graduation-cap", 
          Description: "Bachelor of Science (B.S.)",
          Organization: "Computer Science & Information Engineering, <br>National Cheng Kung University", 
          Link: "http://www.csie.ncku.edu.tw/ncku_csie/", 
          Location: "Taiwan", 
          Display: true
        }, 
        {
          Description: "Walking around Taiwan",
          Detail: "1200 KM / 43 Days", 
          Location: "Taiwan", 
          Display: false
        }
      ]
    },
    {
      Year: 2012, 
      Events: [
        {
          Description: "Mandatory Military Service",
          Organization: "Taiwan (R.O.C.) Armed Forces", 
          Location: "Taiwan", 
          Display: false
        }
      ]
    },
    {
      Year: 2013, 
      Events: [
      ]
    }, 
    {
      Year: 2014, 
      Events: [
        {
          IconClass: "fa fa-briefcase", 
          Description: "Outsourced Programmer",
          Organization: "Chen-Yo Technology Co.", 
          Link: "http://www.chenyo-tech.com.tw/", 
          Location: "Taiwan", 
          Display: false
        }, 
        {
          Description: "Presenter in International Conference",
          Detail: "\"Construction of an Interactive Behavioral and Feature Structure Model for Facebook,\" IEEM, 2014", 
          Organization: "Industrial Engineering and Engineering Management", 
          Link: "http://www.ieem.org/public.asp?page=home.htm", 
          Location: "Malaysia", 
          Display: false
        }
      ]
    }, 
    {
      Year: 2015, 
      Events: [
        {
          IconClass: "fa fa-briefcase", 
          Description: "Part-time Software Engineer",
          Organization: "BUILDER Technology Co.", 
          Link: "http://www.buildeab.com.tw/index.html", 
          Location: "Taiwan", 
          Display: false
        }, 
        {
          IconClass: "fa fa-graduation-cap", 
          Description: "Master of Science (M.S.)",
          Detail: "\"Development of an Approach for Automatically Classifying User's Personality Type by Mining Interactions in Facebook,\" NCKU, 2015.", 
          Organization: "Institue of Manufacturing Information & Systems, <br>National Cheng Kung University", 
          Link: "http://www.imis.ncku.edu.tw/index.php?Lang=zh-tw", 
          Location: "Taiwan", 
          Display: true
        }, 
        {
          Description: "Exchange Student",
          Organization: "Shanghai Jiao Tong University", 
          Link: "https://www.sjtu.edu.cn/", 
          Location: "China", 
          Display: false
        }
      ]
    }, 
    {
      Year: 2016, 
      Events: [
        {
          IconClass: "fa fa-briefcase", 
          Description: "Programmer",
          Organization: "Galaxy Software Services Co.", 
          Link: "https://www.gss.com.tw/", 
          Location: "Taiwan", 
          Display: true
        }, 
        {
          IconClass: "fa fa-briefcase", 
          Description: "Program Analyst",
          Organization: "Galaxy Software Services Co.", 
          Link: "https://www.gss.com.tw/", 
          Location: "Taiwan", 
          Display: true
        }, 
        {
          IconClass: "fa fa-briefcase", 
          Description: "Mentor of 5 Freshmen",
          Organization: "Galaxy Software Services Co.", 
          Link: "https://www.gss.com.tw/", 
          Location: "Taiwan", 
          Display: false
        }
      ]
    },
    {
      Year: 2019
    }, 
  ], 
  Projects: [
    {
      Year: 2016, 
      Events: [
        {
          Description: "Taiwan Ministry of Science and Technology (MOST) External & Internal System [Customized Project]",
          Detail: "A website system for public users such as professors & researchers submiting academic plans while MOST internal users managing data, reviewing projects and assinging tasks.", 
          Roles: [
            "Full stack developer", 
            "Person responsible for importing i18n", 
          ], 
          Features: [
            "ASP.NET MVC (C#)", 
            "JavaScript + jQuery + Kendo UI", 
            "Using kits such as NPOI, NLog etc."
          ], 
        }
      ]
    }, 
    {
      Year: 2017, 
      Events: [
        {
          Description: "Official Document System [Product & Customized Project]", 
          Detail: "A website system for organizations such as the Government departments, banks, large companies etc. processing official document online.", 
          Roles: [
            "Full stack developer of product", 
            "Main developer in project team", 
            "Person responsible for importing CI in project team"
          ], 
          Features: [
            "ASP.NET MVC (C#)", 
            "JavaScript + jQuery + Kendo UI", 
            "Multiple Layers Framework.", 
            "Using kits such as Spring.Net Framework (DI), Quartz.NET (Schedule), DevExpress (Report), Elmah (Log) etc.", 
            "Customized project are based on the product. Using SVN Branch/Merge to control."
          ], 
        }, 
      ]
    }, 
    {
      Year: 2018, 
      Events: [
        {
          Description: "Repository System [SOHO Project]",
          Detail: "A website system for managing inventory information. This project involves issues such as Requirement Analysis / System Analysis / System Design / Database Schema Design / Website Development / Envirenment Building / Data Backup etc.", 
          Roles: [
            "Designer",
            "Analyst", 
            "Developer"
          ], 
          Features: [
            "ASP.NET MVC (C#)", 
            "JavaScript + jQuery + Bootstrap", 
            "MS SQL Server", 
            "Multiple Layers Framework.", 
            "Using open source resources.", 
            "Using Windows Task Scheduler & bat scripts to implement data auto-encryption & auto-backup on Google Drive."
          ]
        }
      ]
    },
    {
      Year: 2019, 
      Events: []
    }
  ]
}

var vm = new Vue({
  el: "#app", 
  data: ResumeData, 
  computed: {
    ToolTypes: function() {
      let types = $(this.Skills.Tools.List).map(function() {
        return this.Type;
      });
      
      return Array.from(new Set(types));
    }
  }, 
  methods: {
    HideContent: function(ref) {
      $(this.$refs[ref]).toggleClass("hidden")
      $(this.$refs[ref]).next("ul").slideToggle(300);      
    }, 
    ShowEvent: function(e) {
      e.Display = true;
    }, 
    HideEvent: function(e) {
      e.Display = false;
    }
  }
})