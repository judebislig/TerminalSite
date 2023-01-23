var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");
var terminal_content = document.getElementById("terminal_content");

function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>→ ${input}</div>`;
    
    // Checks if empty input
    if (input != "") {
        
        //Command does not exist
        if(!COMMANDS.hasOwnProperty(input)){
            output += `<div><span class="command">No such command: </span>${input} </div>`;
        }
        else{
            output += `<div>${COMMANDS[input]} </div>`; //COMMANDS[input] is the dictionary value
        }
        
        terminal_outputs.innerHTML = `${terminal_outputs.innerHTML+output}`;
        terminal_content.scrollTop = terminal_content.scrollHeight;
    
        if(input == "github"){
            setTimeout(() => {window.open("https://github.com/judebislig", "_blank");}, 2000);
        }
    
        if(input == "linkedin"){
            setTimeout(() => {window.open("https://www.linkedin.com/in/jude-bislig-56547a224/", "_blank");}, 2000);
        }
    }
    
}

function key(e){
    const input = user_input.value;

    if(e.key == "Enter"){
        execute(input);
        user_input.value = "";
        return;
    }

    user_input.innerHTML = input + e.key;
}

document.addEventListener("keypress", key);

const COMMANDS = 
{
    help:
        'Supported commands: <span class="command-keyword">"about"</span>, <span class="command-keyword">"experience"</span>, <span class="command-keyword">"education"</span>, <span class="command-keyword">"skills"</span>, <span class="command-keyword">"contact"</span>, <span class="command-keyword">"github"</span>, <span class="command-keyword">"linkedin"</span>',
    about:
        "Hello, my name is Jude and I'm a second year student at Penn State! I can play piano, the guitar, and can dance!",
    experience:
        'I\'ve used Java and Python for many years now, and recently have picked up web development as well! I have been enjoying every minute of it and love to learn new things.',
    education:
        'I am a second-year student studying Computer Science at Penn State University. I am also in the Schreyer Honors College as well!',
    skills:
        'My technical skills include Python, Java, SQL, HTML, CSS, and JavaScript, among other things.',
    contact:
        'You can access my github repositories through the "github" command, or you can use the "linkedin" command to check out my linkedin!',
    github:
        'opening my GitHub page ...',
    linkedin:
        'opening my Linkedin page...'
    
}