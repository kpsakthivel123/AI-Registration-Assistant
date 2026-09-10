const courses=[
{name:"Data Science",key:"data-science",tag:"Analytics",desc:"Learn data analysis, statistics, Python and machine learning fundamentals.",eligible:["B.Sc","BCA","B.E / B.Tech","M.Sc"],min:50},
{name:"Python & AI",key:"python",tag:"AI",desc:"Build Python skills and explore AI concepts, automation and intelligent applications.",eligible:["B.Sc","BCA","B.E / B.Tech","M.Sc"],min:50},
{name:"Web Development",key:"web",tag:"Development",desc:"Create responsive websites using HTML, CSS, JavaScript and modern web concepts.",eligible:["B.Sc","BCA","B.E / B.Tech","B.Com","M.Sc"],min:45},
{name:"Cyber Security",key:"cyber",tag:"Security",desc:"Understand networks, security fundamentals, threats and safe computing practices.",eligible:["B.Sc","BCA","B.E / B.Tech","M.Sc"],min:50},
{name:"Cloud Computing",key:"cloud",tag:"Cloud",desc:"Explore cloud concepts, virtualisation, deployment and cloud services.",eligible:["B.Sc","BCA","B.E / B.Tech","M.Sc"],min:50},
{name:"Data Analytics",key:"analytics",tag:"Data",desc:"Work with data, dashboards, reporting and analytical decision-making.",eligible:["B.Sc","BCA","B.E / B.Tech","B.Com","M.Sc"],min:45}
];

const grid=document.getElementById("courseGrid");
grid.innerHTML=courses.map(c=>`<div class="course"><span class="tag">${c.tag}</span><h3>${c.name}</h3><p>${c.desc}</p><small>Minimum: ${c.min}%</small><br><button onclick="selectCourse('${c.name}')">Select</button></div>`).join("");

function selectCourse(name){document.getElementById("regCourse").value=name;document.getElementById("registration").scrollIntoView({behavior:"smooth"});}

document.getElementById("eligibilityForm").addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.getElementById("studentName").value.trim(), q=document.getElementById("qualification").value, pct=Number(document.getElementById("percentage").value), pref=document.getElementById("course").value;
 const suitable=courses.filter(c=>c.eligible.includes(q)&&pct>=c.min&&(pref==="all"||c.key===pref));
 const box=document.getElementById("eligibilityResult"); box.classList.remove("hidden","bad");
 if(suitable.length){
  box.innerHTML=`<h3>✓ ${name}, you are eligible for ${suitable.length} course${suitable.length>1?"s":""}.</h3><p><b>Recommended:</b> ${suitable.map(c=>c.name).join(", ")}</p><p>Next step: select a course below and submit the registration request.</p>`;
 }else{
  box.classList.add("bad");box.innerHTML=`<h3>Eligibility not matched</h3><p>Based on ${q} and ${pct}%, no matching course was found for your selected option. Try “Show all suitable courses” or check the course requirements.</p>`;
 }
});

const responses=[
 {words:["register","registration","how do i"],answer:"To register: create your profile → check eligibility → select a course → submit the registration request. You will receive a registration confirmation on this demo page."},
 {words:["b.sc","bsc"],answer:"For B.Sc students, Data Science, Python & AI, Cyber Security, Cloud Computing and Data Analytics are suitable options when the minimum percentage requirement is met."},
 {words:["percentage","mark","marks","minimum"],answer:"The minimum percentage varies by course: 45% for Web Development and Data Analytics, and 50% for the other listed courses."},
 {words:["data science","best course"],answer:"If you enjoy data, statistics and AI, Data Science is a strong choice. Python & AI is also useful if you want to focus on programming and intelligent applications."},
 {words:["python","ai"],answer:"Python & AI covers Python fundamentals plus introductory AI concepts. It is available for several science, computing and engineering qualifications."},
 {words:["cyber","security"],answer:"Cyber Security focuses on networking, security fundamentals, threats and safe computing practices."},
 {words:["cloud"],answer:"Cloud Computing introduces cloud services, virtualisation, deployment and core cloud concepts."},
 {words:["web"],answer:"Web Development focuses on HTML, CSS and JavaScript and accepts a wider range of qualifications in this demo."}
];

function botReply(text){
 const t=text.toLowerCase();
 const hit=responses.find(r=>r.words.some(w=>t.includes(w)));
 return hit?hit.answer:"I can help with course eligibility, minimum percentage, course selection and registration steps. Try asking “Which course is best for B.Sc?”";
}
function addMessage(text,type){const d=document.createElement("div");d.className="message "+type;d.innerHTML=text;document.getElementById("chat").appendChild(d);document.getElementById("chat").scrollTop=99999;}
function ask(text){addMessage(text,"user");setTimeout(()=>addMessage(botReply(text),"bot"),250);}
document.getElementById("chatForm").addEventListener("submit",e=>{e.preventDefault();const i=document.getElementById("chatInput");if(i.value.trim())ask(i.value.trim());i.value="";});

document.getElementById("registrationForm").addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.getElementById("regName").value.trim(), course=document.getElementById("regCourse").value;
 const box=document.getElementById("registrationResult");box.classList.remove("hidden");box.innerHTML=`<h3>✓ Registration Request Submitted</h3><p>Thank you, <b>${name}</b>. Your demo request for <b>${course}</b> has been recorded.</p><p>Status: <b>Pending Review</b></p>`;
});
