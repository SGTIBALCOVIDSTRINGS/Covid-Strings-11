doc.type html
html lang en
script
header=document create.element (header)
header.style.backgroundcolor=#4caf50
header.style.color=’White’
header.style.padding=’10Px’
header.style.textAlign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings11 championship round’
document AppendChild(Header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=championship overview
heading2=championship code
heading3=championship round questions
heading4=victory
subheading1=team stealing
subheading2=result for championship  matchup
<header.html>
championship overview
contains an overview of the championship
html
head
utf8
viewport content=width=device-width, initial-scale=one
title covidstrings 11 championship bracket
link rel= stylesheet href=css
div id bracket class bracket div
script src bracket.js
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covid strings11 championship.js
<header.html>
championship code 
contains the parts of the championship round before victory
championship game=(highest and lowest remaining seeds ) 
team low seed = lowest remaining seed
team high seed=highest remaining seed
create matchup (team low seed versus team high seed )
createround covid strings11 championship round 
round =document.createelement(div);
round.classlist.add(round);
for (let i = zero; i <teams.length; i += two) 
round.appendchild(creatematchup(teams[i],teams[i + one]));
return round;
<header.html>
championship round questions
the questions asked in the championship round of the covid strings contest
java util.scanner
java.util
championship round questions=questions[25-33]
question25
question26
question27
question28
question29
question30
question31
question32
question33
constructor (non-concatenated)
return category
if category==math problem:
prompt
log
else:
select from multiple choice
if category==multiple choice
select from multiple choice
else:
prompt
log
myclass=new.myclass(concatenated)
return category
if category==math problem:
prompt
log
else:
select from multiple choice
if problem==multiple choice
select from multiple choice
else:
prompt
log
import syntax
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,VictimTeam,PointsToSteal)
If(VictimTeam.Points>=PointToSteal)
VictimTeam.Points-=PointToSteal;
StealingTeamPoints+=PointsToSteal
Console.Log([StealingTeam.Name} Stole Points From {Victim Team Name}!)
Else:
Console.Log({VictimTeam.Name} Doesnt Have Enough Points To Steal)
If Teams Final  Answer==Incorrect:
Opposing Team Steals
Else:
Change Covid Strings Matchup  Score
Substring(Start,End)
Userin.Multiple Choice
If SelectedAnswer==Correct Answer:
Return True
Else:
Return False
<Header.Html>
Victory
Contains The Functions And Processes Necessary To Declare The Winning team
advanceteams=slice(currentteams)
result=declarewinner(team1 score, team2 score)
if team high seed score>=sixty:
console.log(highest remaining seed wins covid strings11)
else:
console.log(lowest remaining seed wins covid strings11)
return filename
