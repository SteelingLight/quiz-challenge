// Array of questions for the quiz.

let questions = [
    {id:1,
    Question:"JavaScript is case sensitive language.",
    Answers:[
        {"FALSE":false},
        {"TRUE":true}
        ]
    },
    {id:2,
    Question:"Java and JavaScript are the same?",
    Answers:[
        {"FALSE":true},
        {"TRUE":false}
        ]
    },
    {id:3,
    Question:"What is JavaScript?",
    Answers:[
        {"option1":false},
        {"JavaScript is an object-based, lightweight, cross-platform translated language.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:4,
    Question:"What do you understand by hoisting in JavaScript?",
    Answers:[
        {"Hoisting is the default behavior of JavaScript where all the variable and function declarations are moved on top. ":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:5,
    Question:"What is not a feature of JavaScript?",
    Answers:[
        {"Interpreted programming language":false},
        {"Purple":true},
        {"Complementary to HTML":false},
        {"Open source":false},
        {"Cross-platform":false},
        {"Good for the applications which are network-centric":false}
    ]
    },
    {id:6,
    Question:"Who developed JavaScript, and what was the first name of JavaScript?",
    Answers:[
        {"Green":false},
        {"option2":false},
        {"JavaScript was developed by Brendan Eich, who was a Netscape programmer.":true},
        {"option4":false}
        ]
    },
    {id:7,
    Question:"What is not an advantage of JavaScript?",
    Answers:[
        {"Server interaction is less":false},
        {"Feedback to the visitors is immediate":false},
        {"February":true},
        {"Interactivity is high":false},
        {"Interfaces are richeron":false}
        ]
    },
    {id:8,
    Question:"What is an anonymous function?",
    Answers:[
        {"It is a function that has no name. These functions are declared dynamically at runtime using the function operator instead of the function declaration.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:9,
    Question:"Can an anonymous function be assigned to a variable?",
    Answers:[
        {"TRUE":true},
        {"FALSE":false}
        ]
    },
    {id:10,
    Question:"In JavaScript what is an argument object?",
    Answers:[
        {"option1":false},
        {"The variables of JavaScript represent the arguments that are passed to a function.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:11,
    Question:"What is closure?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"In JavaScript, we need closures when a variable which is defined outside the scope in reference is accessed from some inner scope.":true},
        {"option4":false}
        ]
    },
    {id:12,
    Question:"If we want to return the character from a specific index which method is used?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The JavaScript string charAt() method is used to find out a char value present at the specified index. ":true}
        ]
    },
    {id:13,
    Question:"What is the difference between JavaScript and JScript?",
    Answers:[
        {"option1":false},
        {"Netscape provided the JavaScript language. Microsoft changed the name and called it JScript to avoid the trademark issue. In other words, you can say JScript is the same as JavaScript, but Microsoft provides it.":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:14,
    Question:"How to use external JavaScript file?",
    Answers:[
        {'<script type="text/javascript" src="message.js"></script>':true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:15,
    Question:"What is BOM?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"BOM stands for Browser Object Model. It provides interaction with the browser.":true}
        ]
    },
    {id:16,
    Question:"What is DOM?",
    Answers:[
        {"option1":false},
        {"DOM stands for Document Object Model. A document object represents the HTML document. ":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:17,
    Question:"What is the use of history object?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"The history object of a browser can be used to switch to history pages such as back and forward from the current page or another page. There are three methods of history object.":true},
        {"option4":false}
        ]
    },
    {id:18,
    Question:"What is the difference between == and ===?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The == operator checks equality only whereas === checks equality, and data type, i.e., a value must be of the same type.":true}
        ]
    },
    {id:19,
    Question:"How do you write HTML code dynamically using JavaScript?",
    Answers:[
        {"The innerHTML property is used to write the HTML code using JavaScript dynamically.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:20,
    Question:"How to write normal text code using JavaScript dynamically?",
    Answers:[
        {"option1":false},
        {'document.getElementById("mylocation").innerText="This is text using JavaScript";':true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:21,
    Question:"What is not a way to create objects in JavaScript?",
    Answers:[
        {"By Object Constructor":false},
        {"By creating an instance of Object":false},
        {"option3":true},
        {"By object literal":false}
        ]
    },
    {id:22,
    Question:"What is not a way to create an array in JavaScript?",
    Answers:[
        {"By creating an instance of Array":false},
        {"By array literal":false},
        {"By using an Array constructor":false},
        {"option4":true}
        ]
    },
    {id:23,
    Question:"What does the isNaN() function?",
    Answers:[
        {"The isNan() function returns true if the variable value is not a number.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:24,
    Question:'What is the output of 10+20+"30" in JavaScript?',
    Answers:[
        {"option1":false},
        {"3030":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:25,
    Question:'What is the output of "10"+20+30 in JavaScript?',
    Answers:[
        {"option1":false},
        {"option2":false},
        {"102030":true},
        {"option4":false}
        ]
    },
    {id:26,
    Question:"What is the real name of JavaScript?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape.":true}
        ]
    },
    {id:27,
    Question:"How do you set the cursor to wait in JavaScript?",
    Answers:[
        {'The cursor can be set to wait in JavaScript by using the property "cursor".':true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:28,
    Question:"What is this [[[]]]?",
    Answers:[
        {"option1":false},
        {"a three-dimensional array":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:29,
    Question:"What is the difference between View state and Session state?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {'"View state" is specific to a page in a session whereas "Session state" is specific to a user or browser that can be accessed across all pages in the web application.':true},
        {"option4":false}
        ]
    },
    {id:30,
    Question:"What is not a pop-up boxe available in JavaScript?",
    Answers:[
        {"Alert":false},
        {"Confirm":false},
        {"Prompt":false},
        {"option4":true}
        ]
    },
    {id:31,
    Question:"How can we detect OS of the client machine using JavaScript?",
    Answers:[
        {"The navigator.appVersion string can be used to detect the operating system on the client machine.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:32,
    Question:"JavaScript faster than ASP script",
    Answers:[
        {"FALSE":false},
        {"TRUE":true}
        ]
    },
    {id:33,
    Question:"How do you change the background color of HTML document using JavaScript?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {'<script type="text/javascript">document.body.bgColor="pink";</script>':true},
        {"option4":false}
        ]
    },
    {id:34,
    Question:"How to handle exceptions in JavaScript?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"By the help of try/catch block, we can handle exceptions in JavaScript.":true}
        ]
    },
    {id:35,
    Question:'What is the “this” keyword in JavaScript?',
    Answers:[
        {'The “this” keyword is a reference variable that refers to the current object.':true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:36,
    Question:"What is the use of debugger keyword in JavaScript?",
    Answers:[
        {"option1":false},
        {"JavaScript debugger keyword sets the breakpoint through the code itself.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:37,
    Question:"What is the use of Math object in JavaScript?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"The JavaScript math object provides several constants and methods to perform a mathematical operation.":true},
        {"option4":false}
        ]
    },
    {id:38,
    Question:"What is the use of a Date object in JavaScript?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The JavaScript date object can be used to get a year, month and day.":true}
        ]
    },
    {id:39,
    Question:"What is the use of a Number object in JavaScript?",
    Answers:[
        {"The JavaScript number object enables you to represent a numeric value.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:40,
    Question:"What is the use of a Boolean object in JavaScript?",
    Answers:[
        {"option1":false},
        {"The JavaScript Boolean is an object that represents value in two states: true or false.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:41,
    Question:"What is the use of a TypedArray object in JavaScript?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"The JavaScript TypedArray object illustrates an array like a view of an underlying binary data buffer. ":true},
        {"option4":false}
        ]
    },
    {id:42,
    Question:"What is the use of a Set object in JavaScript?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The JavaScript Set object is used to store the elements with unique values.":true}
        ]
    },
    {id:43,
    Question:"What is the use of a WeakSet object in JavaScript?",
    Answers:[
        {"The JavaScript WeakSet object is the type of collection that allows us to store weakly held objects.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:44,
    Question:"What is the use of a Map object in JavaScript?",
    Answers:[
        {"option1":false},
        {"The JavaScript Map object is used to map keys to values.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:45,
    Question:"What are the falsy values in JavaScript?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"Those values which become false while converting to Boolean are called falsy values.":true},
        {"option4":false}
        ]
    },
    {id:46,
    Question:"What is CSS?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"Cascading Style Sheet. ":true}
        ]
    },
    {id:47,
    Question:"What is the origin of CSS?",
    Answers:[
        {"SGML (Standard Generalized Markup Language) is the origin of CSS. ":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:48,
    Question:"Which is not a way to integrate CSS on a web page?",
    Answers:[
        {"Linked/Imported/External method - It is used when you want to make changes on multiple pages.":false},
        {"option2":true},
        {"Embedded/Internal method - It is used to add a unique style to a single document":false},
        {"Inline method - It is used to insert style sheets in HTML document":false}
        ]
    },
    {id:49,
    Question:"What is not an advantage of CSS?",
    Answers:[
        {"Bandwidth":false},
        {"Site-wide consistency":false},
        {"Orange":true},
        {"Page reformatting":false},
        {"Accessibility":false},
        {"Content separated from presentation":false}
        ]
    },
    {id:50,
    Question:"What is not a limitation of CSS?",
    Answers:[
        {"Ascending by selectors is not possible":false},
        {"Limitations of vertical control":false},
        {"No expressions":false},
        {"George":true},
        {"No column declaration":false},
        {"Pseudo-class not controlled by dynamic behavior":false},
        {"Rules, styles, targeting specific text not possible":false}
        ]
    },
    {id:51,
    Question:"What two reasons are background and color separate properties if they should always be set together?",
    Answers:[
        {"The background property is a complex property in CSS, and if it is combined with color, the complexity will further increase and color is an inherited property while the background is not. ":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:52,
    Question:"What is Embedded Style Sheet?",
    Answers:[
        {"option1":false},
        {"An Embedded style sheet is a CSS style specification method used  in an HTML document by using the STYLE element. ":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:53,
    Question:"What is not an advantages of Embedded Style Sheets?",
    Answers:[
        {"You can create classes for use on multiple tag types in the document.":false},
        {"You can use selector and grouping methods to apply styles in complex situations.":false},
        {"Washington":true},
        {"No extra download is required to import the information.":false}
        ]
    },
    {id:54,
    Question:"What is the use of CSS Opacity?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The CSS opacity property is used to specify the transparency of an element. ":true}
        ]
    },
    {id:55,
    Question:"Which command is used for the selection of all the elements of a paragraph?",
    Answers:[
        {"The p[lang] command is used for selecting all the elements of a paragraph.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:56,
    Question:"What is the use of % unit in CSS?",
    Answers:[
        {"option1":false},
        {"It is used for defining percentage values.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:57,
    Question:"What is the property used to specify the background color of an element?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"The background-color property is used to specify the background color of the element. ":true},
        {"option4":false}
        ]
    },
    {id:58,
    Question:"What is the property for controlling the image repetition of the background?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The background-repeat property repeats the background image horizontally and vertically. ":true}
        ]
    },
    {id:59,
    Question:"What is the property for controlling the image position in the background?",
    Answers:[
        {"The background-position property is used to define the initial position of the background image.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:60,
    Question:"What is the use of ruleset?",
    Answers:[
        {"option1":false},
        {"The ruleset is used to identify that selectors can be attached with other selectors. ":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:61,
    Question:"What is the difference between class selectors and id selectors?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"An overall block is given to class selector while id selectors take only a single element differing from other elements. ":true},
        {"option4":false}
        ]
    },
    {id:62,
    Question:"What is RWD?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"Responsive Web Design.":true}
        ]
    },
    {id:63,
    Question:"What are the benefits of CSS sprites?",
    Answers:[
        {"It reduces the number of HTTP requests and hence the loading time.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:64,
    Question:"What is the difference between logical tags and physical tags?",
    Answers:[
        {"option1":false},
        {"Physical tags are referred to as presentational markup while logical tags are useless for appearances.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:65,
    Question:"What is the float property of CSS?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"The CSS float property is used to move the image to the right or left along with the texts to be wrapped around it. ":true},
        {"option4":false}
        ]
    },
    {id:66,
    Question:"What is the purpose of the z-index and how is it used?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The z-index helps to specify the stack order of positioned elements that may overlap one another.":true}
        ]
    },
    {id:67,
    Question:"What is HTML?",
    Answers:[
        {"Hyper Text Markup Language":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:68,
    Question:"What are Tags?",
    Answers:[
        {"option1":false},
        {"HTML tags are composed of three things: an opening tag, content and ending tag.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:69,
    Question:"All HTML tags have an end tag.",
    Answers:[
        {"TRUE":false},
        {"FALSE":true}
        ]
    },
    {id:70,
    Question:"What is formatting in HTML?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The HTML formatting is a process of format the text for a better look and feel. It uses different tags to make text bold, italicized, underlined.":true}
        ]
    },
    {id:71,
    Question:"How many types of heading does an HTML contain?",
    Answers:[
        {"HTML contains six types of headings which are defined with the <h1> to <h6> tags. ":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:72,
    Question:"How to create a hyperlink in HTML?",
    Answers:[
        {"option1":false},
        {'<a href = "..........."> Link Text </a>':true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:73,
    Question:"Which HTML tag is used to display the data in the tabular form?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"The HTML table tag is used to display data in tabular form (row * column). ":true},
        {"option4":false}
        ]
    },
    {id:74,
    Question:"What are some common lists that are used when designing a page?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"Ordered list (ol), Unordered list (ul), Definition (dl)":true}
        ]
    },
    {id:75,
    Question:"What is the difference between HTML elements and tags?",
    Answers:[
        {"HTML elements communicate to the browser to render text. When the elements are enclosed by brackets <>, they form HTML tags. ":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:76,
    Question:"What is semantic HTML?",
    Answers:[
        {"option1":false},
        {"It is the use of HTML markup to reinforce the semantics or meaning of the content. ":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:77,
    Question:"What is an image map?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"Image map facilitates you to link many different web pages using a single image. ":true},
        {"option4":false}
        ]
    },
    {id:78,
    Question:"How to insert a copyright symbol on a browser page?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"You can insert a copyright symbol by using &copy; or &#169; in an HTML file.":true}
        ]
    },
    {id:79,
    Question:"How to create a nested webpage in HTML?",
    Answers:[
        {"The HTML iframe tag is used to display a nested webpage. ":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:80,
    Question:"How do you keep list elements straight in an HTML file?",
    Answers:[
        {"option1":false},
        {"You can keep the list elements straight by using indents.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:81,
    Question:"Hyperlink only apply to text.",
    Answers:[
        {"FALSE":true},
        {"TRUE":false}
        ]
    },
    {id:82,
    Question:"What is a style sheet?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"A style sheet is used to build a consistent, transportable, and well-designed style template. ":true}
        ]
    },
    {id:83,
    Question:"You can create a multi-colored text on a web page?",
    Answers:[
        {"TRUE":true},
        {"FALSE":false}
        ]
    },
    {id:84,
    Question:"Is it possible to change the color of the bullet?",
    Answers:[
        {"option1":false},
        {"The color of the bullet is always the color of the first text of the list. So, if you want to change the color of the bullet, you must change the color of the text.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:85,
    Question:"Explain the layout of HTML?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"HTML layout specifies a way in which the web page is arranged.":true},
        {"option4":false}
        ]
    },
    {id:86,
    Question:"What is a marquee?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"Marquee is used to put the scrolling text on a web page. ":true}
        ]
    },
    {id:87,
    Question:"How many tags can be used to separate a section of texts?",
    Answers:[
        {"Three tags are used to separate the texts. <br> <p> <blockquote>":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:88,
    Question:"How to make a picture of a background image of a web page?",
    Answers:[
        {"option1":false},
        {'<body background = "image.gif">':true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:89,
    Question:"What are empty elements?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"HTML elements with no content are called empty elements. ":true},
        {"option4":false}
        ]
    },
    {id:90,
    Question:"What is the use of a span tag? ",
    Answers:[
        {"option1":false},
        {"option2":false},
        {"option3":false},
        {"The span tag is used for adding color and background on text, and highlight color text.":true}
        ]
    },
    {id:91,
    Question:"What is the use of an iframe tag?",
    Answers:[
        {"An iframe is used to display a web page within a web page.":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:92,
    Question:"What are the entities in HTML?",
    Answers:[
        {"option1":false},
        {"The HTML character entities are used as a replacement for reserved characters in HTML.":true},
        {"option3":false},
        {"option4":false}
        ]
    },
    {id:93,
    Question:"Why is a URL encoded in HTML?",
    Answers:[
        {"option1":false},
        {"option2":false},
        {'An URL is encoded to convert non-ASCII characters into a format that can be used over the Internet because a URL is sent over the Internet by using the ASCII character-set only. If a URL contains characters outside the ASCII set, the URL has to be converted. The non-ASCII characters are replaced with a "%" followed by hexadecimal digits.':true},
        {"option4":false}
        ]
    },
    {id:94,
    Question:"<!DOCTYPE html> is a HTML tag.",
    Answers:[
        {"TRUE":false},
        {"FALSE":true}
        ]
    },
    {id:95,
    Question:"What is the canvas element in HTML5?",
    Answers:[
        {"The <canvas> element is a container that is used to draw graphics on the web page using scripting language like JavaScript. ":true},
        {"option2":false},
        {"option3":false},
        {"option4":false}
        ]
    }
    ];
