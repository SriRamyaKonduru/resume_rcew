function loadjson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
 {
if(xhr.readyState ===4 && xhr.status =="200")
  {
  callback(xhr.responseText);
  }
 }
xhr.send();
}
loadjson("data.json",function (text) {
  let data=JSON.parse(text);
  console.log(data);
basics(data.left);
education(data.education);
skill(data.skills);
})
var main=document.getElementById('main');
var left=document.createElement("div");
left.classList.add("left");
left.textContent="Profile Details"
left.appendChild(document.createElement("HR"));
main.appendChild(left);
function basics(leftside)
{
var image=document.createElement("img");
image.src=leftside.picture;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=leftside.EmailID;
left.appendChild(email);
var phn=document.createElement("h3");
phn.textContent=leftside.MobileNumber;
left.appendChild(phn);
console.log(left);
}
var right =document.createElement("div");
right.classList.add("right");
main.appendChild(right);
var edu=document.createElement("div");
edu.classList.add("edu1");
edu.textContent="EducationDetails";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
function education(Educa){
  for(i in Educa){
    var e1=document.createElement("div");
    e1.classList.add("edu2");
    e1.textContent=Educa[i].course;
  var ul=document.createElement("ul");
  for(j in Educa[i].college){
    var li=document.createElement("li");
    li.textContent=Educa[i].college[j];
    ul.appendChild(li);
    e1.appendChild(ul);
    edu.appendChild(e1);
}
}
}
var skill_title=document.createElement("div");
skill_title.classList.add("tech_skills");
skill_title.textContent="Technical Skills";
skill_title.appendChild(document.createElement("HR"));
right.appendChild(skill_title);
  function skill(sk)
  {
    var table=document.createElement("table");
    table.classList.add("tab");
    var row="";
    for(var i=0;i<sk.length;i++)
    {
      row=row+"<tr><td>"+sk[i].name+"</td><td>"+sk[i].value+"</td></tr>";
    }
    table.innerHTML=row;
    skill_title.appendChild(table);
  }
